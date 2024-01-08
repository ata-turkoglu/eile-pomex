import React from "react";
import { useEffect, useState } from "react";
import "./header.scss";
import logo from "../assets/eile-logo.png";
import roundLogo from "../assets/eile-round.png";
import { Link } from "react-router-dom";

function Header() {
    const [narrowHeader, setNarrowHeader] = useState(false);
    useEffect(() => {
        function setHeaderHeight() {
            if (window.scrollY > 100) {
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

    return (
        <div
            className="header"
            style={{
                height: narrowHeader ? "50px" : "100px",
                paddingBlock: narrowHeader ? "0" : "1rem",
            }}
        >
            <div
                className={
                    narrowHeader ? "logo-container-narrow" : "logo-container"
                }
            >
                <img src={narrowHeader ? roundLogo : logo} />
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
