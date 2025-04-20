import React from "react";

// reactstrap components
import {Col, Container, Row} from "reactstrap";
import Countdown from "./CountDown";
// core components

function Local() {

    return (
        <>
            <div className="section">
                <Container className="text-center">
                    <Row className="justify-content-md-center">
                        <Col>
                            <div>
                                <section className="container2">
                                    <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.9976719263686!2d-8.610389252232217!3d40.07733051597887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd225b84642e9287%3A0x698d2b435f081a7!2sQuinta%20Dona%20Maria%20Eventos!5e0!3m2!1spt-PT!2sie!4v1727706454617!5m2!1spt-PT!2sie"
                                        width="600" height="450" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </section>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <section>
                                    <h2 className="h3-mine texto-localizacao">Para os mais perdidos</h2>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Local;
