import React, { useState } from "react";
import "./header.scss";
import logo from "../assets/eile-logo.png";
import { Link, NavLink} from "react-router-dom";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleActiveClass = () => {
        setMenuOpen(!menuOpen);
      };

      const removeActive = () => {
        setMenuOpen(false)
      }

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
            
            <div>
            <ul className={menuOpen ? "open" : ""}>
                <li onClick={removeActive}>
                    <NavLink to="/">Anasayfa</NavLink>
                </li>
                <li onClick={removeActive}>
                    <NavLink to="/about">Hakkımızda</NavLink>
                </li>
                <li onClick={removeActive}>
                    <NavLink to="/products">Ürünler</NavLink>
                </li>
                <li onClick={removeActive}>
                    <NavLink to="/references">Referanslar</NavLink>
                </li>
            </ul>
            </div>
        </nav>

    );
}



export default Header;
