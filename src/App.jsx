import React from "react";
import "./App.css";

import Admin from "./admin/Admin.jsx";
import Admin_Home from "./admin/pages/Admin_Home.jsx";
import Admin_Projects from "./admin/pages/Admin_Projects.jsx";
import Client from "./client/Client.jsx";
import Home from "./client/pages/Home.jsx";
import About from "./client/pages/About.jsx";
import Products from "./client/pages/Products.jsx";
import Projects from "./client/pages/Projects.jsx";
import ProductDetails from "./client/pages/ProductDetails.jsx";
import References from "./client/pages/References.jsx";
import Docs from "./client/pages/Docs.jsx";
import Contact from "./client/pages/Contact.jsx";
import Pomex_Blok_Page from "./client/pages/PomexBlok.jsx";

import { Route, Routes, useLocation } from "react-router-dom";

function App(navigation) {
    const route = useLocation();

    const checkProductDetails = (route) => {
        return route.pathname.includes("product-details");
    };

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
                        <Route
                            path="references"
                            element={<References />}
                        ></Route>
                        <Route path="docs" element={<Docs />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
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
        </div>
    );
}

export default App;
