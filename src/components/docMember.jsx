import React, { useState } from "react";
import "../styles/member.css";
import axios from "axios";
const docMember = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    specialization: "",
    profileImage: null,
    license: null,
    province: "",
    district: "",
    street: "",
    email: "",
    role: "doctor",
    password: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "file" ? target.files[0] : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="formi">
        <p className="apply">Apply for membership below</p>
        <form action="https://health-savvy.onrender.com/api/admin/dashboard/doctor">
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              First Name:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Last Name
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
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
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
                value={formData.specialization}
                onChange={handleInputChange}
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
                value={formData.profileImage}
                onChange={handleInputChange}
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
                value={formData.license}
                onChange={handleInputChange}
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
                name="location[province]"
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
                name="location[district]"
                value={formData.location[district]}
                onChange={handleInputChange}
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
                name="location[street]"
                value={formData.location[street]}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.password}
                onChange={handleInputChange}
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
