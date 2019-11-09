import React from "react";
import { Container, Col, Row } from "../../grid";
import health from "../../data/health.json";
// Displays health provider JSON
//
const Health = props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center m-5">
        <Col addClasses="col-10 text-center">
          <p>
            <h3>Agencies That Can Help You  Mental Health & Medical</h3>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        {health.map(provider => (
          // <div>
          <Col addClasses="col-5 m-2 p-4 border shadow">
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
              <a href={provider.url}> {provider.url}</a>
            </p>
            <p>
              <strong>Email:</strong> {provider.email}
            </p>
            <p>
              <strong>Description:</strong> {provider.description}
            </p>
          </Col>
          // </div>
        ))}
      </Row>
    </Container>
  </div>
);
export default Health;
