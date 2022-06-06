import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Full Layout
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

// Routes
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const Testimonies = lazy(() => import("../Pages/Testimonies"));
const Home = lazy(() => import("../Pages/Home"));
const Packages = lazy(() => import("../Pages/Packages"));
const Package = lazy(() => import("../Pages/Package"));
const NotFound = lazy(() => import("../Components/Errors/404"));
const Checkout = lazy(() => import("../Components/Checkout/Checkout"));
const BookingConfirmation = lazy(() =>
  import("../Components/BookingConfirmation/Confirmation")
);
const PageRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Home /> },
      { path: "/about", exact: true, element: <AboutUs /> },
      { path: "/contact", exact: true, element: <ContactUs /> },
      { path: "/testimonies", exact: true, element: <Testimonies /> },
      { path: "/packages/", exact: true, element: <Packages /> },
      { path: "/package/:id", exact: true, element: <Package /> },
      { path: "/checkout/:id", exact: true, element: <Checkout /> },
    ],
  },
  { path: "/404", exact: true, element: <NotFound /> },
  { path: "/confirmation", exact: true, element: <BookingConfirmation /> },
];

export default PageRoutes;
