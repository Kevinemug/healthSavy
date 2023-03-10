import React from "react";
import ".././styles/nursaryCard.css";
const NursaryCards = ({ title, description, img }) => {
  return (
    <>
      <div
        className="nurse-service-card"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="nurTcontainer">
          <h2 className="nurTitle">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default NursaryCards;
