/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function IndexHeader() {

  return (
    <>
    <div className="header-mine">
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo-mine"
              src={require("assets/img/logo/LogoBeje.png")}
            ></img>
            <h1 className="h1-mine">Inês e Gabriel</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
