import React, { useLayoutEffect, useState } from "react";
import "./css/productDetails.scss";
import ProductData from "../data/products.json";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { productKey } = useParams();
    const [product, setProduct] = useState(null);

    useLayoutEffect(() => {
        const list = productKey.split("-");
        const group = ProductData.find((group) => group.key == list[0]);
        if (list[1] == "0") {
            const item = group.items.find((item) => item.key == productKey);
            setProduct(item);
        } else {
            const subGroup = group.subGroups.find(
                (sub) => sub.key == list[0] + "-" + list[1]
            );
            const item = subGroup.items.find((item) => item.key == productKey);
            setProduct(item);
        }
    }, [productKey]);

    return (
        <div className="productDetails">
            <h1>ProductDetails</h1>
            <span>{JSON.stringify(product)}</span>
        </div>
    );
}

export default ProductDetails;
