import React from "react";
import "./productCard.scss";

function ProductCard({ image, text, onClick }) {
    return (
        <div className="productCard" onClick={onClick}>
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
