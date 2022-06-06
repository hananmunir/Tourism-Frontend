import React, { useState, useEffect } from "react";
import "./Testimonies.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { GoQuote } from "react-icons/go";
import data from "./data";
import { Container } from "react-bootstrap";
function Testimonies({ home }) {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - (home ? 5 : 1);
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='testimoniesSection'>
      <div className='title'>
        <h2>Testimonials</h2>
        <span style={{ opacity: "0.5" }}>
          The Satisfaction of our customers is our top priority
        </span>
      </div>

      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4 className='testimonyName'>{name}</h4>
              <p className='testimonyText'>{quote}</p>
              <GoQuote className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <IoMdArrowRoundBack />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <IoMdArrowRoundForward />
        </button>
      </div>
    </section>
  );
}

export default Testimonies;
