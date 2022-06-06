import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./Package.css";

//import image from "../../../Images/567d216a2af1c.jpg";
function Package({ lg, cost, image, destination }) {
  return (
    <Col className='mt-3' sm={12} md={6} lg={lg ? 6 : 4}>
      <Link to='/packages'>
        <div
          data-aos={lg ? "fade-down" : "fade-up"}
          className='package-container'
        >
          <img src={image} alt='Package' className='package-img' />
          <div className='overlay'></div>
          <div className='package-text'>
            <span className='package-destination'>{destination}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Package;
