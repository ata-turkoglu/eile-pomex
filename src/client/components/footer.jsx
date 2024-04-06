import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>HAKKIMIZDA</h4>
                        <a href="/kalite-politikamiz">
                            <p>Kalite Politikamız</p>
                        </a>
                        <a href="/misyon-vizyon">
                            <p>Misyonumuz-Vizyonumuz</p>
                        </a>
                    </div>

                    <div className="sb__footer-links-div">

                        <h4>ÜRÜNLERİMİZ</h4>
                        <a href="/onarim-guclendirme-sistemleri">
                            <p>Onarım Güçlendirme Sistemleri</p>
                        </a>
                        <a href="/su-yalitim-sistemleri">
                            <p>Su Yalıtım Sistemleri</p>
                        </a>
                        <a href="/zemin-sistemleri">
                            <p>Zemin Sistemleri</p>
                        </a>
                        <a href="/sivalar">
                            <p>Sıvalar</p>
                        </a>
                        <a href="/yapistiricilar">
                            <p>Yapıştırıcılar</p>
                        </a>
                        <a href="/fuga-derz-dolgular">
                            <p>Fuga Derz Dolgular</p>
                        </a>
                        <a href="/astar-ve-kalip-ayiricilar">
                            <p>Astar ve Destek Ürünleri</p>
                        </a>
                    </div>

                    <div className="sb__footer-links-div">
                        <h4>BELGELERİMİZ</h4>
                        <a href="/firma-belgeleri">
                            <p>Firma Belgeleri</p>
                        </a>
                        <a href="/ürün-belgeleri">
                            <p>Ürün Belgeleri</p>
                        </a>
                    </div>

                    <div className="sb__footer-address">
                        <h4 className="mb-4">Eile Pomex Yapı Kimyasalları</h4>
                        <p>Yeniköy Mah. Menderes-Orhanlı Yolu Sk.</p>
                        <p>No: 179/26 Menderes/İzmir</p>
                        <p>Tel : 0232 360 16 16</p>
                        <p>Fax : 0232 360 17 77</p>
                    </div>

                    {/* <div className="sb__footer-links-div">
                        <h4>Bizi Takip Edin</h4>
                        <div className="socialmedia">
                            <Instagram />
                            <Facebook />
                            <Youtube />
                            <Linkedin  style={{marginLeft: "5px"}}/>
                            
                        </div>
                    </div> */}

                    <div className="sb__footer-map-section">
                        <iframe width="350" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                         src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(ET%C4%B0PER%20Perlit%20%C4%B0%C5%9Fletme%20-%20POMZAEXPORT%20MADENC%C4%B0L%C4%B0K%20A.%C5%9E.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
                        </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Eile Pomex Tüm Hakları Saklıdır.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/KKVK">
                            <div> <p>Kişisel Verilerin Korunması</p></div>
                        </a>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Footer;
