import React from "react";
import { Row, Col } from "../grid";
import "./idCard.css"

const Indentify = () => (
  <div>
    <Row addClasses="row">
      <Col addClasses="col-12">
        <h4>
          <p>Why do I need an ID?</p>
        </h4>
        <p>The following activities require and ID card:</p>
        <ol>
          <li>Applying for job or unemployment</li>
          <li>Applying for food stamps/welfare</li>
          <li>Apply for Medicaid/Social Security</li>
          <li>Renting an apartment</li>
          <li>Buying a cell phone</li>
          <li>Purchase certain cold medicines</li>
          <li>Purchasing Alcohol or Cigarettes</li>
          <li>Opening a bank account</li>
        </ol>
        <h4>
          <p>Here's the requirements for getting and ID.</p>
        </h4>

        <div className="accordion" id="accordion">
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
                  <h6>1. Proof of Identification and Proof of Residency:</h6>
                </button>
              </h2>
            </div>

            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  To receive a regular driver license in North Carolina, you
                  must be at least 18 years of age, possess acceptable forms of
                  personal identification and provide proof of residency. The
                  forms or documents provided must reflect the full name and
                  proof of the date of birth. Listed below are documents that
                  may be submitted to obtain a North Carolina driver license or
                  an identification card:
                </p>
                <ol>
                  <li>
                    A certified birth certificate may serve as proof of date of
                    birth and full name{" "}
                  </li>
                  <li>
                    Prison release photo ID or official release document may
                    serve as proof of identity.
                  </li>
                  <li>
                    Original or photo copy of the Social Security Card or W2 of
                    a work release initiative may serve as proof of SSN{" "}
                  </li>
                  <li>
                    A printout of the Department of Correction Official Release
                    Document may serve as proof of the residence address if the
                    offender has been released from prison.{" "}
                  </li>
                  <li>
                    Expired NC driver license or identification card (if
                    applicable) may serve as proof of full name, DOB and
                    residence address.
                  </li>
                </ol>
                <p>
                  Official documents such as forms of identification, Social
                  Security cards, Driver’s License, Prison I.D, Birth
                  Certificates, official release document should be included in
                  the Transition Document Envelope (TDE). The envelope (TDE) and
                  documents enclosed will be crucial in the transition and
                  reentry process.{" "}
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
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h6> 2. Proof of Liability Insurance:</h6>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  Proof of liability insurance includes providing insurance
                  documents such as:{" "}
                </p>
                <ol>
                  <li>
                    The liability insurance documents must show the driver’s
                    name, the effective date of the policy, the expiration date
                    of the policy, and the date the policy was issued.{" "}
                  </li>
                  <li>
                    Vehicle ownership is not required, however; a restriction
                    will be placed on the driver license at the time of
                    issuance. This restriction limits a driver to driving only
                    "fleet vehicles" or company vehicles
                  </li>
                  <li>
                    The liability insurance documents must show the driver’s
                    name, the effective date of the policy, the expiration date
                    of the policy, and the date the policy was issued
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>

    <Row addClasses="row mt-4">
      <Col addClasses="col-12">
        <h4>
          <p>
            <i class="fa fa-question" aria-hidden="true"></i> FAQ's
          </p>
        </h4>

        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h6>
                    <p>
                      Can an inmate obtain a NC DMV Identification Card prior to
                      the time of release?
                    </p>
                  </h6>
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
                <p>
                  {" "}
                  Yes, with a Department of Correction official or a Department
                  of Correction designee. An ID can be obtained with proper
                  identity documents as well as residence and mailing address
                  verification documents. Once obtained, the identification card
                  will be placed in the DOC Transition Document Envelop
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left m-0 "
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h6>
                    <p>
                      {" "}
                      Can a NC license or ID card be renewed from a North
                      Carolina Correction Facility by mail?
                    </p>
                  </h6>
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
                <p>
                  No, you must be present at a driver license office to submit
                  the required identity documents for an identification card.
                </p>
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
                  <h6>
                    <p>
                      Can duplicate or replacement DL/IDs be mailed to the
                      prison facility?
                    </p>{" "}
                  </h6>
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
                <p>
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
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="heading6">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  <h6>
                    <p>
                      How can an offender take care of unresolved traffic
                      tickets prior to release?{" "}
                    </p>{" "}
                  </h6>
                </button>
              </h2>
            </div>
            <div
              id="collapse6"
              className="collapse"
              aria-labelledby="heading6"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  DMV has call centers that provide clearance information to any
                  caller. The numbers are: 919.715.7000 or 919.861.3807. The
                  caller should be able to state: full name, date of birth,
                  social security number and of course the DL/ID number if
                  applicable. The caller should request “requirements for driver
                  clearance”. Inmates may also send DMV a written request to: NC
                  Division of Motor Vehicles/Problem Resolution Unit Driver
                  Assistance Branch MSC 3118, Raleigh NC 27699-3118
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="heading7">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  <h6>
                    <p>
                      Can the driver record clearance process be obtained when
                      an inmate first arrives at the prison facility?{" "}
                    </p>{" "}
                  </h6>
                </button>
              </h2>
            </div>
            <div
              id="collapse7"
              className="collapse"
              aria-labelledby="heading7"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  Yes, the “requirements for DL/ID clearance” can be obtained at
                  anytime. If a DL/ID record has outstanding citations or
                  unresolved issues, DMV may generate a screen print reflecting
                  details of each outstanding issue. Upon request from a
                  Department of Correction management, this information can be
                  faxed to the facility. The inmate may use this document as a
                  checklist to assist in clearing the DL/ID record.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="heading8">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  <h6>
                    <p>Can inmates obtain a commercial driver license? </p>{" "}
                  </h6>
                </button>
              </h2>
            </div>
            <div
              id="collapse8"
              className="collapse"
              aria-labelledby="heading8"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  Anyone that meets the requirements of a CDL may obtain a CDL.
                  There are several tests that are required: Knowledge test,
                  vision and road safety signs tests, a Pre-trip test and a
                  skills test on open highway in the class of vehicle in which
                  you desire to obtain the CDL. The applicant must have the
                  proper vehicle to complete the skills test. The cost of a CDL
                  is: $30 CDL application fee, $15 per year issuance fee and $3
                  per year for each endorsement. A commercial learner permit is
                  $15 and a replacement CDL or learner permit is $10.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="heading9">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                >
                  <h6>
                    <p>
                      How can I obtain a renewal of my current driver license if
                      the driver license has expired?{" "}
                    </p>{" "}
                  </h6>
                </button>
              </h2>
            </div>
            <div
              id="collapse9"
              className="collapse"
              aria-labelledby="heading9"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  If the driver license has notbeen expired more than one (1)
                  year, the vision test and road safety signs test are required.
                  If the license has been expired more than one (1) year, the
                  vision test, road safety signs test is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Indentify;
