import React, { lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchPackage } from "../api/index";
import Loader from "../layouts/loader/Loader";
const PackageDetail = lazy(() => import("../Components/Package/Package"));
export default function Package() {
  const params = useParams();
  const navigate = useNavigate();
  const [packageDetail, setPackageDetail] = useState();

  useEffect(() => {
    const getPackage = () => {
      fetchPackage(params.id)
        .then((res) => setPackageDetail(res.data))
        .catch(() => navigate("/404"));
    };
    getPackage();
  }, [params.id]);
  console.log(packageDetail);
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
