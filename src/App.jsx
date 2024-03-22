import React from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Projects from "./pages/Projects.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import References from "./pages/References.jsx";
import Docs from "./pages/Docs.jsx";
import Contact from "./pages/Contact.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

function App(navigation) {
    const route = useLocation();
    const checkProductDetails = (route) => {
        return route.pathname.includes("product-details");
    };
    return (
        <div className="app">
            <Header />
            <div
                className="pageContainer"
                style={{
                    paddingBottom: checkProductDetails(route) ? "0" : "1rem",
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/products/:productKey"
                        element={<Products />}
                    ></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route
                        path="/product-details/:productKey"
                        element={<ProductDetails />}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/references" element={<References />}></Route>
                    <Route path="/docs" element={<Docs />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
