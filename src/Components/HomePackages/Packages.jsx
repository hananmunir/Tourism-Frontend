import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "./PackageData";
import Package from "./Package/Package";
import "./Packages.css";
import { useState } from "react";

function Packages() {
  const [banners, setBanners] = useState(data);
  return (
    <div className='packages-section'>
      <div className='package-header-text'>
        <span className='package-header-title'>Our Packages</span>
        <span className='package-header-description'>
          Check Out Our Packages
        </span>
      </div>
      <Container>
        <Row className='px-lg-5 mx-lg-5'>
          {banners.map((banner, index) => (
            <Package
              key={index}
              image={banner.image}
              destination={banner.destination}
              lg={index < 2 ? "lg" : ""}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Packages;
