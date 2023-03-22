import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Landing = lazy(() => import("../components/landing.jsx"));
const Hospital = lazy(() => import("../components/hospital.jsx"));
const Pharmacy = lazy(() => import("../components/pharmacy.jsx"));
const Nursary = lazy(() => import("../components/nursary.jsx"));
const Appointments = lazy(() => import("../components/appointments.jsx"));
const Profile = lazy(() => import("../components/profile.jsx"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/pharmacy",
    element: <Pharmacy />,
  },
  {
    path: "/nursary",
    element: <Nursary />,
  },
  {
    path: "/appointments",
    element: <Appointments />,
  },
  { path: "/Hospital", element: <Hospital /> },
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/starter" /> },
      { path: "/dashboard/starter", exact: true, element: <Starter /> },
      { path: "/dashboard/about", exact: true, element: <About /> },
      { path: "/dashboard/alerts", exact: true, element: <Alerts /> },
      { path: "/dashboard/badges", exact: true, element: <Badges /> },
      { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/dashboard/cards", exact: true, element: <Cards /> },
      { path: "/dashboard/grid", exact: true, element: <Grid /> },
      { path: "/dashboard/table", exact: true, element: <Tables /> },
      { path: "/dashboard/forms", exact: true, element: <Forms /> },
      { path: "/dashboard/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
