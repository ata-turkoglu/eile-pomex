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
        <nav>
            <div className="logo-container">
                <img src={logo} />
            </div>

            <div className="menu" onClick={toggleActiveClass}>
                <span></span>
                <span></span>
                <span></span>
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
