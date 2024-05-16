import React from "react";
import "./intro.scss";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { translateText as t } from "../../store/reducers/language";
import img1 from "../../assets/introCarousel/thermal-plaster.jpeg";
import img2 from "../../assets/introCarousel/waterproofing.jpeg";
import img3 from "../../assets/introCarousel/s2.jpg";
import img4 from "../../assets/introCarousel/tile-adhesive.jpeg";
import img5 from "../../assets/introCarousel/joint-grout.jpeg";
import img6 from "../../assets/introCarousel/bims.jpg";

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
                        <img className="d-block w-100" src={img4} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Çimento Esaslı Yapıştırıcılar</h4>
                        <p>
                            Tamamıyla AR-GE bölümümüz tarafından geliştirilen ve
                            üretilen ürünlerimiz yüksek teknolojiye sahip
                            labaratuvarlarımızdan onay almadan satışa
                            çıkmamaktadır.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img className="d-block w-100" src={img3} />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Yüksek Kalite Standartlarımız</h4>
                        <p>
                            Tamamıyla AR-GE bölümümüz tarafından geliştirilen ve
                            üretilen ürünlerimiz yüksek teknolojiye sahip
                            labaratuvarlarımızdan onay almadan satışa
                            çıkmamaktadır.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img className="d-block w-100" src={img5} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img className="d-block w-100" src={img1} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img className="d-block w-100" src={img2} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img className="d-block w-100" src={img6} />
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
