import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Checkout.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchPackage } from "../../api/index";
import Loader from "../../layouts/loader/Loader";

const BASE_URL = "http://localhost:8800/api/packages/images";
function Checkout() {
  const params = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  const [amount, setAmount] = useState(0);
  const authToken = useSelector((state) => state.Auth.token);

  useEffect(() => {
    const getPackage = async () => {
      const data = await fetchPackage(params.id);
      setPackageDetail(data.data);
      setAmount(Number(packageDetail.cost / 200));
    };
    getPackage();
  }, [params.id]);

  const onToken = (token) => {
    const data = { token, totalAmount: amount };
    axios
      .post("http://localhost:8800/api/payment", data)
      .then((res) => {
        console.log(res);
        alert("Payment Successful");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {packageDetail ? (
        <Card className='p-4 d-flex flex-row' style={{ width: "100%" }}>
          <Card.Img
            variant='top'
            style={{ width: "30%", objectFit: "contain" }}
            src={
              packageDetail.image ? `${BASE_URL}/${packageDetail.image}` : null
            }
          />
          <Card.Body>
            <Card.Title>{packageDetail.title}</Card.Title>
            <Card.Text>
              Departure Date : {packageDetail.departureDate}
            </Card.Text>
            <Card.Text>Cost : {packageDetail.cost} RS</Card.Text>
            {authToken ? (
              <StripeCheckout
                token={onToken}
                stripeKey='pk_test_51L46bxKC3q9Ycw49E3YC7iNFrTuLcMsY6QkspSfXMywqv6ZTRKrmZUaYExGUFEW9bOHJiBMMyRvazQT39b6fFLrm003faDTgB8'
                amount={amount * 100}
                description={`Your total is $${amount}`}
              />
            ) : (
              <span>Please Login</span>
            )}
          </Card.Body>
        </Card>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Checkout;
