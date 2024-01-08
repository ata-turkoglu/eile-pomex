import React from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import References from "./pages/References.jsx";
import Docs from "./pages/Docs.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="pageContainer">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/references" element={<References />}></Route>
                    <Route path="/docs" element={<Docs />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
