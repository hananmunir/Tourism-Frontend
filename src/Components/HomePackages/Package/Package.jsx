import React from "react";
import { Col } from "react-bootstrap";
import "./Package.css";
//import image from "../../../Images/567d216a2af1c.jpg";
function Package({ lg, cost, image, destination }) {
  return (
    <Col className='mt-3' sm={12} md={6} lg={lg ? 6 : 4}>
      <div className='package-container'>
        <img src={image} alt='Package' className='package-img' />
        <div className='overlay'></div>
        <div className='package-text'>
          <span className='package-cost'>${cost}</span>
          <span className='package-destination'>{destination}</span>
        </div>
      </div>
    </Col>
  );
}

export default Package;
