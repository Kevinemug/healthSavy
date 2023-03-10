import React from "react";
import { NavLink } from "react-router-dom";
import ".././styles/pharmaCard.css";
const PharmaCard = ({ img, medicineName }) => {
  return (
    <>
      <div className="pharmaCardContainer">
        <div
          className="pharmaImage"
          style={{
            backgroundImage: `url("${img}")`,
          }}
        ></div>
        <div className="medicineName">{medicineName}</div>
        <div className="medBtnContainer">
          <NavLink to="/medicineInfo" style={{ textDecoration: "none" }}>
            <button className="medBtn">Learn more</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PharmaCard;
