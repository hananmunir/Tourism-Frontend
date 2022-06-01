import React, { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPackage } from "../api/index";
import Loader from "../layouts/loader/Loader";
const PackageDetail = lazy(() => import("../Components/Package/Package"));
export default function Package() {
  const params = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  
  useEffect(() => {
    const getPackage = async () => {
      const data = await fetchPackage(params.id);
      setPackageDetail(data.data);
    };
    getPackage();
  }, [params.id]);

  return (
    <>
      {packageDetail ? (
        <PackageDetail details tripPackage={packageDetail} />
      ) : (
        <Loader />
      )}
    </>
  );
}
