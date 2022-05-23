import React, { useState } from "react";
import "./Signup.css";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../Actions/auth";

const userData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Signup({ show, setShow, signup, setSignup }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(userData);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (signup) {
      dispatch(signUp({ user: formData }));
    } else {
      dispatch(signIn({ email: formData.email, password: formData.password }));
    }
  };

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
                      value={formData.firstName}
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
                      value={formData.lastName}
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    Password should match!
                  </Form.Control.Feedback>
                </Form.Group>
              ) : null}
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
            <Col>
              {signup ? (
                <span>
                  Already Have An Account?{" "}
                  <span
                    className='clickable'
                    onClick={() => {
                      setFormData(userData);
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
                    className='clickable'
                    onClick={() => {
                      setFormData(userData);
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
