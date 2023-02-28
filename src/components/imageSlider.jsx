import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./hero";

function ImageSlider() {
  const images = ["hello", "goodbye", "and everything in between"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="overall">
        <Slider {...settings}>
          <Hero
            title="Appointments"
            description="You Have Been Waiting For"
            image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
          />
          <Hero
            title="Procedures"
            description="With Procedures And Skill"
            image="https://t3.ftcdn.net/jpg/03/21/23/36/360_F_321233603_JKUNfIr8hPlfLx8OBR9xSAPRsmiIk2Ku.jpg"
          />
          <Hero
            title="Services"
            description="Taking Care Of You Is Our Top Priority"
            image=""
          />
          <Hero
            title="Pharmacy"
            description="We are Less Than 1 KM Away!"
            image=""
          />
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
