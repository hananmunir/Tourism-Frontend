import React, { lazy } from "react";
import { useSelector } from "react-redux";
import Loader from "../../layouts/loader/Loader";
import "./PackageDetail.css";

const Package = lazy(() => import("../Package/Package"));
function PackageDetail() {
  const packages = useSelector((state) => {
    return state.Packages;
  });

  return (
    <>
      {" "}
      {packages.length === 0 ? (
        <Loader />
      ) : (
        <Package detail tripPackage={packages[0]} />
      )}{" "}
    </>
  );
}

export default PackageDetail;
