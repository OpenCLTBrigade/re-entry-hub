import React from "react";
import { Container, Col, Row } from "../grid";
import "./Footer.css";

const Footer = () => (
   <div className =" footr">
    <Container  addClasses= "container">
  <Row addClasses ="row">
    <Col  addClasses="col-12 pb-2">
      <div>
        <p className="mb-0 pt-1 text-center">© 2019 All Rights Reserved.</p>
        <p className="mb-0">
         <b> Legal Disclaimer:</b> The site DOES NOT provide any legal advice, only
          information. Users of this web site should consult with their own
          lawyer for legal advice.
        </p>
        <p className="mb-0">
          Content provided by this web site and any linked sites is not
          necessarily an endorsement and the administrators of this site do not
          assume any responsibility for the interpretation or application of any
          information originating from such sites.
        </p>
      </div>
    </Col>
  </Row>

    </Container>

   </div>

);

export default Footer;
