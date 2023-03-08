import React from "react";
import ".././styles/requestAppointment.css";
import { useNavigate, Link } from "react-router-dom";

const RequestAppointment = () => {
  const navigate = useNavigate();

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
          <form className="form">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="text"
            />

            <label for="email">Phone number:</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="07..."
              required
            />

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Send Request"></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestAppointment;
