import React from "react";
import "./Package.css";
import { Col } from "react-bootstrap";
import img from "../../Images/photo-1575025699516-4735ac10c265.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";

const BASE_URL =
  "https://assign2-express-backend.herokuapp.com/api/posts/images";
function Package({ detail, tripPackage }) {
  return (
    <Col
      xs={12}
      md={detail ? 12 : 6}
      lg={detail ? 12 : 4}
      className={detail ? " " : "mt-3 col-mid-offset-3 p-3"}
    >
      <div
        style={detail ? { border: "none " } : null}
        className={"trip-card" + (detail ? " " : " hover-class")}
      >
        {detail ? null : <div className='trip-date'>12 Oct</div>}

        <div>
          <img
            className='trip-img'
            alt=' trip'
            style={detail ? { height: "70vh " } : {}}
            src={`${BASE_URL}/${tripPackage.image}`}
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
            <span className='trip-details'>
              {detail
                ? tripPackage.description
                : `${tripPackage.description.substring(0, 100)}...`}
            </span>
          </div>
          {detail ? (
            <button className='booking-btn'>Book</button>
          ) : (
            <a href='' className='trip-more-info'>
              READ MORE
            </a>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Package;
