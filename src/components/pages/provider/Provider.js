import React from "react";
import { Container, Col, Row } from "../../grid";
import employment from "../../data/employment.json";
import jsonata from 'jsonata';

const Provider = props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center m-5">
        <Col addClasses="col-8 text-center">
          <p>
            <h3>Agencies That Can Help You in Your Job Search</h3>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        {employment.map(provider => (
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
export default Provider;
