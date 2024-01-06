import React from "react";
import "./productGroupSection.scss";

function ProductGroupCard({ image, text, icon }) {
    return (
        <div className="groupCard">
            <div className="groupIcon">
                <img src={icon} />
            </div>
            <div className="imgContainer">
                <img src={image} />
            </div>
            <div className="textContainer">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProductGroupCard;
