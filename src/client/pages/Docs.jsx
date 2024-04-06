import React, { useLayoutEffect } from "react";
import "./css/docsPage.scss";

function Docs() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="docs">
            <h1>Belgelerimiz</h1>
        </div>
    );
}

export default Docs;
