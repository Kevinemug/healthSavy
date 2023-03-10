import React from "react";
import Hero from "./components/hero.jsx";
import ImageSlider from "./components/imageSlider.jsx";
import { Navigation } from "./components/navigation.jsx";
import Landing from "./components/landing";
import { Route, Routes } from "react-router-dom";
import "animate.css";

import Create from "./components/create.jsx";
import Pharmacy from "./components/pharmacy.jsx";
import Hospital from "./components/hospital";
import Nursary from "./components/nursary";
import Appointments from "./components/appointments";
import Profile from "./components/profile";
import Login from "./components/login";
import Log from "./components/log";
import AppointmentsPage from "./components/appointmentsPage";
import AppointmentBooking from "./components/appointmentBooking";
import RequestAppointment from "./components/requestAppointment";
import MedicineInfo from "./components/medicineInfo";

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
        <Route path="/medicineInfo" element={<MedicineInfo />} />
        <Route path="/appointmentsPage" element={<AppointmentsPage />} />
        <Route path="/requestAppointment" element={<RequestAppointment />} />
        <Route path="/appointmentBooking" element={<AppointmentBooking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
        <Route path="/profile/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
