import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";

import CountdownPage from "./mine/CountdownPage";
import Introducao from "./mine/Introducao";
import Presenca from "./mine/Presenca";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <div className="wrapper background">
         <IndexHeader />
        <div>
          <Introducao/>
          <Presenca/>
          <CountdownPage/>
        </div>
      </div>
    </>
      );
      }

      export default Index;
