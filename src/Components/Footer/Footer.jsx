import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='footer-section'>
      <Container>
        <Row className='footer-container'>
          <Col lg>
            <div className='footer-about'>
              <span className='footer-about-title'>About TotheStars</span>
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
                  <li className='navigation-link'>
                    <Link to='/' className='clickable-link'>
                      Home
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='/packages' className='clickable-link'>
                      Packages
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='#services' className='clickable-link'>
                      Services
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='/about' className='clickable-link'>
                      About
                    </Link>
                  </li>
                </ul>
                <ul className='navigation-links right-navigation-links'>
                  <li className='navigation-link'>
                    <Link to='/about' className='clickable-link'>
                      About Us
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='/' className='clickable-link'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='/contact' className='clickable-link'>
                      Contact Us
                    </Link>
                  </li>
                  <li className='navigation-link'>
                    <Link to='/' className='clickable-link'>
                      Discount
                    </Link>
                  </li>
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
