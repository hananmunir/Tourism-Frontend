import React, { useState } from "react";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Actions/auth";
import Signup from "../Auth/Auth";

import "./Navbar.css";

function CustomNavbar({ transparent }) {
  const user = JSON.parse(localStorage.getItem("TourismAuthData"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const handleLoginShow = () => {
    setIsSignup(false);
    setShow(true);
  };
  const handleRegisterShow = () => {
    setIsSignup(true);
    setShow(true);
  };
  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <>
      <Navbar className=' custom-navbar' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='/'>TravelMe</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto   me-auto my-2 mt-lg-2' navbarScroll>
              <span className='nav-link-hover'>
                <Link to='/' className='own-nav-link'>
                  Home
                </Link>
              </span>
              <span className='nav-link-hover'>
                <Link to='/packages' className='own-nav-link'>
                  Packages
                </Link>
              </span>
              <span className='nav-link-hover'>
                <Link to='/testimonies' className='own-nav-link'>
                  Testimonies
                </Link>
              </span>
              <span className='nav-link-hover'>
                <Link to='/about' className='own-nav-link'>
                  About Us
                </Link>
              </span>
              <span className='nav-link-hover'>
                <Link to='/contact' className='own-nav-link'>
                  Contact Us
                </Link>
              </span>
            </Nav>
            <Stack direction='horizontal' gap={4}>
              {!user ? (
                <>
                  <button className='navbar-btn' onClick={handleLoginShow}>
                    Login
                  </button>
                  <button className='navbar-btn' onClick={handleRegisterShow}>
                    Register
                  </button>
                </>
              ) : (
                <button className='navbar-btn' onClick={handleLogout}>
                  Logout
                </button>
              )}
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Signup
        signup={isSignup}
        show={show}
        setShow={setShow}
        setSignup={setIsSignup}
      />
    </>
  );
}

export default CustomNavbar;
