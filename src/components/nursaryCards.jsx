import React from "react";
import ".././styles/nursaryCard.css";
const NursaryCards = ({ title, description }) => {
  return (
    <>
      <div
        className="nurse-service-card"
        style={{ background: `url("./image/hospital.jpg")` }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default NursaryCards;
