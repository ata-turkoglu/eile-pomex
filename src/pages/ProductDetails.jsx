import React, { useLayoutEffect, useState } from "react";
import "./css/productDetails.scss";
import ProductData from "../data/products.json";
import { useParams } from "react-router-dom";
import img from "../../public/assets/products/eile_genel_teneke.png";

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

    const renderInfo = (text) => {
        text ??=
            "Two-Component, Adherence Augmenter and Corrosion Preventing Epoxy Resin Based Mortar";
        const list = text.split(",");
        return list.map((item, index) => <span key={index}>{item}</span>);
    };

    const renderAreasofUsage = (
        list = [
            "Woodwork lover, lamp, pipe, satellite dish mounting",
            "Water closet, bathroom armateurs",
            "Reinforcement anchorage, ironstone planting",
            "Advertising sign, road sign, doors, guardrails, hand rails, tent mounting",
        ]
    ) => {
        return list.map((item, index) => <li key={index}>{item}</li>);
    };

    const renderFeatures = (
        list = [
            "It is rapid curing",
            "It can be used with standard guns",
            "It can be used at low temperatures",
            "Its load carrying capacity is high and consumption is low",
        ]
    ) => {
        return list.map((item, index) => <li key={index}>{item}</li>);
    };

    return (
        <>
            {product && (
                <div className="productDetails">
                    <h1>{product.name}</h1>
                    <div className="firstPart">
                        <div className="leftPart">
                            <div className="imgContainer">
                                <img src={product.img || img} />
                            </div>
                            <div className="tags">
                                {renderInfo(product.info)}
                            </div>
                        </div>
                        <div className="informationPart">
                            <div className="centerPart">
                                <div className="info">
                                    <div className="description">
                                        {product.description ||
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                                    </div>
                                    <div className="areasOfUsage">
                                        <h4>Area of Usage</h4>
                                        {renderAreasofUsage(
                                            product.areasOfUsage
                                        )}
                                    </div>
                                    <div className="featuresOfProduct">
                                        <h4>Features of Product</h4>
                                        {renderFeatures(
                                            product.featuresOfProduct
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="rightPart">
                                <div className="beforeApplication">
                                    <h4>
                                        Application Procedure Surface
                                        Preparation
                                    </h4>
                                    <p>
                                        {product.beforeApplication ||
                                            "The application surface should have sufficient resistance. The concrete should have 25N/mm2 pressure resistence minimum and 1.5-2 N/mm2 tensile strength. The surface should be smooth, clean, dry and moisture raet should not exceed 5%. It should avoid aaplying in very humid ambient and under 10C temperatures. Anchor holes should be clean."}
                                    </p>
                                </div>
                                <div className="beforeApplication">
                                    <h4>Application</h4>
                                    <p>
                                        {product.beforeApplication ||
                                            "The application surface should have sufficient resistance. The concrete should have 25N/mm2 pressure resistence minimum and 1.5-2 N/mm2 tensile strength. The surface should be smooth, clean, dry and moisture raet should not exceed 5%. It should avoid aaplying in very humid ambient and under 10C temperatures. Anchor holes should be clean."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetails;
