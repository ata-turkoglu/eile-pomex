import React from "react";
import "./refRow.scss";

function ReferenceRow({ logo, text }) {
    return (
        <div className="refRow">
            <div className="logoContainer">
                <img src={logo} />
            </div>
            <div className="textContainer">
                <span>{text}</span>
            </div>
        </div>
    );
}

export default ReferenceRow;
