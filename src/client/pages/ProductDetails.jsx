import React, { useLayoutEffect, useState } from "react";
import "./css/productDetails.scss";
//import ProductData from "../../data/products.json";
import ProductList from "../../data/productList.json";
import { useParams, useNavigate } from "react-router-dom";
import img from "../../../public/assets/products/eile_genel_teneke.png";
import { Accordion } from "react-bootstrap";
import appImg from "../../../public/assets/products/grout60c_app.png";
import { ChevronLeft } from "lucide-react";
import { translateText as t } from "../../store/reducers/language";
import { useSelector } from "react-redux";

function ProductDetails() {
    const lang = useSelector((state) => state.language.lang);

    const { productKey } = useParams();
    const [product, setProduct] = useState(null);
    const [mobileView, setMobileView] = useState(false);
    const [isSafari, setIsSafari] = useState(false);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        setIsSafari(!!window.safari);
        if (window.innerWidth < 768) {
            /* document.getElementById("product-categories").style.visibility =
                "hidden"; */
            setMobileView(true);
        }
        window.scrollTo(0, 0);
    }, []);

    useLayoutEffect(() => {
        /* const list = productKey.split("-");
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
        } */
        setProduct(ProductList.find((item) => item.id == productKey));
    }, [productKey]);

    const renderInfo = (text) => {
        /* text ??=
        "Two-Component, Adherence Augmenter and Corrosion Preventing Epoxy Resin Based Mortar"; */
        if (text == "") return "";
        const list = text.split(",");
        return list.map((item, index) => (
            <span key={index} style={{ fontWeight: isSafari && "400" }}>
                {item}
            </span>
        ));
    };

    const renderAreasofUsage = (
        list = [
            /* "Woodwork lover, lamp, pipe, satellite dish mounting",
            "Water closet, bathroom armateurs",
            "Reinforcement anchorage, ironstone planting",
            "Advertising sign, road sign, doors, guardrails, hand rails, tent mounting", */
        ]
    ) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item}</li>);
    };

    const renderFeatures = (
        list = [
            /* "It is rapid curing",
            "It can be used with standard guns",
            "It can be used at low temperatures",
            "Its load carrying capacity is high and consumption is low", */
        ]
    ) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item.trim()}</li>);
    };

    const renderConsumption = (list = []) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item.trim()}</li>);
    };

    const renderDocuments = (docs) => {
        const keys = Object.keys(docs);
        if (keys.length > 0) {
            let list = [];
            keys.forEach((key, index) => {
                list.push(
                    <a
                        key={index}
                        href={docs[key]}
                        target="_blank"
                        style={{
                            marginRight: "20px",
                            textTransform: "uppercase",
                            color: "black",
                        }}
                    >
                        {key}
                    </a>
                );
            });

            return list;
        } else {
            return null;
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            {product && (
                <div className="productDetails">
                    <div className="headerContainer">
                        {mobileView && (
                            <div className="filter-icon">
                                <ChevronLeft
                                    strokeWidth={3}
                                    onClick={handleBack}
                                />
                            </div>
                        )}
                        <h1>{product.name}</h1>
                        {mobileView && <div className="filter-icon"></div>}
                    </div>
                    <div className="firstPart">
                        <div className="leftPart">
                            <div className="imgContainer">
                                <img src={product.img || img} />
                            </div>
                            <div className="tags">
                                {renderInfo(product.info[lang])}
                            </div>
                        </div>
                        <div className="informationPart">
                            <div className="centerPart">
                                <div className="description">
                                    {product.description[lang]}
                                </div>
                                <div className="areasOfUsage">
                                    <h4>{t("areasOfUsage")}</h4>
                                    {renderAreasofUsage(
                                        product.areasOfUsage[lang]
                                    )}
                                </div>
                                <div className="featuresOfProduct">
                                    <h4>{t("featuresOfProduct")}</h4>
                                    {renderFeatures(
                                        product.featuresOfProduct[lang]
                                    )}
                                </div>
                                <div className="imgContainer">
                                    <img src={product.appImage || appImg} />
                                </div>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <h5>{t("surfacePreparation")}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                {
                                                    product.beforeApplication[
                                                        lang
                                                    ]
                                                }
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {product.mixing[lang] != "" && (
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h5>{t("mixing")}</h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>{product.mixing[lang]}</p>
                                                <p>
                                                    <strong>
                                                        Karışım Oranı:
                                                    </strong>
                                                    {product.mixture[lang]}
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )}
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <h5>{t("application")}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>{product.application[lang]}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <h5>
                                                {t(
                                                    "pointsToTakeIntoConsideration"
                                                )}
                                            </h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                {renderConsumption(
                                                    product
                                                        .pointsToTakeIntoConsideration[
                                                        lang
                                                    ]
                                                )}
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <h5>{t("package")}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>{product.package[lang]}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            <h5>{t("storage")}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>{product.storage[lang]}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {product.docs && (
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <h5>{t("documents")}</h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    {renderDocuments(
                                                        product.docs
                                                    )}
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetails;
