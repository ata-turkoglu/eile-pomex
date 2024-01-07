import React from "react";
import "./footer.scss";
import pomza_export from "../assets/companies/pomza_export.jpeg";
import erper from "../assets/companies/erper.png";
import persan from "../assets/companies/persan.jpeg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-companies">
                <h5 className="mb-4">Grup Şirketlerimiz</h5>
                <img src={pomza_export} />
                <img src={erper} />
                <img src={persan} />
            </div>
            <div className="vr"></div>
            <div className="footer-links">
                <Link className="nav-item">Hakkımızda</Link>
                <Link className="nav-item">Ürünler</Link>
                <Link className="nav-item">Referanslar</Link>
            </div>
            <div className="vr"></div>
            <div className="footer-adress">
                <h5 className="mb-4">Eile Pomex Yapı Kimyasalları</h5>
                <p>Ankara Asfaltı Belkahve Mevkii No:277</p>
                <p>Kavaklıdere Köyü Bornova / İZMİR</p>
                <p>Tel : 0232 360 17 77</p>
                <p>Fax : 0232 360 16 16</p>
            </div>
            <div className="vr"></div>
            <div className="footer-map">map</div>
        </div>
    );
}

export default Footer;
