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
            image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
          />
          <Hero
            title="Procedures"
            description="With Procedures And Skill"
            image="https://as1.ftcdn.net/v2/jpg/02/81/21/10/1000_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg"
          />
          <Hero
            title="Services"
            description="Taking Care Of You Is Our Top Priority"
            image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
          />
          <Hero
            title="Pharmacy"
            description="We are Less Than 1 KM Away!"
            image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
          />
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
