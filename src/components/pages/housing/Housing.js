import React from "react";
import { Container, Col, Row } from "../../grid";
import housing from "../../data/housing.json";
import  "./housing.scss"

// Displays housing JSON
const Housing = props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center mt-3">
        <Col addClasses="col-12 text-center">
          <p>
            <h4>Agencies That Can Help You in Your Housing Search</h4>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        {housing.map(provider => (
          // <div>
          <Col addClasses="col-12 m-1 p-3 border shadow-sm text-justify">
            <p className="m-0">
              <strong>Name:</strong> {provider.name}
            </p>
            <p className="m-0">
              <strong>Address:</strong> {provider.address}
            </p>
            <p className="m-0">
              <strong>Ph:</strong> {provider.ph}{" "}
            </p>
            <p className="m-0">
              <strong>URL:</strong>
              <a class="oflow" href={provider.url}> {provider.url}</a>
            </p>
            <p className="m-0"> 
              <strong>Email:</strong> {provider.email}
            </p>
            <p className="m-0">
              <strong>Description:</strong> {provider.description}
            </p>
            <span><strong>Registry:</strong> {provider.registry} </span>
            <span><strong>Felonies:</strong> {provider.felony} </span>
            <span><strong>Fees:</strong> {provider.fees} </span>
            <span><strong>Rent:</strong> {provider.rent} </span>
            <span><strong>Men Only:</strong> {provider.menOnly}</span>

          </Col>
          // </div>
        ))}
      </Row>
    </Container>
  </div>
);
export default Housing;
