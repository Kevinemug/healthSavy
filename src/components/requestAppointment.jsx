import React, { useState } from "react";
import ".././styles/requestAppointment.css";
import { useNavigate, Link } from "react-router-dom";
import Success from "./success";
const RequestAppointment = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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

  const handleFormSubmit = (event) => {
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
      // Submit the form data
      setShowSuccessPopup(true); // Reset form inputs and validity
    }
  };

  const handleCancel = () => {
    navigate("/appointmentBooking");
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
