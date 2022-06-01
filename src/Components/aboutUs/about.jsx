import React from "react";
import "./about.css";
import img from "../../Images/about-us.webp";
import { Container } from "react-bootstrap";
function about() {
  return (
    <>
      <div className='about-container'>
        <img src={img} className='about-img' alt='sun shine '></img>
        <div className='about-title-container'>
          <span className='about-title'>About Us</span>
        </div>
      </div>
      <Container>
        <div className='about-description-container'>
          <span className='about-description-title'>Who Are We</span>
          <span className='about-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus rem porro ab amet accusamus animi possimus repellat
            aspernatur assumenda? Ex assumenda unde atque eaque maiores dicta id
            eius officiis?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis culpa ea autem quaerat. Ducimus consequatur eveniet
            laborum possimus quos aspernatur eligendi, placeat deserunt
            architecto beatae sed eius? Debitis, officiis dicta!
          </span>
        </div>
      </Container>
    </>
  );
}

export default about;
