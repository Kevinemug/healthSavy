import React, { useState } from "react";
import axios from "axios";
import Success from "./success";

import "../styles/member.css";
function HospitalForm() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [data, setData] = useState({
    location: {
      province: "",
      district: "",
      street: "",
    },
    license: null,
    hospitalImage: null,
    email: "",
    password: "",
    hospitalName: "",
    phoneNumber: "",
    specialization: [],
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

  const handleSpecializationChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      specialization: [value], // store value as an array
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
    formData.append("hospitalImage", data.hospitalImage);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("hospitalName", data.hospitalName);
    formData.append("phoneNumber", data.phoneNumber);
    // Use forEach to add each specialization value as an array
    data.specialization.forEach((value) => {
      formData.append("specialization[]", value);
    });
    try {
      const response = await axios.post(
        "https://health-savvy.onrender.com/api/register/hospital/",
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
    <div className="formi">
      <p className="apply">Apply for membership below</p>

      <form onSubmit={handleSubmit}>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Province:
            <input
              type="text"
              name="province"
              value={data.location.province}
              onChange={handleLocationChange}
              id="inputEmail3"
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            District:
            <input
              type="text"
              name="district"
              value={data.location.district}
              onChange={handleLocationChange}
              class="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Street:
            <input
              type="text"
              name="street"
              value={data.location.street}
              onChange={handleLocationChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Address:
            <input
              type="text"
              name="address"
              value={data.location.address}
              onChange={handleLocationChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            License:
            <input
              type="file"
              name="license"
              onChange={handleFileChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Hospital Image:
            <input
              type="file"
              name="hospitalImage"
              onChange={handleFileChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Email:
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Password:
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>{" "}
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Tel:
            <input
              type="text"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>{" "}
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            Hospital Name
            <input
              type="text"
              name="hospitalName"
              value={data.hospitalName}
              onChange={handleChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>{" "}
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">
            specialization
            <input
              type="text"
              name="specialization"
              value={data.specialization}
              onChange={handleSpecializationChange}
              className="form-control"
              style={{ width: "500px" }}
            />
          </label>{" "}
        </div>
        {showSuccessPopup && (
          <Success description=" Your Application for membership have been received successfully!we will reach out to you as soon as possible!" />
        )}

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
export default HospitalForm;
