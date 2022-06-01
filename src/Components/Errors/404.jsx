import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container
      fluid
      className=' d-flex align-items-center justify-content-center flex-column'
      style={{ height: "100vh", textAlign: "center" }}
    >
      <div
        className='notfound-404'
        style={{ maxWidth: "768px", width: "100%" }}
      >
        <h1
          style={{
            fontSize: "8rem",
            fontWeight: "200",
            margin: "0",
            color: "var(--primaryText)",
          }}
        >
          404
        </h1>
      </div>
      <h2
        style={{
          fontSize: "2rem",
          textTransform: "uppercase",
          fontWeight: "200",
          letterSpacing: "3px",
          marginBottom: "2rem",
        }}
      >
        Oops! Nothing was found
      </h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.{" "}
        <a
          href='/'
          style={{
            color: "var(--primaryText)",
            textDecorationStyle: "dotted",
          }}
        >
          Return to homepage
        </a>
      </p>
    </Container>
  );
}

export default NotFound;
