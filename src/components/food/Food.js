import React from "react";
import {Col, Row } from "../grid";
import "./food.css"

const Food = props => (
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
                <strong>Description:</strong> {props.description}
              </p>
              {/* Removes info if x is clicked */}
              <span onClick={() => props.removeFood(props.id)} className="remove">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </span>
            </Col>
        </Row>
    </div>
  );
  export default Food;
  