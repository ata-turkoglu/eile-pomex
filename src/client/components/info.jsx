import React from "react";
import "./info.scss";
import { useNavigate } from "react-router-dom";

function Info({ image, header, text, to }) {
    const navigate = useNavigate();
    return (
        <div className="infoContainer">
            <h2>{header}</h2>
            <div className="content">
                <div className="imgContainer">
                    <img src={image} onClick={() => navigate(to)} />
                </div>
                <div className="textContainer">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
