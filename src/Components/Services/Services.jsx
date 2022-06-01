import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoFastFoodOutline, IoAirplaneOutline } from "react-icons/io5";
import { FaRegBuilding, FaBullhorn } from "react-icons/fa";
import { BiFirstAid } from "react-icons/bi";
import { MdDownhillSkiing } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Container className='my-5 service-section' id='services'>
      <div className='service-title-container'>
        <span className='service-title'>Our Services</span>
        <span className='service-description'>
          We Offer The Following Services
        </span>
      </div>

      <Row>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <FaRegBuilding className='service-icon' />

            <span className='service-card-title'>Affordable Hotels</span>

            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <IoFastFoodOutline className='service-icon' />
            <span className='service-card-title'>Food And Drinks</span>
            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <FaBullhorn className='service-icon' />
            <span className='service-card-title'>Safety Guides</span>
            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <BiFirstAid className='service-icon' />
            <span className='service-card-title'>First Aid</span>
            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <IoAirplaneOutline className='service-icon' />
            <span className='service-card-title'>Fast Travel</span>
            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div data-aos='fade-right' className='service-card'>
            <MdDownhillSkiing className='service-icon' />
            <span className='service-card-title'>Adventure</span>
            <span className='service-card-description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              eos quidem suscipit impedit eaque. Nulla incidunt deleniti
              distinctio illum corporis. Est quod aspernatur illo magnam cumque
              amet nulla id similique.
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
