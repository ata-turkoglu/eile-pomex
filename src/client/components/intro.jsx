import React from "react";
import "./intro.scss";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { translateText as t } from "../../store/reducers/language";

function Intro() {
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="intro">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/tile-adhesive.jpeg"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>{t("cementBasedAdhesives")}</h4>
                        <p>{t("rdInfo")}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/s2.jpg"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>{t("ourHighQualityStandards")}</h4>
                        <p>{t("rdInfo")}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/joint-grout.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/thermal-plaster.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/waterproofing.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/bims.jpg"
                        />
                        <span
                            className="detailButton"
                            onClick={() => navigate("/pomexblok")}
                        >
                            {t("details")}
                        </span>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Intro;
