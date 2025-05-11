import React from "react";

function Formulario() {
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
            <div className="section">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScgUDWlyVejrtAiXMHT85nuScQvwm4aQPuhUWmH6OLHWwwidA/viewform?embedded=true"
                    title="Formulario de Presença"
                    width="640" height="1106" frameBorder="0" marginHeight="0" marginWidth="0">A carregar…
                </iframe>
            </div>
        </>
    );
}

export default Formulario;
