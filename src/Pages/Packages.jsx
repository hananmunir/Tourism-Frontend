import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPackages } from "../Actions/packages";
const PackagesSection = lazy(() => import("../Components/Packages/Packages"));
export default function Packages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);
  return (
    <>
      <PackagesSection />
    </>
  );
}
