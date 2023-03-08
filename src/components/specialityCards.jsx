import React from "react";
import ".././styles/specialityCard.css";
import { GiLungs } from "react-icons/gi";
const SpecialityCard = () => {
  return (
    <>
      <div className="specialityCardContainer">
        <div className="lungsContainer">
          <GiLungs className="lungs" />
        </div>
        <div className="specialityDescription">
          <p className="cardi">Cardiologist</p>
          <p className="docs">23 doctors</p>
        </div>
      </div>
    </>
  );
};

export default SpecialityCard;
