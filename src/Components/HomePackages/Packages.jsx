import React from "react";
import { Container, Row } from "react-bootstrap";

import Package from "./Package/Package";
import "./Packages.css";
import image1 from "../../Images/567d216a2af1c.webp";
import image3 from "../../Images/86d9afef-2819-4a3c-a368-7a3ed33e1fab_shutterstock_760589050.webp";
import image2 from "././../../Images/photo-1573843981267-be1999ff37cd.webp";
import image4 from "../../Images/04-dubai.webp";
import image5 from "../../Images/photo-1575025699516-4735ac10c265.webp";
import image6 from "../../Images/01-greece.webp";
import image7 from "../../Images/03-japan.webp";
import image8 from "../../Images/05-london.webp";

function Packages() {
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
          
          <Package
            lg
            cost={300}
            image={image1}
            destination={"Naltar, Pakistan"}
          />
          <Package
            lg
            cost={120}
            image={image2}
            destination={"Resort, Maldives"}
            data-aos='fade-left'
          />
          <Package
            cost={420}
            image={image6}
            destination={"Sontorini, London"}
          />
          <Package cost={150} image={image4} destination={"Camels, Dubai"} />
          <Package cost={50} image={image5} destination={"Sydney, Australia"} />
          <Package cost={70} image={image3} destination={"Hunza, Pakistan"} />
          <Package cost={30} image={image7} destination={"Mount Fuji, Japan"} />
          <Package
            cost={400}
            image={image8}
            destination={"Elizebeth Tower, London"}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Packages;
