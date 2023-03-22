import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import Success from "./success";

const SignUp = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!validateEmail(formInputs.email)) {
      errors.email = "Invalid email address";
    }
    if (formInputs.password.length < 4) {
      errors.password = "Password must be at least  5 characters";
    }
    if (formInputs.firstName.length < 3) {
      errors.firstName = "Enter you first name correctly";
    }
    if (formInputs.lastName.length < 3) {
      errors.lastName = "Enter you last  name correctly";
    }
    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "https://health-savvy.onrender.com/api/client/createAccount",
          formInputs
        )
        .then((response) => {
          console.log(response);
          //   <Success description="you have successfully created an account" />;
          alert("Account created successfully,you can now login!");
          navigate("/log");
        })
        .catch((error) => {
          console.log(error);
          setFormErrors({
            ...formErrors,
            password: "Invalid email or password",
          });
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="card">
            <div className="card-header">
              <h4
                style={{ color: "grey", fontStyle: "italic", fontSize: "12px" }}
              >
                sign up before you send appointment request
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formInputs.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.firstName && (
                    <div className="invalid-feedback">
                      {formErrors.firstName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formInputs.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.lastName && (
                    <div className="invalid-feedback">
                      {formErrors.lastName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                    </div>
                    <input
                      type="email"
                      className={`form-control ${
                        formErrors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={formInputs.email}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.email && (
                      <div className="invalid-feedback">{formErrors.email}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                    </div>
                    <input
                      type="password"
                      className={`form-control ${
                        formErrors.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={formInputs.password}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.password && (
                      <div className="invalid-feedback">
                        {formErrors.password}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <p
                  style={{
                    color: "grey",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                >
                  Already have an account? <Link to="/log">login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
