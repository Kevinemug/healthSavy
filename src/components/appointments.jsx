import React from "react";
import Hero from "./hero";
import { Fade } from "react-awesome-reveal";
const Appointments = () => {
  return (
    <>
      <Fade left>
        <Hero
          title="Appointments"
          description="You Have Been Waiting For"
          image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
        />
      </Fade>
    </>
  );
};

export default Appointments;
