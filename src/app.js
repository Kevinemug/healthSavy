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
import SignUp from "./components/signUp";
import Starter from "./views/Starter";
import FullLayout from "./layouts/FullLayout";
import Alerts from "./views/ui/Alerts";
import Badges from "./views/ui/Badges";
import Tables from "./views/ui/Tables";
import Forms from "./views/ui/Forms";
import Buttons from "./views/ui/Buttons";
import Cards from "./views/ui/Cards";
import Grid from "./views/ui/Grid";
import Breadcrumbs from "./views/ui/Breadcrumbs";
import About from "./views/About";
import Member from "./components/member";
import DocMember from "./components/docMember";

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
        <Route path="/docMemberShip" element={<DocMember />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
        <Route path="/memberShip" element={<Member />} />
        <Route path="/dashboard" element={<FullLayout />}>
          <Route path="/dashboard/starter" element={<Starter />} />
          <Route path="/dashboard/alerts" element={<Alerts />} />
          <Route path="/dashboard/badges" element={<Badges />} />
          <Route path="/dashboard/buttons" element={<Buttons />} />
          <Route path="/dashboard/table" element={<Tables />} />
          <Route path="/dashboard/cards" element={<Cards />} />
          <Route path="/dashboard/grid" element={<Grid />} />
          <Route path="/dashboard/forms" element={<Forms />} />
          <Route path="/dashboard/About" element={<Breadcrumbs />} />
        </Route>

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile/login" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
