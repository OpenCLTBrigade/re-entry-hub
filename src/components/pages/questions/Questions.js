import React from "react";
import { Row, Container, Col } from "../../grid";

const Questions = () =>(
    <Row>
    <Col addClasses="col-10 offset-1 shadow-sm">
        <h5>Test question.</h5>
        1.	Do they have their Prison ID?<br/>
        2.	Do you have any of the following?<br/>
                a.	Birth Certificate<br/>
                b.	SSN<br/>
                c.	Valid Passport<br/>
                d.	Motor Vehicle Record<br/>
                e.	Diploma or GED from NC school, college, university<br/>
                f.	Official divorce decree<br/>
                g.	Court order for change of name or gender<br/>
                h.	Adoption Papers<br/>
                i.	Certified court order for child support<br/>
        3.	Do you have a permanent address to use?<br/>
        4.  Do you have a SSN or Birth Certificate?

    </Col>

    </Row>
);

export default Questions;