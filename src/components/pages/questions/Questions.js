import React from "react";
import { Row, Col } from "../../grid";

// Generates Accordian Block for Questions.
const Questions = ({ dataTarget, idName, children }) => (
  <Row>
    <Col addClasses="col-11 offset-1 mb-3">
      <div className="accordion" id="accordionExample">
        <div className="card">
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
                Collapsible Group Item
              </button>
            </h2>
          </div>
          <div
            id={idName}
            className="collapse hide"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
            
              {children}
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
);

export default Questions;
