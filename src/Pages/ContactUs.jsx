import React, { lazy } from "react";

const Contact = lazy(() => import("../Components/ContactUs/Contact"));

function ContactUs() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default ContactUs;
