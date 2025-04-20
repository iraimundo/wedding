import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    CardTitle,
    Container,
    Form,
    Row
} from "reactstrap";

function Presenca() {

    return (
        <>
            <div className="section">
                <Container>
                    <Row>
                        <Card className="card-signup" data-background-color="blue">
                            <Form action="" className="form" method="">
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Confirma a tua presença
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Button
                                        className="btn-neutral btn-round"
                                        color="info"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScgUDWlyVejrtAiXMHT85nuScQvwm4aQPuhUWmH6OLHWwwidA/viewform?usp=sf_link"
                                        size="lg"
                                    >
                                        Responde aqui
                                    </Button>
                                </CardBody>
                                <CardFooter className="text-center">
                                </CardFooter>
                            </Form>
                        </Card>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Presenca;
