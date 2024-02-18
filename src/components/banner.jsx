import React from "react";
import { useEffect, useState } from "react";
import "./banner.scss";

function Banner({ image }) {
    const [mobileView, setMobileView] = useState(false);
    const [location, setLocation] = useState(null);
    const [showText, setShowText] = useState(false);
    function checkScroll() {
        if (window.scrollY > location) {
            setShowText(true);
        }
    }
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
        const el = document.getElementById("banner");
        const loc = el.offsetTop - window.screen.availHeight / 2;
        setLocation(loc);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, [location]);

    return (
        <div id="banner" className="banner">
            <img src={image} />
            {showText || mobileView ? (
                <div className="banner-content slide-right">
                    <h3 className={mobileView ? "mb-3" : "mb-4"}>
                        Yaşadığımız Çevreyi ve Sizi Önemsiyoruz!
                    </h3>
                    <p>
                        Doğanın içinde sürdürülebilir üretim anlayışı ile sıfır
                        atık ile çalışmalarımıza devam ediyoruz
                    </p>
                </div>
            ) : (
                ""
            )}
            {mobileView && <div className="banner-mobile-shadow"></div>}
        </div>
    );
}

export default Banner;
