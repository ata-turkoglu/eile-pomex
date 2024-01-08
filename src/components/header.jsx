import React from "react";
import "./header.scss";
import logo from "../assets/eile-logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} />
            </div>
            <div className="nav-container">
                <Link className="nav-item" to="/">
                    Anasayfa
                </Link>
                <Link className="nav-item" to="/about">
                    Hakkımızda
                </Link>
                <Link className="nav-item" to="/products">
                    Ürünler
                </Link>
                <Link className="nav-item" to="/docs">
                    Belgelerimiz
                </Link>
                <Link className="nav-item" to="/references">
                    Referanslar
                </Link>
            </div>
        </div>
    );
}

export default Header;
