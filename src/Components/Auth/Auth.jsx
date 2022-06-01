import React, { useState } from "react";
import { ERROR } from "../../Constants/actionTypes";
import { useEffect } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUp, signIn } from "../../Actions/auth";

// user empty
const user = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const clickable = { cursor: "pointer", color: " blue" }; // for styling
function Signup({ show, setShow, signup, setSignup }) {
  const dispatch = useDispatch(); // for dispatching actions
  let error = useSelector((state) => state.Auth.error); // for getting error from redux store
  const [formData, setFormData] = useState(user); // for storing form data
  const [validated, setValidated] = useState(false); // for validating form

  useEffect(() => {
    // for clearing form error
    setValidated(false);
    // for clearing form data
    setFormData(user);
    // for clearing error
    dispatch({ type: ERROR, payload: "" });
  }, [signup, show]);

  // for handling form sibmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // for validating form
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    // for checking password and confirm password
    if (formData.password !== formData.confirmPassword) {
      dispatch({
        type: ERROR,
        payload: "Password and Confirm Password does not match",
      });
      return;
    }

    if (validated) {
      if (signup) {
        // for dispatching signup action
        dispatch(signUp(formData, setSignup));
      } else {
        // for dispatching signin action
        dispatch(signIn(formData.email, formData.password));
      }
    }
  };

  // using the same form to render both signup and signin
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{signup ? "Register" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              {signup ? (
                <>
                  <Form.Group
                    as={Col}
                    md='6'
                    className='mb-1'
                    controlId='validationCustom01'
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type='text'
                      placeholder='First name'
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      First Name is Required!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md='6'
                    className='mb-1'
                    controlId='validationCustom02'
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type='text'
                      placeholder='Last name'
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      Last Name is Required!
                    </Form.Control.Feedback>
                  </Form.Group>
                </>
              ) : null}
              <Form.Group className='mb-2' controlId='validationCustom03'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={(e) => {
                    error = null;
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  Enter a valid Email!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-2' controlId='validationCustom04'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={(e) => {
                    error = null;
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  Password is Required!
                </Form.Control.Feedback>
              </Form.Group>
              {signup ? (
                <Form.Group className='mb-2' controlId='validationCustom05'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Confirm Password'
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Password should match!
                  </Form.Control.Feedback>
                </Form.Group>
              ) : null}
              <span style={{ color: "red" }}>{error}</span>
            </Row>

            {signup ? (
              <>
                <Form.Group className='mb-3'>
                  <Form.Check
                    required
                    label='I am above 13 years old'
                    feedback='You must agree before submitting.'
                    feedbackType='invalid'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Check
                    required
                    label='Agree to terms and conditions'
                    feedback='You must agree before submitting.'
                    feedbackType='invalid'
                  />
                </Form.Group>
              </>
            ) : (
              <Form.Group className='mb-3'>
                <Form.Check label='Remember Me' />
              </Form.Group>
            )}

            <Button type='submit'>{signup ? "Register" : "Login"}</Button>
          </Form>
          <Row className='mt-4'>
            <span>
              For Admin login{" "}
              <a href='#' style={{ textDecoration: "none", color: "blue" }}>
                Click Here
              </a>
            </span>
          </Row>
          <Row className='mt-1'>
            <Col>
              {signup ? (
                <span>
                  Already Have An Account?{" "}
                  <span
                    style={clickable}
                    onClick={() => {
                      setFormData(user);
                      setValidated(false);
                      setSignup(false);
                    }}
                  >
                    Login Here
                  </span>
                </span>
              ) : (
                <span>
                  Don't have an account?{" "}
                  <span
                    style={clickable}
                    onClick={() => {
                      setFormData(user);
                      setValidated(false);
                      setSignup(true);
                    }}
                  >
                    Register Here
                  </span>
                </span>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Signup;
