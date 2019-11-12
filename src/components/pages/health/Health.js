import React from "react";
import {Col, Row } from "../../grid";
import "./health.css"
// import health from "../../data/health.json";
// Displays health provider JSON
//
const Health = props => (
  <div>
      <Row addClasses="row dflex justify-content-center">
          <Col addClasses="col-12 m-1 p-3 border shadow-sm">
            <p className="m-0">
              <strong>Name:</strong> {props.name}
            </p>
            <p className="m-0">
              <strong>Address:</strong> {props.address}
            </p>
            <p className="m-0">
              <strong>Ph:</strong> {props.ph}{" "}
            </p>
            <p className="m-0">
              <strong>URL:</strong>
              <a href={props.url}> {props.url}</a>
            </p>
            <p className="m-0">
              <strong>Email:</strong> {props.email}
            </p>
            <p className="m-0">
              <strong>Description:</strong> {props.description}
            </p>
            {/* Removes info if x is clicked */}
            <span onClick={() => props.removeMed(props.id)} className="remove">
              𝘅
            </span>
          </Col>
      </Row>
  </div>
);
export default Health;
