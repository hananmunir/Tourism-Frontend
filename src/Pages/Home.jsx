import React, { lazy} from "react";


//Importing components
const Header = lazy(() => import("../Components/Header/Header"));
const Packages = lazy(() => import("../Components/HomePackages/Packages"));
const Services = lazy(() => import("../Components/Services/Services"));

export default function Home() {
 
  return (
    <div>
      <Header />
      <Packages />
      <Services />
    </div>
  );
}
