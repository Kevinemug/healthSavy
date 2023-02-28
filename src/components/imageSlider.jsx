import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          {images.map((image, index) => (
            <div key={index} className="sliderContainer">
              <button>{image}</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
