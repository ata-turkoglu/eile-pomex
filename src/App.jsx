import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import References from "./pages/References.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/references",
        element: <References />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

function App() {
    return (
        <>
            <Header />
            <div className="pagContainer">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/references" element={<References />}></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
