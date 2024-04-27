import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./css/productsPage.scss";
import productData from "../../data/products.json";
import ProductCard from "../components/productCard";
import pImg from "/assets/products/grout50c.png";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { ListFilter } from "lucide-react";

function Products() {
    const [productCategories, setProductCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedSubGroup, setSelectedSubGroup] = useState(null);
    const [header, setHeader] = useState(null);
    const [mobileView, setMobileView] = useState(false);

    const navigate = useNavigate();
    let { productKey } = useParams();
    const initiated = useRef(false);

    useLayoutEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
            document.getElementById("product-categories").style.visibility =
                "hidden";
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        handleCategoryItemClick(productKey);
        initiated.current = true;
    }, [productKey]);

    // Category List Collapsing
    const handleGroupClick = (key) => {
        let list = JSON.parse(JSON.stringify(selectedGroups));
        const index = list.indexOf(key);
        if (index < 0) {
            list.push(key);
            if (document.getElementById(`sb-${key}`)) {
                document.getElementById(`sb-${key}`).style.display = "block";
            } else {
                setSelectedSubGroup(key);
            }
        } else {
            list.splice(index, 1);
            setTimeout(() => {
                if (document.getElementById(`sb-${key}`)) {
                    document.getElementById(`sb-${key}`).style.display = "none";
                } else {
                    setSelectedSubGroup(key);
                }
            }, 200);
        }
        setSelectedGroups(list);
    };

    // Category List Clicking
    const handleCategoryItemClick = (key, fromCategory = true) => {
        const keyList = key.split("-");
        const len = keyList.length;
        if (len == 1) {
            // Ana Gruplar
            if (keyList[0] == 0) {
                if (mobileView) {
                    handleShowCategory();
                }
                setHeader("Products");
                setProducts(productData);
                navigate("/products/" + key);
            } else {
                const group = productData.find((group) => group.key == key);
                if (group.subGroups) {
                    if (initiated.current && fromCategory) {
                        handleGroupClick(key);
                    } else {
                        const items = group.subGroups.reduce((acc, curr) => {
                            acc.push(...curr.items);
                            return acc;
                        }, []);
                        setHeader(group.name);
                        setProducts(items);
                        navigate("/products/" + key);
                    }
                } else {
                    if (mobileView) {
                        handleShowCategory();
                    }
                    setHeader(group.name);
                    setProducts(group.items);
                    navigate("/products/" + key);
                }
            }
        } else if (len == 2) {
            if (mobileView) {
                handleShowCategory();
            }
            const groupKey = keyList[0];
            const subGroupKey = keyList[1];

            const group = productData.find((group) => group.key == groupKey);

            if (subGroupKey == 0) {
                const items = group.subGroups.reduce((acc, curr) => {
                    acc.push(...curr.items);
                    return acc;
                }, []);
                setHeader(group.name);
                setProducts(items);
                navigate("/products/" + key);
            } else {
                const subGroup = group.subGroups.find((sub) => sub.key == key);
                setHeader(subGroup.name);
                setProducts(subGroup.items);
                navigate("/products/" + key);
            }
        }
    };

    const handleProductClick = (key) => {
        if (key.includes("-")) {
            navigate("/product-details/" + key);
        } else {
            handleCategoryItemClick(key, false);
            navigate("/products/" + key);
        }
    };

    // setCategoryList(leftSideBar)
    useEffect(() => {
        let categoryList = (
            <ul className="group">
                <li key={"0"}>
                    <span onClick={() => handleCategoryItemClick("0")}>
                        Ana Gruplar
                    </span>
                </li>
                {productData.map((group) => {
                    return (
                        <li key={group.key}>
                            <span
                                onClick={() =>
                                    handleCategoryItemClick(group.key)
                                }
                                /* className={
                                    selectedGroup == group.key && "bg-slide"
                                } */
                            >
                                {group.name}{" "}
                                {group.subGroups &&
                                    (selectedGroups.includes(group.key) ? (
                                        <ChevronDown size={14} />
                                    ) : (
                                        <ChevronRight size={14} />
                                    ))}
                            </span>
                            {group.subGroups && (
                                <ul
                                    id={`sb-${group.key}`}
                                    className={
                                        "subGroup " +
                                        (selectedGroups.includes(group.key)
                                            ? "open"
                                            : "close")
                                    }
                                >
                                    <li
                                        onClick={() =>
                                            handleCategoryItemClick(
                                                group.key + "-0"
                                            )
                                        }
                                    >
                                        Tümü
                                    </li>
                                    {group.subGroups.map((sub) => {
                                        return (
                                            <li
                                                key={sub.key}
                                                onClick={() =>
                                                    handleCategoryItemClick(
                                                        sub.key
                                                    )
                                                }
                                            >
                                                {sub.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
        setProductCategories(categoryList);
    }, [selectedGroups]);

    // Mobile View
    const handleShowCategory = () => {
        const el = document.getElementById("product-categories");
        if (
            !el.classList.contains("close-categories") &&
            !el.classList.contains("open-categories")
        ) {
            el.classList.add("open-categories");
            el.style.visibility = "visible";
        } else if (el.classList.contains("open-categories")) {
            el.classList.remove("open-categories");
            el.classList.add("close-categories");
            setTimeout(() => {
                el.style.visibility = "hidden";
            }, 400);
        } else if (el.classList.contains("close-categories")) {
            el.classList.remove("close-categories");
            el.classList.add("open-categories");
            el.style.visibility = "visible";
        }
    };

    return (
        <div className="products">
            <div id="product-categories" className="categories">
                {productCategories}
            </div>
            <div className="listContainer">
                <div className="headerContainer">
                    {mobileView && (
                        <div className="filter-icon">
                            <ListFilter onClick={handleShowCategory} />
                        </div>
                    )}
                    <h3>{header}</h3>
                    {mobileView && <div className="filter-icon"></div>}
                </div>
                <div
                    className={
                        mobileView && header == "Products"
                            ? "productRowList"
                            : "productList"
                    }
                >
                    {products.map((item) => {
                        return (
                            <ProductCard
                                key={item.key}
                                image={item.img || pImg}
                                text={item.name}
                                rowList={mobileView && header == "Products"}
                                onClick={() => handleProductClick(item.key)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
