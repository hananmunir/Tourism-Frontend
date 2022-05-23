import React, { useState } from "react";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/auth";
import Signup from "../SignUp/Signup";

import "./Navbar.css";

function CustomNavbar({ transparent }) {
  const token = localStorage.getItem("webtoken");
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
    dispatch(logout())
  };
  return (
    <>
      <Navbar className=' custom-navbar' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto  me-auto my-2 mt-lg-0'
              style={{
                maxHeight: "100px",
              }}
              navbarScroll
            >
              <Nav.Link className='nav-link-hover' href='#action1'>
                <Link to='/' className='own-nav-link'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className='nav-link-hover' href='#action2'>
                <Link to='/packages' className='own-nav-link'>
                  Packages
                </Link>
              </Nav.Link>
              <Nav.Link className='nav-link-hover' href='#action3'>
                <Link to='/testimonies' className='own-nav-link'>
                  Testimonies
                </Link>
              </Nav.Link>
              <Nav.Link className='nav-link-hover' href='#action4'>
                <Link to='/about' className='own-nav-link'>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link className='nav-link-hover' href='#action4'>
                <Link to='/contact' className='own-nav-link'>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            <Stack direction='horizontal' gap={4}>
              {!token ? (
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
