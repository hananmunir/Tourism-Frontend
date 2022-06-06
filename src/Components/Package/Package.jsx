import React from "react";
import "./Package.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { useEffect } from "react";

// const BASE_URL = "http://localhost:8800/api/packages/images";
const BASE_URL =
  "https://tourism-app-backend-node.herokuapp.com/api/packages/images";

function Package({ details, tripPackage }) {
  useEffect(() => {
    AOS.init({ duration: 700 });
  });

  const navigate = useNavigate();
  const handleBooking = () => {
    if (details) {
      navigate(`/checkout/${tripPackage._id}`);
    }
  };
  const handleClick = () => {
    if (tripPackage._id && !details) {
      navigate(`/package/${tripPackage._id}`);
    }
  };
  return (
    <Col
      xs={12}
      md={details ? 12 : 6}
      lg={details ? 12 : 4}
      className={details ? " " : "mt-3 col-mid-offset-3 p-3"}
      onClick={handleClick}
    >
      <div
        data-aos={details ? null : "fade-right"}
        style={details ? { border: "none " } : null}
        className={"trip-card" + (details ? " " : " hover-class")}
      >
        {details ? null : <div className='trip-date'>12 Oct</div>}

        <div>
          <img
            className='trip-img'
            alt=' trip'
            style={details ? { height: "70vh " } : {}}
            src={tripPackage.image ? `${BASE_URL}/${tripPackage.image}` : null}
          />
        </div>
        <div className='trip-text'>
          <div className='trip-info'>
            <div className='trip-destination'>
              <FaLocationArrow className='tag-icon'></FaLocationArrow>
              <span className='trip-destination-tag'>
                {tripPackage.destination}
              </span>
            </div>
            <div className='trip-duration'>
              <BsCalendarEventFill className='tag-icon'></BsCalendarEventFill>
              <span className='trip-duration-tag'>{`${
                tripPackage.duration
              } days ${tripPackage.duration + 1} nights`}</span>
            </div>
          </div>
          <div className='trip-desc'>
            <span className='trip-title'> {tripPackage.title}</span>
            <span className='trip-detailss'>
              {details
                ? tripPackage.description
                : `${tripPackage.description.substring(0, 100)}...`}
            </span>
          </div>
          {details ? (
            <button className='booking-btn' onClick={handleBooking}>
              Book
            </button>
          ) : (
            <a href={`/packages/${tripPackage._id}`} className='trip-more-info'>
              READ MORE
            </a>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Package;
