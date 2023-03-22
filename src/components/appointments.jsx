import React from "react";
import Hero from "./hero";
import { NavLink, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Appointments = () => {
  return (
    <>
      <Fade left>
        <NavLink to="/appointmentsPage" style={{ textDecoration: "none" }}>
          <Hero
            title="Appointments"
            description="You Have Been Waiting For"
            image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
          />
        </NavLink>
        <Link to="/docMemberShip">
          <button>become a member today</button>
        </Link>
      </Fade>
    </>
  );
};

export default Appointments;
