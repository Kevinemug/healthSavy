import React from "react";
import LoginForm from "./signIn";
import "../styles/log.css";
const Log = () => {
  return (
    <>
      <div className="overlayStyles"></div>
      <div className="popupStyles ">
        <LoginForm />
      </div>
    </>
  );
};

export default Log;
