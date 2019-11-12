import React from "react";
import { Col, Row } from "../grid";
// import housing from "../data/housing.json";
import "./housing.css";

// Displays housing JSON
const Housing = props => (
  <div>
      <Row addClasses="row dflex justify-content-center">
        <Col addClasses="col-12 m-1 p-3 border shadow-sm text-justify">
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
            <a className="oflow" href={props.url}>
              {" "}
              {props.url}
            </a>
          </p>
          <p className="m-0">
            <strong>Email:</strong> {props.email}
          </p>
          <p className="m-0">
            <strong>Description:</strong> {props.description}
          </p>
          <span>
            <strong>Registry:</strong> {props.registry}{" "}
          </span>
          <span>
            <strong>Felonies:</strong> {props.felony}{" "}
          </span>
          <span>
            <strong>Fees:</strong> {props.fees}{" "}
          </span>
          <span>
            <strong>Rent:</strong> {props.rent}{" "}
          </span>
          <span>
            <strong>Men Only:</strong> {props.menOnly}
          </span>
             {/* Removes info if x is clicked */}
          <span onClick={() => props.removeHousing(props.id)} className="remove">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </span>

        </Col>
      </Row>
  </div>
);
export default Housing;
