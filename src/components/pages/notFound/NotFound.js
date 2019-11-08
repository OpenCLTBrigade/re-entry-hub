import React from "react";
import NavTabs from "../../nav/NavTabs";
import { Col, Row, Container, Jumbotron } from "../../grid";


const NotFound = () => (
 
 <div>
  <NavTabs />

  <Container fluid>
    <Row>
      <Col addClasses="md-12">
    <Jumbotron addClasses="jumbotron mt-4 shadow">      {/*size is used to add bootstrap classes */}
          <h1 className="display-3 text-center"><b>404 Page Not Found</b></h1>
          <h1>
            <span  className="d-flex justify-content-center " role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
  </div>
);

export default NotFound;
