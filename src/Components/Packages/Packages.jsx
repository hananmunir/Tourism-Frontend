import React, { useState, useEffect } from "react";
import "./Packages.css";
import packagesHeader from "../../Images/packages-header.webp";
import { Container, Row, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Package from "../Package/Package";
//import Filter from "../Filter/Filter";
import { getPackages } from "../../Actions/packages";

function Packages() {
  const dispatch = useDispatch(); //for dispatching the action

  const packages = useSelector((state) => {
    return state.Packages.packages;
  }); //for getting the packages from the store

  const totalDocuments = useSelector((state) => {
    return state.Packages.totalPackages;
  }); //for getting the total number of packages from the store

  const perPage = 6; //for setting the number of packages per page
  const [active, setActive] = useState(1); //for setting the active page
  let items = [];

  for (
    let number = 1;
    number <= Math.ceil(totalDocuments / perPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(Number(number))}
      >
        {number}
      </Pagination.Item>
    );
  } //for setting the pagination

  useEffect(() => {
    dispatch(getPackages(active));
  }, [active, dispatch]);
  return (
    <>
      <div className='packages-header'>
        <img
          src={packagesHeader}
          alt='Landscape'
          className='packages-header-img'
        />
        <div className='packages-text-wrapper'>
          <span className='packages-text'>Choose Your Travel Destination</span>
        </div>
      </div>

      <Container className='my-5'>
        <div className='package-title-wrapper'>
          <span className='packages-title'>Packages</span>
        </div>
        {/* <Filter/> */}
        <Row>
          {packages?.map((packageItem) => (
            <Package key={packageItem._id} tripPackage={packageItem} />
          ))}
        </Row>
      </Container>
      <div className='pagination-container'>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
}

export default Packages;
