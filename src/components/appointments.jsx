import React from "react";
import Hero from "./hero";
import { NavLink } from "react-router-dom";
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
      </Fade>
    </>
  );
};

export default Appointments;
