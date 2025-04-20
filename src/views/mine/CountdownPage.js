import React from "react";

// reactstrap components
import {Container, Row} from "reactstrap";
import Countdown from "./CountDown";

function CountdownPage(props) {
    return (
        <>
            <div className="section">
                <Container className="text-center">
                    <Row className="justify-content-md-center">
                            <div>
                                <section className="container2">
                                    <h2 className="title-mine">Até ao nosso dia</h2>
                                    <Countdown targetDated/>
                                </section>
                            </div>
                    </Row>
                </Container>
            </div>
        </>
);
}

export default CountdownPage;