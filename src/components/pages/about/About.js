import React from "react";
import NavTabs from "../../nav/NavTabs";
import { Row, Container, Col } from "../../grid";
import "./about.css"


const About = () => (
  
  <div>
   <NavTabs />
   <Container addClasses ="container mt-4 p-3">
     <Row addClasses="row">
       <Col addClasses="col-12 mt-4 p-3">
      <h1>Home</h1>
     
      </Col>

      <Col addClasses="col-12 mt-4 p-3">
      <p id="homeDescription">
        Returning to your community after a period of incarceration can be difficult.
        Fortunately there are programs that can help. 
        This site is intended to help you locate resources and assistance in North Carolina.
        </p>
      </Col>
</Row>
</Container>

  </div>
);

export default About;
