import React from "react";
import "./banner.scss";

function Banner({ image }) {
    return (
        <div className="banner">
            <img src={image} />
            <div className="banner-content">
                <h3 className="mb-4">
                    Yaşadığımız Çevreyi ve Sizi Önemsiyoruz!
                </h3>
                <p>
                    Doğanın içinde sürdürülebilir üretim anlayışı ile sıfır atık
                    ile çalışmalarımıza devam ediyoruz
                </p>
            </div>
        </div>
    );
}

export default Banner;
