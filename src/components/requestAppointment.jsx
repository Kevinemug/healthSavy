import React, { useState } from "react";
import ".././styles/requestAppointment.css";
import { useNavigate, Link } from "react-router-dom";
import Success from "./success";
import axios from "axios";
const RequestAppointment = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    number: "",
    message: "",
  });
  const [formValidity, setFormValidity] = useState({
    name: true,
    number: true,
    message: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, number, message } = formInputs;
    const isNameValid = name.trim().length > 2;
    const isNumberValid = number.trim().length === 10;
    const isMessageValid = message.trim().length > 10;
    setFormValidity({
      name: isNameValid,
      number: isNumberValid,
      message: isMessageValid,
    });
    setFormSubmitted(true);

    if (isNameValid && isMessageValid) {
      try {
        const response = await axios.post(
          `https://health-savvy.onrender.com/api/booking/doctor/64131981b8cc5d7abe053c06`,
          {
            email,
            phoneNumber: number,
            message,
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTE5MTg1OGRjNGRhM2MwMWQ4N2ExYyIsImlhdCI6MTY3ODk2ODE5OCwiZXhwIjoxNjgxNTYwMTk4fQ.emaGc0NuimiWtwn97FpXcs-ALv_g-WQbyUGEvzYbsvo`,
            },
          }
        );
        console.log(response);
        setShowSuccessPopup(true);
        setFormInputs({
          name: "",
          number: "",
          message: "",
        });
        setFormValidity({
          name: true,
          number: true,
          message: true,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCancel = () => {
    navigate("/appointmentBooking");
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="popup">
        <button className="cancel" onClick={handleCancel}>
          X
        </button>
        <div className="title"> SEND REQUEST</div>
        <div className="formContainer">
          <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="text"
              onChange={handleInputChange}
            />
            {formSubmitted && !formValidity.name && (
              <p className="alert alert-danger">Please enter a valid name</p>
            )}

            <label htmlFor="number">Phone number:</label>
            <input
              type="tel"
              id="phone"
              name="number"
              pattern="[0-9]{10}"
              required
              placeholder="07.."
              onChange={handleInputChange}
            />
            {formSubmitted && !formValidity.number && (
              <p className="alert alert-danger">
                Please enter a valid phone number
              </p>
            )}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="ex:          I would like to come for a checkup on monday 8 am"
              onChange={handleInputChange}
            ></textarea>
            {formSubmitted && !formValidity.message && (
              <p className="alert alert-danger">Please enter a valid message</p>
            )}
            {showSuccessPopup && (
              <Success
                description=" Appointment request sent successfully! We will get back to you
            shortly."
              />
            )}

            <input type="submit" value="Send Request"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestAppointment;
