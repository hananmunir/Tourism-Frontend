import React from "react";
import { Container } from "react-bootstrap";
function Confirmation() {
  return (
    <Container
      fluid
      className=' d-flex align-items-center justify-content-center flex-column'
      style={{
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "768px", width: "100%" }}>
        <h1
          style={{
            fontSize: "4.2rem",
            fontWeight: "200",
            margin: "0",
            color: "var(--primaryText)",
          }}
        >
          Congratulations
        </h1>
      </div>
      <h2
        style={{
          fontSize: "1.3rem",
          textTransform: "uppercase",
          fontWeight: "200",
          letterSpacing: "3px",
          margin: "2rem 0",
        }}
      >
        Your Payment Has Been Confirmed
      </h2>
      <p>
        You will recieve a confirmation email shortly.{" "}
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

export default Confirmation;
