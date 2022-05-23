import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const Home = lazy(() => import("../Pages/Home"));
const Packages = lazy(() => import("../Pages/Packages"));
const Package = lazy(() => import("../Pages/Package"));

const PageRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Navigate to='/home' /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/about", exact: true, element: <AboutUs /> },
      { path: "/contact", exact: true, element: <ContactUs /> },
      { path: "/packages", exact: true, element: <Packages /> },
      { path: "/packages/:id", exact: true, element: <Package /> },
    ],
  },
];

export default PageRoutes;
