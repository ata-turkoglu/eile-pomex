import React from "react";
import "./productCard.scss";

function ProductCard({ image, text }) {
    return (
        <div className="productCard">
            <div className="productCard-imgContainer">
                <img src={image} />
            </div>
            <div className="productCard-textContainer">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProductCard;
