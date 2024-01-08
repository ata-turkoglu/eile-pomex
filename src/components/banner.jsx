import React from "react";
import { useEffect, useState } from "react";
import "./banner.scss";

function Banner({ image }) {
    const [location, setLocation] = useState(null);
    const [showText, setShowText] = useState(false);
    function checkScroll() {
        if (window.scrollY > location) {
            setShowText(true);
        }
    }
    useEffect(() => {
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
            {showText ? (
                <div className="banner-content slide-right">
                    <h3 className="mb-4">
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
        </div>
    );
}

export default Banner;
