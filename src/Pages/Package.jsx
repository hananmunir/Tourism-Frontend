import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPackages } from "../Actions/packages";
const PackageDetail = lazy(() =>
  import("../Components/PackageDetail/PackageDetail")
);
export default function Package() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchData = async () => {
      await dispatch(getPackages());
    };
    dispatchData();

  }, [dispatch]);

  return (
    <>
      <PackageDetail />
    </>
  );
}
