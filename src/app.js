import React from "react";
import Hero from "./components/hero.jsx";
import ImageSlider from "./components/imageSlider.jsx";
import { Navigation } from "./components/navigation.jsx";
import Landing from "./components/landing";
import { Route, Routes } from "react-router-dom";
import "animate.css";

import Pharmacy from "./components/pharmacy.jsx";
import Hospital from "./components/hospital";
import Nursary from "./components/nursary";
import Appointments from "./components/appointments";
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/nursary" element={<Nursary />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
};

export default App;
