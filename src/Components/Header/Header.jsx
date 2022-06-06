import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
const Scene = lazy(() => import("../EarthModel/Scene"));

function Header() {
  return (
    <Container fluid className='header-section'>
      <Row className='header-container p-0 m-0'>
        <Col className='p-0 m-0' style={{ width: "100%" }}>
          <div className='header-text'>
            <span className='header-title'>Begin Your Journey</span>
            <span className='header-description'>
              Lets take off and explore the world. Because in the end, you won’t
              remember the time you spent working in the office or mowing your
              lawn. Climb that goddamn mountain
            </span>
            <button className='header-btn'>
              <Link
                to='/packages'
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Explore
              </Link>
            </button>
          </div>
        </Col>
        <Col className='p-0 m-0'>
          <Scene />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
