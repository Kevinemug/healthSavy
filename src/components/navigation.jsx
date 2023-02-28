import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Hospitals</a>
        </li>
        <li>
          <a href="#">Pharmacy</a>
        </li>
        <li>
          <a href="#">Nursary</a>
        </li>
        <li>
          <a href="#">Apointments</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};
