import React from "react";
import { Container, Col, Row } from "../../grid";
import employment from "../../data/employment.json";
// import jsonata from 'jsonata';

const Employ= props => (
  <div>
    <Container>
      <Row addClasses="row dflex justify-content-center mt-3">
        <Col addClasses="col-12 text-center">
          <p>
            <h3>Agencies That Can Help You in Your Job Search</h3>{" "}
          </p>
        </Col>
      </Row>

      <Row addClasses="row dflex justify-content-center">
        
      { employment.map(provider =>  (provider.email !== "" ?  (
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
        ):"" ) )}
      </Row>
    </Container>
  </div>
);
export default Employ;
