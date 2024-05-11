import React from "react";
import { useEffect, useState } from "react";
import "./header.scss";
import logo from "../../assets/eile-logo.png";
import roundLogo from "../../assets/eile-round.png";
import { Link } from "react-router-dom";
import productsJSON from "../../data/products.json";
import {
    Instagram,
    Facebook,
    Linkedin,
    Phone,
    MapPin,
    Search,
} from "lucide-react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { changeLang, translateText as t } from "../../store/reducers/language";

function Header() {
    const [narrowHeader, setNarrowHeader] = useState(false);
    const [products, setProducts] = useState([]);
    const [hoverProducts, setHoverProducts] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [langState, setLangState] = useState("");

    const lang = useSelector((state) => state.language.lang);
    const dispatch = useDispatch();

    useEffect(() => {
        function setHeaderHeight() {
            if (window.scrollY > 200) {
                setNarrowHeader(true);
            } else {
                setNarrowHeader(false);
            }
        }
        window.addEventListener("scroll", setHeaderHeight);
        return () => {
            window.removeEventListener("scroll", setHeaderHeight);
        };
    }, []);

    useEffect(() => {
        const res = (
            <div id="productListContainer" className="productListContainer">
                {productsJSON.map((item) => {
                    return (
                        <div
                            key={item.key}
                            className={
                                collapse
                                    ? "productListItem"
                                    : "productListItem1"
                            }
                        >
                            <Link
                                className={
                                    collapse ? "productGroup" : "productGroup1"
                                }
                                onClick={handleListItemClick}
                                to={"/products/" + item.key}
                            >
                                <p>{item.name}</p>
                            </Link>
                            {item.subGroups && (
                                <div
                                    className={
                                        collapse
                                            ? "productSubGroups"
                                            : "productSubGroups1"
                                    }
                                >
                                    {item.subGroups.map((subGroup) => {
                                        return (
                                            <Link
                                                key={subGroup.key}
                                                className="subGroupLink"
                                                onClick={handleListItemClick}
                                                to={"/products/" + subGroup.key}
                                            >
                                                {subGroup.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
        setProducts(res);
    }, [collapse]);

    const handleListItemClick = () => {
        const el = document.getElementById("productListContainer");
        if (el) {
            el.style.display = "none";
        }
    };

    const menuChange = () => {
        const elem = document.getElementById("menu-btn");
        const nav = document.getElementById("mobileNavigation");
        const social = document.getElementById("toSocial");
        if (!mobileNav) {
            elem.classList.add("open");
            nav.classList.add("sdown");
            social.classList.add("sleft");
            setMobileNav(true);
            setTimeout(() => {
                social.classList.remove("sleft");
                nav.classList.remove("sdown");
            }, 400);
        } else {
            elem.classList.remove("open");
            nav.classList.add("sup");
            social.classList.add("sright");
            setTimeout(() => {
                nav.classList.remove("sup");
                social.classList.remove("sright");
            }, 400);
            setTimeout(() => {
                setMobileNav(false);
            }, 390);
        }
    };
    const menuClose = () => {
        const elem = document.getElementById("menu-btn");
        const nav = document.getElementById("mobileNavigation");
        const social = document.getElementById("toSocial");
        nav.classList.add("sup");
        elem.classList.remove("open");
        social.classList.add("sright");
        setTimeout(() => {
            nav.classList.remove("sup");
            social.classList.remove("sright");
        }, 400);
        setTimeout(() => {
            setMobileNav(false);
        }, 390);
    };

    const changeLanguage = (language) => {
        dispatch(changeLang(language));
        setLangState(language);
        window.location.replace("/");
    };

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
            {/* logo container */}
            <Link
                className={
                    narrowHeader ? "logo-container-narrow" : "logo-container"
                }
                to="/"
                /* style={{ paddingBlock: narrowHeader ? "0" : "1rem" }} */
                onClick={menuClose}
            >
                <img src={narrowHeader ? roundLogo : logo} />
            </Link>
            <div
                className="nav-container"
                style={{
                    alignItems: narrowHeader ? "center" : "flex-end",
                }}
            >
                {/* address bar */}
                {!narrowHeader && (
                    <div className="nav-container-top">
                        <div className="address-bar">
                            <MapPin color="rgb(1,90,170)" size={18} />
                            <span
                                style={{
                                    marginLeft: "1rem",
                                    marginRight: "3rem",
                                    fontSize: ".9rem",
                                }}
                            >
                                Yeniköy Mah. Menderes-Orhanlı Yolu Sk. No:
                                179/26 Menderes/İzmir
                            </span>
                            <Phone color="rgb(1,90,170)" size={18} />
                            <span style={{ marginInline: "1rem" }}>
                                0 232 360 16 16
                            </span>
                        </div>
                        <a
                            href="https://tr.linkedin.com/company/eile-pomex-yap%C4%B1-kimyasallar%C4%B1"
                            target="_blank"
                        >
                            <Linkedin
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                    marginLeft: "2rem",
                                }}
                                size={18}
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/eilepomex/"
                            target="_blank"
                        >
                            <Instagram
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                size={18}
                            />
                        </a>

                        <a
                            href="https://www.facebook.com/eilepomex"
                            target="_blank"
                        >
                            <Facebook
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                size={18}
                            />
                        </a>
                    </div>
                )}
                {/* nav links bar */}
                <div
                    className="nav-container-bottom"
                    style={{
                        height: narrowHeader ? "100%" : "70%",
                    }}
                >
                    {/* web view navigation */}
                    <div className="nav-container-links">
                        <Link
                            className="nav-item"
                            to="/products/0"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                            onMouseOver={() => setHoverProducts(true)}
                            onMouseLeave={() => setHoverProducts(false)}
                        >
                            <span>{t("products")}</span>
                        </Link>
                        <Link
                            className="nav-item"
                            to="/projects"
                            style={{
                                paddingBlock: narrowHeader ? "0" : "1rem",
                                alignItems: narrowHeader
                                    ? "center"
                                    : "flex-end",
                            }}
                        >
                            <span>{t("projects")}</span>
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
                            <span>{t("aboutus")}</span>
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
                            <span>{t("certificates")}</span>
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
                            <span>{t("references")}</span>
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
                            <span>{t("contact")}</span>
                        </Link>
                        {langState}
                    </div>
                    <div
                        className="searchContainer"
                        style={{ alignItems: narrowHeader ? "center" : "" }}
                    >
                        {/* <span
                            style={{
                                paddingRight: ".6rem",
                                paddingBottom: ".12rem",
                            }}
                        >
                            Right
                        </span>
                        <Form.Check
                            type="switch"
                            style={{ marginRight: "2rem" }}
                            label="Down"
                            checked={collapse}
                            onChange={(e) => setCollapse(e.target.checked)}
                        /> */}
                        <Search
                            color="rgb(16,16,89)"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            size={24}
                        />
                        <Dropdown className="langText">
                            <Dropdown.Toggle
                                size="sm"
                                as="span"
                                className="langToggle"
                            >
                                {lang}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => changeLanguage("tr")}
                                >
                                    tr
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => changeLanguage("en")}
                                >
                                    en
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div
                id="toSocial"
                style={mobileNav ? { display: "flex" } : { display: "none" }}
            >
                <a
                    href="https://tr.linkedin.com/company/eile-pomex-yap%C4%B1-kimyasallar%C4%B1"
                    target="_blank"
                >
                    <Linkedin
                        color="rgb(1,90,170)"
                        style={{
                            cursor: "pointer",
                            marginRight: "10px",
                            marginLeft: "2rem",
                        }}
                        size={18}
                    />
                </a>
                <a href="https://www.instagram.com/eilepomex/" target="_blank">
                    <Instagram
                        color="rgb(1,90,170)"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        size={18}
                    />
                </a>
                <a href="https://www.facebook.com/eilepomex" target="_blank">
                    <Facebook
                        color="rgb(1,90,170)"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        size={18}
                    />
                </a>
            </div>

            {/* mobile view hamburger menu */}
            <div id="menu-btn" onClick={menuChange}>
                <div className="menu-btn-burger"></div>
            </div>

            {/* product categories */}

            {hoverProducts && (
                <div
                    className="headerBelowPart"
                    onMouseOver={() => setHoverProducts(true)}
                    onMouseLeave={() => setHoverProducts(false)}
                >
                    {products}
                </div>
            )}

            {/* mobile view navigation */}
            <div
                id="mobileNavigation"
                className="mobileNavigation"
                style={mobileNav ? { display: "flex" } : { display: "none" }}
            >
                <Link
                    className="nav-item"
                    to="/products/0"
                    onClick={() => menuClose()}
                >
                    <span>Ürünler</span>
                </Link>
                <Link
                    className="nav-item"
                    to="/projects"
                    onClick={() => menuClose()}
                >
                    <span>Projeler</span>
                </Link>
                <Link
                    className="nav-item"
                    to="/about"
                    onClick={() => menuClose()}
                >
                    <span>Hakkımızda</span>
                </Link>
                <Link
                    className="nav-item"
                    to="/docs"
                    onClick={() => menuClose()}
                >
                    <span>Belgelerimiz</span>
                </Link>
                <Link
                    className="nav-item"
                    to="/references"
                    onClick={() => menuClose()}
                >
                    <span>Referanslar</span>
                </Link>
                <Link
                    className="nav-item"
                    to="/contact"
                    onClick={() => menuClose()}
                >
                    <span>İletişim</span>
                </Link>
                <hr />
                <Dropdown className="langText">
                    <Dropdown.Toggle size="lg" as="span" className="langToggle">
                        {lang}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            className="langItem"
                            onClick={() => changeLanguage("tr")}
                        >
                            tr
                        </Dropdown.Item>
                        <Dropdown.Item
                            className="langItem"
                            onClick={() => changeLanguage("en")}
                        >
                            en
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
