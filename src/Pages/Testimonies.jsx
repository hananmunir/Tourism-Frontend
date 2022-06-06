import React, { lazy } from "react";
const Testimony = lazy(() => import("../Components/Testimonies/Testimonies"));
function Testimonies() {
  return (
    <div>
      <Testimony />
    </div>
  );
}

export default Testimonies;
