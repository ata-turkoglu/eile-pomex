import React, { useEffect, useLayoutEffect, useState } from "react";
import "./css/productsPage.scss";
import productData from "../data/products.json";
import ProductCard from "../components/productCard";
import pImg from "../assets/products/grout50c.png";
import { ChevronDown, ChevronRight } from "lucide-react";

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);

    const handleGroupClick = (key) => {
        let list = JSON.parse(JSON.stringify(selectedGroups));
        const index = list.indexOf(key);
        if (index < 0) {
            list.push(key);
            document.getElementById(`sb-${key}`).style.display = "block";
        } else {
            list.splice(index, 1);
            setTimeout(() => {
                document.getElementById(`sb-${key}`).style.display = "none";
            }, 200);
        }
        setSelectedGroups(list);
    };
    useEffect(() => {
        let res = (
            <ul className="group">
                {productData.map((group) => {
                    return (
                        <li key={group.key}>
                            <span onClick={() => handleGroupClick(group.key)}>
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
                                    {group.subGroups.map((sub) => {
                                        return (
                                            <li key={sub.key}>{sub.name}</li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
        setProducts(res);
    }, [selectedGroups]);

    return (
        <div className="products">
            <div className="categories">{products}</div>
            <div className="productList">
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
            </div>
        </div>
    );
}

export default Products;
