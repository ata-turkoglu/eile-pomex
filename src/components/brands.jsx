import React from "react";
import "./brands.scss";

import sardesQuartzImg from "../assets/companies/sardes-quartz-white.png";
import persanWhiteImg from "../assets/companies/persan-white.png";
import eileWhiteImg from "../assets/companies/eile-white.png";

function Brands() {
    return (
        <div className="brands">
            <div className="content">
                <div className="headerContainer">
                    <h1 color="white">Grup Şirketlerimiz</h1>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <img src={persanWhiteImg} />
                    </div>
                    <div className="imgContainer">
                        <img src={sardesQuartzImg} />
                    </div>
                    <div className="imgContainer">
                        <img src={eileWhiteImg} />
                    </div>
                    <div className="imgContainer">
                        <img src={sardesQuartzImg} />
                    </div>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <img src={sardesQuartzImg} />
                    </div>
                    <div className="imgContainer">
                        <img src={persanWhiteImg} />
                    </div>
                    <div className="imgContainer">
                        <img src={eileWhiteImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
