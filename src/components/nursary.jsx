import React from "react";
import Hero from "./hero";
import NursaryCards from "./nursaryCards";
const Nursary = () => {
  return (
    <>
      <Hero
        title="Services"
        description="Taking Care Of You Is Our Top Priority"
        image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
      />
      <div className="app">
        {/* <NursaryCards
          title="24/7 Availability"
          description="Our nurses are available 24/7 to provide the care you need when you need it."
        />
        <NursaryCards
          title="Personalized Care"
          description="We tailor our care to your individual needs and preferences to ensure the best possible outcomes."
        />
        <NursaryCards
          title="Compassionate Staff"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
        /> */}
      </div>
    </>
  );
};

export default Nursary;
