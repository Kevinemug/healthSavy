import React from "react";
import Pharmacy from "./pharmacy";
import Footer from "./Footer";
const PharmacyCard = ({ img, medicineName }) => {
  return (
    <>
      <div
        className="card animate__animated animate__bounce"
        style={{ width: "18rem" }}
        id="pharma"
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{medicineName}</h5>
        </div>
        <p
          className="card-text"
          style={{
            padding: "5px",
            fontSize: "10px",
            color: "grey",
            fontWeight: "bolder",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
          sapiente!
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ background: "#43D5CB" }}
        >
          Learn More
        </button>
      </div>
    </>
  );
};

export default PharmacyCard;
