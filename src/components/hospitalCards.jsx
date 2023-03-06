import React from "react";
import { HiLocationMarker } from "react-icons/hi";
const HospitalCards = ({ hospitalImg, hospitalName, hospitalKm }) => {
  return (
    <>
      <div className="hospitalCardContainer">
        <div
          className="imageContainer"
          style={{
            backgroundImage: `url(${hospitalImg})`,
          }}
        ></div>
        <div className="hospitalName">{hospitalName}</div>
        <div className="locationContainer">
          <span>
            <HiLocationMarker style={{ color: "dodgerblue" }} />{" "}
            <span className="loc"> Located {hospitalKm}km from you</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HospitalCards;
