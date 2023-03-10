import React, { useState } from "react";
import Hero from "./hero";
import Search from "./search";
import PharmaCard from "./pharmaCard";

const Pharmacy = () => {
  const [showContainer, setShowContainer] = useState(false);

  const handleButtonClick = () => {
    setShowContainer(!showContainer);
  };

  return (
    <>
      <Hero
        title="Pharmacy"
        description="We are Less Than 1 KM Away!"
        image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
        onClick={handleButtonClick}
      />
      <Search
        facility="Pharmacies"
        speciality="with the medicine you are looking for"
        search="search by name of medicine"
      />
      <p className="topSearches" style={{ marginLeft: "20px" }}>
        Top Seaches
      </p>
      <div className="containerPharma">
        <PharmaCard
          img="https://images.ctfassets.net/lnbo4srla2av/2FLShzxAxG1INtclSxoG1e/e7a6adf34ed49217173d8d31680cf88e/OCP-pill-pack--pharmacy-page--mobile.png?q=90"
          medicineName="Birth Control Pills"
        />
        <PharmaCard
          img="https://images.ctfassets.net/lnbo4srla2av/Y9xn9RSWcn4seERXX8UWw/c268b3198c47ca124f69f8eaf9750699/carousel-generic-box-title.png?q=90"
          medicineName="Amoxy"
        />
        <PharmaCard
          img="https://www.dailychemist.com/wp-content/uploads/2020/03/para500.jpg"
          medicineName="Paracetamol denk"
        />
        <PharmaCard
          img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
          medicineName="Paracetamol"
        />
        <PharmaCard
          img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
          medicineName="Paracetamol"
        />
        <PharmaCard
          img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
          medicineName="Paracetamol"
        />
      </div>
    </>
  );
};

export default Pharmacy;
