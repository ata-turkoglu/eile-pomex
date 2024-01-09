import React from "react";
import Intro from "../components/intro";
import Info from "../components/info";
import Banner from "../components/banner";
import ProductGroupSection from "../components/productGroups/productGroupSection";
import infoImage1 from "../assets/introCarousel/siva.jpg";
import bannerImage from "../assets/sustainability.jpg";
function Home() {
    return (
        <div className="home">
            <Intro />
            {/*<div className="spacerH50"></div>*/}
            <Info
                image={infoImage1}
                text="Çimento esaslı, karışımında bulunan gözenekli yapıya sahip doğal hafif agregalar sayesinde uygulandığı yüzeyde nefes alan ısı-ses ve yangın yalıtımı sağlayan, sıva formunda çok amaçlı yalıtım malzemesidir. Yapıların dış ve iç cephelerinde tuğla-gaz beton-bims blok gibi yüzeyler üzerine kaba sıva yerine uygulanır."
            />
            {/*<div className="spacerH50"></div>*/}
            <Banner image={bannerImage} />
            {/*<div className="spacerH50"></div>*/}
            <ProductGroupSection />
            <div className="spacerH50"></div>
        </div>
    );
}

export default Home;
