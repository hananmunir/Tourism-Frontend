import React from "react";
import MultiRangeSlider from "../MultiRangeSlider/slider";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./Filter.css";
function Filter() {
  return (
    <>
      <Form className='filter-container'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Row>
        <div className='slider-container'>
          <Form.Label>Range</Form.Label>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />    
        </div>
        <Button as={Col} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Filter;
