import React from "react";
import { useEffect, useState } from "react";
import "./header.scss";
import logo from "../assets/eile-logo.png";
import roundLogo from "../assets/eile-round.png";
import { Link } from "react-router-dom";
import productsJSON from "../data/products.json";
import {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Phone,
    MapPin,
    Search,
} from "lucide-react";

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
                paddingLeft: narrowHeader ? "2rem" : "0",
                borderImage: narrowHeader
                    ? "linear-gradient(to right,white, rgb(1,90,170), white) 30"
                    : "",
                borderWidth: narrowHeader ? 3 : "",
            }}
        >
            <Link
                className={
                    narrowHeader ? "logo-container-narrow" : "logo-container"
                }
                to="/"
                /* style={{ paddingBlock: narrowHeader ? "0" : "1rem" }} */
            >
                <img src={narrowHeader ? roundLogo : logo} />
            </Link>
            <div
                className="nav-container"
                style={{
                    alignItems: narrowHeader ? "center" : "flex-end",
                }}
            >
                {!narrowHeader && (
                    <div className="nav-container-top">
                        <MapPin color="rgb(1,90,170)" size={18} />
                        <span
                            style={{
                                marginLeft: "1rem",
                                marginRight: "3rem",
                                fontSize: ".9rem",
                            }}
                        >
                            Ankara Asfaltı Belkahve Mevkii No:277 Kavaklıdere
                            Köyü Bornova / İZMİR
                        </span>
                        <Phone color="rgb(1,90,170)" size={18} />
                        <span style={{ marginInline: "1rem" }}>
                            0 232 360 17 77
                        </span>
                        <Linkedin
                            color="rgb(1,90,170)"
                            style={{
                                cursor: "pointer",
                                marginRight: "10px",
                                marginLeft: "2rem",
                            }}
                            size={18}
                        />
                        <Twitter
                            color="rgb(1,90,170)"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            size={18}
                        />
                        <Instagram
                            color="rgb(1,90,170)"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            size={18}
                        />
                        <Facebook
                            color="rgb(1,90,170)"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            size={18}
                        />
                    </div>
                )}
                <div
                    className="nav-container-bottom"
                    style={{
                        height: narrowHeader ? "100%" : "70%",
                    }}
                >
                    <div className="nav-container-links">
                        <Link
                            className="nav-item"
                            to="/products"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                            onMouseOver={() => setHoverProducts(true)}
                            onMouseLeave={() => setHoverProducts(false)}
                        >
                            Ürünler
                        </Link>
                        <Link
                            className="nav-item"
                            to="/about"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            className="nav-item"
                            to="/docs"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                        >
                            Belgelerimiz
                        </Link>
                        <Link
                            className="nav-item"
                            to="/references"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                        >
                            Referanslar
                        </Link>
                        <Link
                            className="nav-item"
                            to="/contact"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                        >
                            İletişim
                        </Link>
                    </div>
                    <div
                        className="searchContainer"
                        style={{ alignItems: narrowHeader ? "center" : "" }}
                    >
                        <Search
                            color="rgb(16, 16, 89)"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            size={24}
                        />
                    </div>
                </div>
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
