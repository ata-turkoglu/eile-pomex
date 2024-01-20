import React, { useEffect, useState } from "react";
import "./css/productsPage.scss";
import productData from "../data/products.json";
import ProductCard from "../components/productCard";
import pImg from "../assets/products/grout50c.png";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";

function Products() {
    const [productCategories, setProductCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedSubGroup, setSelectedSubGroup] = useState(null);
    const [header, setHeader] = useState(null);

    let { productKey } = useParams();

    useEffect(() => {
        console.log("productKey", productKey);
        handleCategoryItemClick(productKey);
    }, [productKey]);

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

    const handleCategoryItemClick = (key) => {
        console.log("handleCategoryItemClick");
        const keyList = key.split("-");
        const len = keyList.length;
        if (len == 1) {
            if (keyList[0] == 0) {
                setHeader("Products");
                setProducts(productData);
            } else {
                const group = productData.find((group) => group.key == key);
                if (group.subGroups) {
                    /* const items = group.subGroups.reduce((acc, curr) => {
                        acc.push(...curr.items);
                        return acc;
                    }, []);
                    setHeader(group.name);
                    setProducts(items); */
                    handleGroupClick(key);
                } else {
                    setHeader(group.name);
                    setProducts(group.items);
                }
            }
        } else if (len == 2) {
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
            } else {
                const subGroup = group.subGroups.find((sub) => sub.key == key);
                console.log("---", key, subGroup);
                setHeader(subGroup.name);
                setProducts(subGroup.items);
            }
        }
    };

    //setCategoryList(leftSideBar)
    useEffect(() => {
        let categoryList = (
            <ul className="group">
                {productData.map((group) => {
                    return (
                        <li
                            key={group.key}
                            onClick={() => setSelectedGroup(group.key)}
                        >
                            <span
                                /* onClick={() => handleGroupClick(group.key)} */
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
                                            setSelectedSubGroup(
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
                                                    /* setSelectedSubGroup(sub.key) */
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

    /* useEffect(() => {
        console.log("selectedSubGroup", selectedSubGroup);
        if (!selectedSubGroup) {
            setHeader("Products");
            setProducts(productData);
            return;
        }
        if (!selectedSubGroup.includes("-")) {
            const group = productData.find(
                (group) => group.key == selectedSubGroup
            );
            setHeader(group.name);
            setProducts(group.items);
        } else {
            let IDs = selectedSubGroup.split("-");

            const groupID = IDs[0];
            const subGroupID = IDs[1];

            const group = productData.find((group) => group.key == groupID);

            if (subGroupID == 0) {
                const items = group.subGroups.reduce((acc, curr) => {
                    acc.push(...curr.items);
                    return acc;
                }, []);
                setHeader(group.name);
                setProducts(items);
            } else {
                const subGroup = group.subGroups.find(
                    (sub) => sub.key == selectedSubGroup
                );
                setHeader(subGroup.name);
                setProducts(subGroup.items);
            }
        }
    }, [selectedSubGroup]); */

    return (
        <div className="products">
            <div className="categories">{productCategories}</div>
            <div className="listContainer">
                <h3>{header}</h3>
                <div className="productList">
                    {products.map((item) => {
                        return (
                            <ProductCard
                                key={item.key}
                                image={pImg}
                                text={item.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
