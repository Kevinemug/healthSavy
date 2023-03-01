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
      <h5 style={{ color: " #43D5CB" }}>Health Savy</h5>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/hospital">Hospitals</a>
        </li>
        <li>
          <a href="/pharmacy">Pharmacy</a>
        </li>
        <li>
          <a href="/nursary">Nursary</a>
        </li>
        <li>
          <a href="/appointments">Appointments</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
      </ul>
    </div>
  );
};
