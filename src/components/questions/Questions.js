import React from "react";
import { Row, Col } from "../grid";

// Generates Accordian Block for Questions.
//dataTarget example: #collaspseFive
//idName example: collaspseFive.
const Questions = ({ dataTarget, idName, children }) => (
  <Row>
    <Col addClasses="col-10 offset-1 mb-3">
      <div className="accordion" id="accordex">
        <div className="card border">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={dataTarget}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               Click here <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </button>
            </h2>
          </div>
          <div
            id={idName}
            className="collapse hide"
            aria-labelledby="headingOne"
            data-parent="#accordex"
          >
            <div className="card-body border">
            
              {children}
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

export default Questions;
