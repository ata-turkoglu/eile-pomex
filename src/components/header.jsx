import React from "react";
import { useEffect, useState } from "react";
import "./header.scss";
import logo from "../assets/eile-logo.png";
import roundLogo from "../assets/eile-round.png";
import { Link } from "react-router-dom";
import productsJSON from "../data/products.json";

function Header() {
    const [narrowHeader, setNarrowHeader] = useState(false);
    const [products, setProducts] = useState([]);
    const [hoverProducts, setHoverProducts] = useState(false);

    useEffect(() => {
        function setHeaderHeight() {
            if (window.scrollY > 200) {
                setNarrowHeader(true);
            } else {
                setNarrowHeader(false);
            }
        }
        window.addEventListener("scroll", setHeaderHeight);

        const res = productsJSON.map((item) => {
            return <p key={item.key}>{item.name}</p>;
        });
        setProducts(res);
        return () => {
            window.removeEventListener("scroll", setHeaderHeight);
        };
    }, []);

    return (
        <div
            className="header"
            style={{
                height: narrowHeader ? "50px" : "100px",
            }}
        >
            <Link
                className={
                    narrowHeader ? "logo-container-narrow" : "logo-container"
                }
                to="/"
                style={{ paddingBlock: narrowHeader ? "0" : "1rem" }}
            >
                <img src={narrowHeader ? roundLogo : logo} />
            </Link>
            <div
                className="nav-container"
                style={{
                    alignItems: narrowHeader ? "center" : "flex-end",
                }}
            >
                <Link
                    className="nav-item"
                    to="/products"
                    style={{
                        paddingBlock: narrowHeader ? "0" : "1rem",
                        backgroundColor: hoverProducts
                            ? "rgb(245, 245, 245)"
                            : "",
                    }}
                    onMouseOver={() => setHoverProducts(true)}
                    onMouseLeave={() => setHoverProducts(false)}
                >
                    Ürünler
                </Link>
                <Link
                    className="nav-item"
                    to="/about"
                    style={{ paddingBlock: narrowHeader ? "0" : "1rem" }}
                >
                    Hakkımızda
                </Link>
                <Link
                    className="nav-item"
                    to="/docs"
                    style={{ paddingBlock: narrowHeader ? "0" : "1rem" }}
                >
                    Belgelerimiz
                </Link>
                <Link
                    className="nav-item"
                    to="/references"
                    style={{ paddingBlock: narrowHeader ? "0" : "1rem" }}
                >
                    Referanslar
                </Link>
            </div>
            {hoverProducts && (
                <div
                    className="headerBelowPart"
                    onMouseOver={() => setHoverProducts(true)}
                    onMouseLeave={() => setHoverProducts(false)}
                >
                    {products}
                </div>
            )}
        </div>
    );
}

export default Header;
