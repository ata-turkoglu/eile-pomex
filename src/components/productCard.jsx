import React from "react";
import "./productCard.scss";

function ProductCard({ image, text, onClick, rowList }) {
    return (
        <div
            className={rowList ? "productRowCard" : "productCard"}
            onClick={onClick}
        >
            <div
                className={
                    rowList
                        ? "productRowCard-imgContainer"
                        : "productCard-imgContainer"
                }
            >
                <img src={image} />
            </div>
            <div
                className={
                    rowList
                        ? "productRowCard-textContainer"
                        : "productCard-textContainer"
                }
            >
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProductCard;
