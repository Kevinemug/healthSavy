import React from "react";
import Hero from "./hero";
import { NavLink } from "react-router-dom";
import NursaryCards from "./nursaryCards";
const Nursary = () => {
  return (
    <>
      <NavLink to="/appointmentsPage">
        <Hero
          title="Services"
          description="Taking Care Of You Is Our Top Priority"
          image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
        />
      </NavLink>
      <div className="serviceHeader">Our services</div>
      <div className="app">
        <NursaryCards
          title="24/7 Availability"
          description="Our nurses are available 24/7 to provide the care you need when you need it."
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQIlk8NkrMStV7mBkk-GZ3hnZWPpCS_C4hg&usqp=CAU"
        />
        <NursaryCards
          title="Elder care giving"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
          img="https://kellshomehealthcare.com/wp-content/uploads/elementor/thumbs/home-nursing-service-care-in-karachi-1-p44leptaerawlgtezk00ynpa6b6o4jch7ha5a91xes.jpg"
        />
        <NursaryCards
          title="In_Home care giving"
          img="https://tagmanpower.com/assets/images/services/senior-citizen-care.jpg"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
        />
        <NursaryCards
          title="Compassionate Staff"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnsVA2OhSw-XvsfLiodEh4JgYdD_vr-0-3w&usqp=CAU"
        />
        <NursaryCards
          title="Home Physiotherapy"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktELoprAStJa26k81z9QrYzhQXxa0R37TXw&usqp=CAU"
        />
        <NursaryCards
          title="Wound dressing"
          description="Our nurses are compassionate and caring, dedicated to providing you with the highest quality care."
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7z4_rW0oJhXt4aD-U_VDTJJwwyXLd7nJQ&usqp=CAU"
        />
        <NursaryCards
          title="Personalized Care"
          description="We tailor our care to your individual needs and preferences to ensure the best possible outcomes."
          img="https://www.bayshore.ca/wp-content/uploads/2022/08/iStock-1182515848-dark-blue-scrubs-BHH-flipped_WEB.jpg"
        />
      </div>
    </>
  );
};

export default Nursary;
