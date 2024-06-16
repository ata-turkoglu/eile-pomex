import React from "react";
import "./css/pomexBlok.scss";
import BlokIntro from "../components/blokIntro";

function PomexBlokPage() {
    return (
        <div className="pomex_blok_page">
            {/* <div className="intro">
                <img src="/assets/pomexblok/cure-room.jpg" />
                <img className="logo" src="assets/logos/pomexblok-logo.png" />
            </div> */}
            <div className="intro">
                <BlokIntro />
            </div>
            {/* <img src="assets/pomexblok/bims-blok.png" /> */}
        </div>
    );
}

export default PomexBlokPage;
