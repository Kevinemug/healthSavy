import React from "react";
import ".././styles/docnurse.css";
import { Link } from "react-router-dom";
const DoctorNurseCards = ({ image, name, field }) => {
  return (
    <>
      <div className="docNurseContainer">
        <div
          style={{
            backgroundImage: `url(${image})`,
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="docNurseDescription">
          <p className="doci"> {name}</p>
          <p className="cari">{field}</p>
          <Link to="/appointmentBooking">
            <p className="appointment">Appointment</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorNurseCards;
