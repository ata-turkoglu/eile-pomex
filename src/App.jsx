import React, { useEffect } from "react";
import "./App.css";

import Admin from "./admin/Admin.jsx";
import Admin_Home from "./admin/tabs/Admin_Home.jsx";
import Admin_Projects from "./admin/tabs/Admin_Projects.jsx";
import Client from "./client/Client.jsx";
import Home from "./client/pages/Home.jsx";
import About from "./client/pages/About.jsx";
import Products from "./client/pages/Products.jsx";
import Projects from "./client/pages/Projects.jsx";
import ProductDetails from "./client/pages/ProductDetails.jsx";
//import References from "./client/pages/References.jsx";
import Docs from "./client/pages/Docs.jsx";
import Contact from "./client/pages/Contact.jsx";
import Pomex_Blok_Page from "./client/pages/PomexBlok.jsx";
import DownloadCatalogEn from "./client/pages/DownloadCatalogEn.jsx";

import { Route, Routes, useLocation } from "react-router-dom";
import { changeLang } from "./store/reducers/language.js";
import { useDispatch } from "react-redux";

function App(navigation) {
    const route = useLocation();
    const dispatch = useDispatch();

    const checkProductDetails = (route) => {
        return (
            route.pathname.includes("product-details") ||
            route.pathname.includes("pomexblok")
        );
    };

    useEffect(() => {
        const lang = window.localStorage.getItem("lang");
        if (lang) {
            dispatch(changeLang(lang));
        } else {
            const browserLang = window.navigator.language.slice(0, 2);
            dispatch(changeLang(browserLang));
        }
    }, []);

    return (
        <div className="app">
            <div
                className="pageContainer"
                style={{
                    paddingBottom: checkProductDetails(route) ? "0" : "1rem",
                }}
            >
                <Routes>
                    <Route path="/" element={<Client />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="products/:productKey"
                            element={<Products />}
                        ></Route>
                        <Route path="projects" element={<Projects />}></Route>
                        <Route
                            path="product-details/:productKey"
                            element={<ProductDetails />}
                        ></Route>
                        <Route path="about" element={<About />}></Route>
                        {/* <Route
                            path="references"
                            element={<References />}
                        ></Route> */}
                        <Route path="docs" element={<Docs />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route
                            path="download_catalog_en"
                            element={<DownloadCatalogEn />}
                        ></Route>
                    </Route>
                    <Route path="/admin" element={<Admin />}>
                        <Route path="home" element={<Admin_Home />}></Route>
                        <Route
                            path="projects"
                            element={<Admin_Projects />}
                        ></Route>
                    </Route>
                    <Route
                        path="pomexblok"
                        element={<Pomex_Blok_Page />}
                    ></Route>
                </Routes>
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 50,
                    width: "fit-content",
                    height: "fit-content",
                    cursor: "pointer",
                }}
            >
                <a
                    href="https://wa.me/+905306414805"
                    target="_blank"
                    aria-label="Chat on WhatsApp"
                >
                    <img
                        src="/assets/logos/whatsapp.png"
                        alt="Chat on WhatsApp"
                        width={40}
                        style={{ filter: "drop-shadow(0 0 8px grey)" }}
                    />
                </a>
            </div>
        </div>
    );
}

export default App;
