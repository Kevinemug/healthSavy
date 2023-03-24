import React, { useState } from "react";
import "../styles/member.css";
import axios from "axios";
import Success from "./success";

const Member = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [data, setData] = useState({
    location: {
      province: "",
      district: "",
      street: "",
      address:"",
    },
    license: null,
    pharmacyImage: null,
    profileImage: null,
    email: "",
    password: "",
    pharmacyName: "",
    pharmacistName: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submiting..");
    const formData = new FormData();
    formData.append("location[province]", data.location.province);
    formData.append("location[district]", data.location.district);
    formData.append("location[street]", data.location.street);
    formData.append("location[address]", data.location.address);
    formData.append("license", data.license);
    formData.append("pharmacyImage", data.pharmacyImage);
    formData.append("profileImage", data.profileImage);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("pharmacyName", data.pharmacyName);
    formData.append("pharmacistName", data.pharmacistName);
    formData.append("phoneNumber", data.phoneNumber);
    try {
      const response = await axios.post(
        "https://health-savvy.onrender.com/api/register/pharmacy/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setShowSuccessPopup(true);
  };

  return (
    <>
      <div className="formi">
        <p className="apply">Apply for membership below</p>
        <form onSubmit={handleSubmit}>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacy Name:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="pharmacyName"
                value={data.pharmacyName}
                class="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacist Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="pharmacistName"
                value={data.pharmacistName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Tel:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacy Image
            </label>
            <div class="col-sm-10">
              <input
                type="file"
                class="form-control"
                name="pharmacyImage"
                id="inputEmail3"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Profile Image
            </label>
            <div class="col-sm-10">
              <input
                type="file"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
                name="profileImage"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              License
            </label>
            <div class="col-sm-10">
              <input
                type="file"
                class="form-control"
                id="inputEmail3"
                name="license"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Province
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                value={data.location.province}
                name="province"
                onChange={handleLocationChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              District
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                onChange={handleLocationChange}
                value={data.location.district}
                name="district"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Street
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                onChange={handleLocationChange}
                value={data.location.street}
                name="street"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Address
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                onChange={handleLocationChange}
                value={data.location.address}
                name="address"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputPassword3"
                onChange={handleChange}
                value={data.email}
                name="email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  I agree to terms and conditions
                </label>
              </div>
            </div>
          </div>
          {showSuccessPopup && (
            <Success description=" Your Application for membership have been received successfully!we will reach out to you as soon as possible!" />
          )}

          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Member;
