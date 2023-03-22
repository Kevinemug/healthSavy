import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
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
      errors.password = "Password must be at least 5 characters";
    }
    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "https://health-savvy.onrender.com/api/doctor/dashboard/login",
          formInputs
        )
        .then((response) => {
          console.log(response);
          const authToken = response.data.token;
          console.log("token:", authToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${authToken}`;
          navigate("/dashboard/starter");
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
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <h4 style={{ color: "grey", fontStyle: "italic" }}>
                  Login here
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
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
                        <div className="invalid-feedback">
                          {formErrors.email}
                        </div>
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
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signUp">Sign up here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
