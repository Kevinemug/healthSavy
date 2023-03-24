import React, { useState } from "react";
import "../styles/member.css";
import axios from "axios";
import Success from "./success";

const docMember = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [data, setData] = useState({
    location: {
      province: "",
      district: "",
      street: "",
    },
    license: null,
    ProfileImage: null,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    description: "",
    role: "Doctor",
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
    formData.append("ProfileImage", data.ProfileImage);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("description", data.description);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phoneNumber", data.phoneNumber);
    // Use forEach to add each specialization value as an array
    data.specialization.forEach((value) => {
      formData.append("specialization[]", value);
    });
    try {
      const response = await axios.post(
        "https://health-savvy.onrender.com/api/admin/dashboard/doctor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTJlNTc2MDVkNGVhN2Q3ODQ3MWQ4OCIsImlhdCI6MTY3ODk2NjE5NSwiZXhwIjoxNjgxNTU4MTk1fQ.ta6ttAQBvDnwL5BOGSLtkqZJVhI4sz6Qhegr8Yckgio`,
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
              First Name:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Last Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Description
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="description"
                value={data.description}
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
              Specialization
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                name="specialization"
                value={data.specialization}
                onChange={handleSpecializationChange}
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
                name="ProfileImage"
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
                name="licence"
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
                name="province"
                value={data.location.province}
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
                name="district"
                value={data.location.district}
                onChange={handleLocationChange}
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
                name="street"
                value={data.location.street}
                onChange={handleLocationChange}
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
                name="email"
                value={data.email}
                onChange={handleChange}
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
                name="password"
                value={data.password}
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
          <div class="form-group row">
            {showSuccessPopup && (
              <Success description=" Your Application for membership have been received successfully!we will reach out to you as soon as possible!" />
            )}

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

export default docMember;
