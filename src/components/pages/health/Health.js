import React from "react";
import { Container, Col, Row } from "../../grid";
import health from "../../data/health.json";
// Displays health provider JSON
//
const Health = props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center mt-3">
        <Col addClasses="col-12 text-center">
          <p>
            <h3>Agencies That Can Help You  Mental Health & Medical</h3>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        {health.map(provider => (
          // <div>
          <Col addClasses="col-12 m-1 p-3 border shadow-sm">
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
              <a href={provider.url}> {provider.url}</a>
            </p>
            <p className="m-0">
              <strong>Email:</strong> {provider.email}
            </p>
            <p className="m-0">
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
