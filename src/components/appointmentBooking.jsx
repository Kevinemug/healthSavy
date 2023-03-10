import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ".././styles/appointmentBooking.css";
const AppointmentBooking = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/appointmentsPage");
  };

  return (
    <>
      <div className="appointmentBookingContainer">
        <div className="overlayStyles"></div>
        <div className="  popupStyles  animate__animated animate__Roll">
          <button className="cancel" onClick={handleCancel}>
            X
          </button>
          <div className="six">
            <div className="four">
              <div className="helperImageContainer">
                <img
                  className="helperImage"
                  src="https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg"
                />
              </div>
              <div className="helperName">Dr.Kex Markessy</div>
              <div className="helperDescription">_Cardiologist</div>
            </div>
            <div className="five">
              <div className="helperDesc">
                Dr.Markessy is a famous world recoganized cardilogist,with over
                20 years of experience ,want to hire him as your private doctor?
                book an appointment with him.
              </div>
            </div>
          </div>
          <div className="bookingButtons">
            <button className="price"> price $50</button>
            <Link to="/log">
              <button className="book">Request Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentBooking;
