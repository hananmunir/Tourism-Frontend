import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
function Footer() {
  return (
    <div className='footer-section'>
      <Container>
        <Row className='footer-container'>
          <Col lg>
            <div className='footer-about'>
              <span className='footer-about-title'>About Travelors</span>
              <span className='footer-about-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolorem magnam nam architecto quod aliquid, et officia, quis,
                quidem eveniet corrupti similique ea? Provident ullam
                perferendis expedita commodi vitae repellendus.
              </span>
            </div>
          </Col>
          <Col lg>
            <div className='footer-navigation'>
              <span className='footer-navigation-title'>Navigation</span>
              <div className='nav-links-container'>
                <ul className='navigation-links'>
                  <li className='navigation-link'>Home</li>
                  <li className='navigation-link'>Packages</li>
                  <li className='navigation-link'>Services</li>
                  <li className='navigation-link'>About</li>
                </ul>
                <ul className='navigation-links'>
                  <li className='navigation-link'>About Us</li>
                  <li className='navigation-link'>Privacy Policy</li>
                  <li className='navigation-link'>Contact Us</li>
                  <li className='navigation-link'>Discount</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg>
            <div className='footer-subs-letter'>
              <span className='footer-subs-letter-title'>
                Subscribe Newsletter
              </span>
              <span className='footer-subs-letter-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              </span>
              <div className='footer-email'>
                <input
                  type='text'
                  className='footer-email-input'
                  placeholder='Enter email'
                />
                <button className='footer-email-button'>Send</button>
              </div>
            </div>
          </Col>
        </Row>
        <div className='footer-social-links'>
          <FaFacebookF className='footer-social-icon fb' />
          <FaTwitter className='footer-social-icon tw' />
          <FaInstagram className='footer-social-icon insta' />
          <FaPinterestP className='footer-social-icon pint' />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
