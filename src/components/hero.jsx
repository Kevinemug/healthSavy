import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import ImageSlider from "./imageSlider";
const Hero = ({ title, description, image }) => {
  return (
    <>
      <div
        className="heroContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="heroDescription">
          <p className="description">{title} </p>
          <p className="description descriptionb">{description}</p>
        </div>
        <div className="btnContainer">
          <button className="heroBtn"> Learn More</button>
          <div className="heroBtnSpan">
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
