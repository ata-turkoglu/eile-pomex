import React from "react";
import Intro from "../components/intro";
import Info from "../components/info";
import Banner from "../components/banner";
import Brands from "../components/brands";
import ProductGroupSection from "../components/productGroups/productGroupSection";
import infoImage1 from "../assets/introCarousel/siva.jpg";
import thermomexImg from "../assets/products/thermomex.png";
import bannerImage from "../assets/sustainability.jpg";
function Home() {
    return (
        <div className="home">
            <Intro />
            {/*<div className="spacerH50"></div>*/}
            <Info
                image={thermomexImg}
                text="Çimento esaslı, karışımında bulunan gözenekli yapıya sahip doğal hafif agregalar sayesinde uygulandığı yüzeyde nefes alan ısı-ses ve yangın yalıtımı sağlayan, sıva formunda çok amaçlı yalıtım malzemesidir. Yapıların dış ve iç cephelerinde tuğla-gaz beton-bims blok gibi yüzeyler üzerine kaba sıva yerine uygulanır."
            />
            {/*<div className="spacerH50"></div>*/}
            <Banner image={bannerImage} />
            {/*<div className="spacerH50"></div>*/}
            <ProductGroupSection />
            <Brands />
            <div className="spacerH50"></div>
        </div>
    );
}

export default Home;
