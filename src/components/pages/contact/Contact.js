import React from "react";
import NavTabs from "../../nav/NavTabs";
import { Row, Container, Col } from "../../grid";

const Contact = props => (
  <div>
    <NavTabs />
    <Container addClasses="container mt-3">
      <h3 className="text-center">Contact us</h3>
      <br />
      <Row addClasses="row">
        <Col addClasses="col-md-8">
          <div>
            <form action="/post" method="post">
              <input className="form-control" name="name" placeholder="Name" />
              <br />
              <input
                className="form-control"
                name="phone"
                placeholder="Phone"
              />
              <br />
              <input
                className="form-control"
                name="email"
                placeholder="E-mail"
              />
              <br />
              <textarea
                className="form-control"
                name="text"
                placeholder="How can we help you?"
                style={{ height: "150px" }}
              ></textarea>
              <br />
              <input className="btn btn-primary" type="submit" value="Send" />
              <br />
              <br />
            </form>
          </div>
        </Col>
        <Col addClasses="col-md-4">
          <b>Address:</b>
          <br />
         
         222 Main St 
          <br />
        Anytown NA 55001
          <br />
          Phone: +1 (101) 555-1012
          <br />
          <a href="mailto:me@mysite.com">me@mysite.com</a>
          <br />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
