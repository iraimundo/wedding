import React from "react";

// reactstrap components
import { Container, Row} from "reactstrap";
// core components

function Local() {

    return (
        <>
            <div className="section">
                <Container className="text-center">
                    <Row className="justify-content-md-center">
                        <div>
                            <section className="container2">
                                <h2 className="title-mine">Localização</h2>
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.9976719263686!2d-8.610389252232217!3d40.07733051597887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd225b84642e9287%3A0x698d2b435f081a7!2sQuinta%20Dona%20Maria%20Eventos!5e0!3m2!1spt-PT!2sie!4v1727706454617!5m2!1spt-PT!2sie"
                                        title="Localização Quinta D.Maria"
                                        width="100%" height="550" style={{border: 0, display: 'block'}}
                                        allowFullScreen loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </section>
                        </div>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Local;
