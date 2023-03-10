import React from "react";
import ".././styles/medicineInfo.css";
import { NavLink } from "react-router-dom";
const MedicineInfo = () => {
  return (
    <>
      <div className="overlayStyless"></div>
      <div className="  popupStyless  ">
        <div
          className="medInfoimg"
          style={{
            backgroundImage: `url("https://www.dailychemist.com/wp-content/uploads/2020/03/para500.jpg")`,
          }}
        ></div>
        <div className="medName">Paracetamol</div>
        <div className="medDesc">
          Paracetamol, also known as acetaminophen, is a medication used to
          treat pain and fever. It is typically used for mild to moderate pain
          relief. It is available in various forms such as tablets, capsules,
          and syrup.
        </div>
        <div className="back">
          <NavLink to="/pharmacy">
            <button className="backBtn"> Close</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MedicineInfo;
