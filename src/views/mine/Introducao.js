import React from "react";

// reactstrap components
import {Container} from "reactstrap";

function Introducao() {

    return (
        <>
            <div className="section">
                <Container className="text-center">
                    <h1 className="h1-mine-introducao">A vida é uma coleção de momentos</h1>
                    <h3 className="h3-mine">E nós queremos que estejam presentes neste.</h3>
                </Container>
                <Container className="text-center infos-mine">
                    <h1>16 de Agosto de 2025</h1>
                    <h2>Quinta Dona Maria</h2>
                </Container>
            </div>

        </>
    );
}

export default Introducao;
