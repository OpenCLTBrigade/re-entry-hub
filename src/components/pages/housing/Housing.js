import React from "react";
import { Container, Col, Row } from "../../grid";
import housing from "../../data/housing.json";
import  "./housing.scss"

// Displays housing JSON
const Housing = props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center m-5">
        <Col addClasses="col-8 text-center">
          <p>
            <h3>Agencies That Can Help You in Your Housing Search</h3>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        {housing.map(provider => (
          // <div>
          <Col addClasses="col-5 m-2 p-4 border shadow text-justify">
            <p>
              <strong>Name:</strong> {provider.name}
            </p>
            <p>
              <strong>Address:</strong> {provider.address}
            </p>
            <p>
              <strong>Ph:</strong> {provider.ph}{" "}
            </p>
            <p>
              <strong>URL:</strong>
              <a class="oflow" href={provider.url}> {provider.url}</a>
            </p>
            <p>
              <strong>Email:</strong> {provider.email}
            </p>
            <p>
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
