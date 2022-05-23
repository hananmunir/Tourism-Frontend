import React, { lazy } from "react";

const About = lazy(() => import("../Components/aboutUs/about"));

export default function AboutUs() {
  return (
    <div>
      <About />
    </div>
  );
}
