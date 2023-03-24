import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Fade from "react-awesome-reveal";
import ".././styles/hero.css";

const Hero = ({ title, description, image, fn, link }) => {
  return (
    <>
      <div
        className="heroContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="heroDescription">
          <p className="description animate__animated animate__flash">
            {title}{" "}
          </p>
          <p className=" descriptionb animate__animated animate__bounce">
            {description}
          </p>
        </div>
        <div className="btnContainer">
          <Link to={link}>
            <button className="heroBtn animate__animated animate__bounce">
              {" "}
              Request Membership
            </button>
          </Link>

          <Fade right>
            <div className="heroBtnSpan">
              <BsArrowRightShort />
            </div>
          </Fade>
        </div>
        <div className="btnContainer">
          <button className="heroBtn animate__animated animate__bounce">
            {" "}
            Learn More
          </button>
          <Fade right>
            <div className="heroBtnSpan">
              <BsArrowRightShort />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Hero;
