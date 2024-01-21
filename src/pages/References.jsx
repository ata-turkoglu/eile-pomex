import React, { useLayoutEffect } from "react";
import "./css/referencesPage.scss";

function References() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="references">
            <h1>References Page</h1>
        </div>
    );
}

export default References;
