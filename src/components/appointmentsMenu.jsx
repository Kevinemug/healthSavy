import React from "react";
import ".././styles/appointments.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
const AppointmentsMenu = () => {
  return (
    <>
      <div>
        <div className="appointmentIconwel">
          <div className="appointmentsMenuIcon">
            <BiMenuAltLeft className="appIccon" />
          </div>
          <div className="appWelcome">Welcome</div>
        </div>
      </div>

      <div className="appointmentSeachContainer">
        <div className="appParagraph">Find your doctor or nurse</div>
        <div className="appSearch">
          {" "}
          <AiOutlineSearch className="searchapp" />
          <input type="text" placeholder="search by medical condition" />
        </div>
      </div>
    </>
  );
};

export default AppointmentsMenu;
