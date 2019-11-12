import React from "react";
import { Row, Col } from "../grid";

const Indentify = () => (
  <div>
<Row addClasses="row">
<Col addClasses="col-12">
    <h4><p>Here's the requirements for getting and ID.</p></h4>

    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
                <h5>1.  Proof of Identification and Proof of Residency:</h5>
           
            </button>
          </h2>
        </div>

        <div
          id="collapse1"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <p>
              To receive a regular driver license in North Carolina, you must be
              at least 18 years of age, possess acceptable forms of personal
              identification and provide proof of residency. The forms or
              documents provided must reflect the full name and proof of the
              date of birth. Listed below are documents that may be submitted to
              obtain a North Carolina driver license or an identification card:
            </p>
            <ol>
              <li>
                A certified birth certificate may serve as proof of date of
                birth and full name{" "}
              </li>
              <li>
                Prison release photo ID or official release document may serve
                as proof of identity.
              </li>
              <li>
                Original or photo copy of the Social Security Card or W2 of a
                work release initiative may serve as proof of SSN{" "}
              </li>
              <li>
                A printout of the Department of Correction Official Release
                Document may serve as proof of the residence address if the
                offender has been released from prison.{" "}
              </li>
              <li>
                Expired NC driver license or identification card (if applicable)
                may serve as proof of full name, DOB and residence address.
              </li>
            </ol>
            <p>
              Official documents such as forms of identification, Social
              Security cards, Driver’s License, Prison I.D, Birth Certificates,
              official release document should be included in the Transition
              Document Envelope (TDE). The envelope (TDE) and documents enclosed
              will be crucial in the transition and reentry process.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
                <h5> 2. Proof of Liability Insurance:</h5>
              
            </button>
          </h2>
        </div>
        <div
          id="collapse2"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <p>
              Proof of liability insurance includes providing insurance
              documents such as:{" "}
            </p>
            <ol>
              <li>
                The liability insurance documents must show the driver’s name,
                the effective date of the policy, the expiration date of the
                policy, and the date the policy was issued.{" "}
              </li>
              <li>
                Vehicle ownership is not required, however; a restriction will
                be placed on the driver license at the time of issuance. This
                restriction limits a driver to driving only "fleet vehicles" or
                company vehicles
              </li>
              <li>
                The liability insurance documents must show the driver’s name,
                the effective date of the policy, the expiration date of the
                policy, and the date the policy was issued
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-left" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapseThree"
            ><h5><p>Can an inmate obtain a NC DMV Identification Card prior to the
            time of release?</p></h5>
            </button>
          </h2>
        </div>
        <div
          id="collapse3"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              {" "}
              Yes, with a Department of Correction official or a Department of
              Correction designee. An ID can be obtained with proper identity
              documents as well as residence and mailing address verification
              documents. Once obtained, the identification card will be placed
              in the DOC Transition Document Envelop
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
                <h5><p>Can a NC driver license or ID card be renewed from a North
              Carolina Correction Facility via mail</p>?</h5>
              
            </button>
          </h2>
        </div>
        <div
          id="collapse4"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              <ol>
                {" "}
                No, you must be present at a driver license office to submit the
                required identity documents for an identification car
              </ol>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <h5><p>Can duplicate or replacement DL/IDs be mailed to the prison
              facility?</p> </h5>
            </button>
          </h2>
        </div>
        <div
          id="collapse5"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul>
              <ol>
                Yes, the duplicate or replacement DL/ID can be mailed to the
                facility. Upon receipt the DL/ID will be placed in the
                Transition Document Envelope. An inmate can not be in the
                possession of either the DL or ID card during incarceration.
                During the office visit, the customer gives the examiner the
                mailing address of the facility. The customer’s residence
                address will appear on the face of the DL/ID card and the
                address of the facility will appear in the mailing address
                field. The facility’s address will only appear on the envelope
                as the mailing address.
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Col>
    </Row>
  </div>
);

export default Indentify;
