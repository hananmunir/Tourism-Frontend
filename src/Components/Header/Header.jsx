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
            <span className='header-title'>Some Random Title</span>
            <span className='header-description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              nihil et earum expedita ea quaerat voluptates, quibusdam esse
              magni velit mollitia dolor illo rerum quos officiis eum alias
              maxime voluptate?
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
          {/* <Earth /> */}
          <Scene />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
