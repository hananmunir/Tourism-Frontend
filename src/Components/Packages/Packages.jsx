import React from "react";
import "./Packages.css";
import packagesHeader from "../../Images/packages-header.jpg";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Package from "../Package/Package";
import Filter from "../Filter/Filter";
function Packages() {
  const packages = useSelector((state) => {
    return state.Packages;
  });
  return (
    <>
      <div className='packages-header'>
        <img
          src={packagesHeader}
          alt='Landscape'
          className='packages-header-img'
        />
        <div className='packages-text-wrapper'>
          <span className='packages-text'>Choose Your Travel Destination</span>
        </div>
      </div>

      <Container className='my-5'>
        <div className='package-title-wrapper'>
          <span className='packages-title'>Packages</span>
        </div>
        {/* <Filter/> */}
        <Row>
          {packages.map((packageItem) => (
            <Package key={packageItem.id} tripPackage={packageItem} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Packages;
