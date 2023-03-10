import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Success = ({ description }) => {
  return (
    <>
      <div className="message overlay">
        <div className="popup">
          <div className="success-icon">
            <FaCheckCircle style={{ fontSize: "40px", color: "green" }} />
          </div>
          <div className="desc" style={{ fontStyle: "italic" }}>
            {description}
          </div>
          <NavLink to="/appointmentsPage">
            <button className="btn btn-success" style={{ marginLeft: "100px" }}>
              close
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Success;
