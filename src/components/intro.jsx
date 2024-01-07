import React from "react";
import "./intro.scss";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/introCarousel/s0.png";
import img2 from "../assets/introCarousel/s1.jpg";
import img3 from "../assets/introCarousel/s2.jpg";

function Intro() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="intro">
            <Carousel activeIndex={index} onSelect={handleSelect}>
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
            </Carousel>
        </div>
    );
}

export default Intro;
