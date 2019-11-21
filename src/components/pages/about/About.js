import React from "react";
import NavTabs from "../../nav/NavTabs";
import { Row, Container, Col, Jumbotron } from "../../grid";
import "./about.css"


const About = () => (
  
  <div>
   <NavTabs />
   <Container addClasses ="container p-3">
     <Row addClasses="row">

      <Col addClasses="col-10 offset-1 mt-4 p-3">
      <p id="homeDescription">
        Returning to your community after a period of incarceration can be difficult.
        Fortunately there are programs that can help. 
        This site is intended to help you locate resources and assistance in North Carolina.
        </p>
      </Col>
      <Col addClasses="col-12  mt-1 p-3 d-flex justify-content-center"><Jumbotron addClasses="jumbotron homePicture shadow" id="homePicture"></Jumbotron>
</Col>
</Row>
</Container>

  </div>
);

export default About;
