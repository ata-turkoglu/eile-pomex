import React from "react";
import "./info.scss";

function Info({ image, header, text, to }) {
    return (
        <div className="infoContainer">
            <h2>{header}</h2>
            <div className="content">
                <div className="imgContainer">
                    <img src={image} />
                </div>
                <div className="textContainer">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
