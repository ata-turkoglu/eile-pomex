import React from "react";
import "./css/carousel.scss";

function Admin_Home_Carousel(navigation) {
    return (
        <div className="admin_home_carousel">
            <div className="add_new">
                <span>+</span>
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/thermal-plaster.jpeg" />
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/waterproofing.jpeg" />
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/siva.jpg" />
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/s2.jpg" />
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/bims.jpg" />
            </div>
            <div className="img_container">
                <img src="assets/introCarousel/joint-grout.jpeg" />
            </div>
        </div>
    );
}

export default Admin_Home_Carousel;
