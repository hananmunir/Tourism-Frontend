import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./Checkout.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchPackage, payment } from "../../api/index";
import Loader from "../../layouts/loader/Loader";

// const BASE_URL = "http://localhost:8800/api/packages/images";
const BASE_URL =
  "https://tourism-app-backend-node.herokuapp.com/api/packages/images";
function Checkout() {
  const params = useParams();
  const navigate = useNavigate();
  const [packageDetail, setPackageDetail] = useState({});
  const [amount, setAmount] = useState();
  const authToken = useSelector((state) => state.Auth.token);

  useEffect(() => {
    const getPackage = () => {
      fetchPackage(params.id).then((res) => {
        setPackageDetail(res.data);
      });
    };
    getPackage();
  }, [params.id]);
  useEffect(() => {
    setAmount(packageDetail.cost / 200);
  }, [packageDetail]);
  const onToken = (token) => {
    const data = { token, totalAmount: amount };

    payment(data)
      .then((res) => {
        console.log(res);
        navigate("/confirmation");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {packageDetail ? (
        <div>
          <div className='checkout-text-container'>
            <span className='checkout-text'>Book Your Trip</span>
          </div>
          <Card
            className='p-4 d-flex flex-row my-4'
            style={{ width: "100%", border: "none" }}
          >
            <Card.Img
              variant='top'
              style={{ width: "30%", objectFit: "contain" }}
              src={
                packageDetail.image
                  ? `${BASE_URL}/${packageDetail.image}`
                  : null
              }
            />
            <Card.Body className='ms-5'>
              <Card.Title>{packageDetail.title}</Card.Title>
              <Card.Text>
                Departure Date : {packageDetail.departureDate?.split("T")[0]}
              </Card.Text>
              <Card.Text>Cost : {packageDetail.cost} RS</Card.Text>
              {authToken ? (
                <StripeCheckout
                  token={onToken}
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                  amount={amount * 100}
                  description={`Your total is $${amount}`}
                />
              ) : (
                <span>Please Login to continue</span>
              )}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Checkout;
