import React, { useLayoutEffect } from "react";
import Intro from "../components/intro";
import Metrics from "../components/metrics";
import Info from "../components/info";
import Banner from "../components/banner";
import Brands from "../components/brands";
import ProjectSamplesSection from "../components/projectsGroup/projectSamplesSection";
import thermomexImg from "/assets/products/thermomex_ısı_ve_yalıtım_sıvası.png";
import bannerImage from "../../assets/sustainability.jpg";
function Home() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="home" className="home">
            <Intro />
            <Metrics />
            <Info
                image={thermomexImg}
                header="Yalıtımda Doğal Çözümler"
                text="Çimento esaslı, karışımında bulunan gözenekli yapıya sahip doğal hafif agregalar sayesinde uygulandığı yüzeyde nefes alan ısı-ses ve yangın yalıtımı sağlayan, sıva formunda çok amaçlı yalıtım malzemesidir. Yapıların dış ve iç cephelerinde tuğla-gaz beton-bims blok gibi yüzeyler üzerine kaba sıva yerine uygulanır."
            />
            <Banner image={bannerImage} />
            <Info
                image={"/assets/bims-blok.png"}
                header="Pomex Blok"
                text="Son yıllarda inşaat sektöründe özellikle ısı ve ses yalıtımında, öz kütlesinin düşük olmasının sağladığı avantajların da bir sonucu olarak sıklıkla kullanılan, volkanizma sonucu oluşmuş doğal bir malzeme olan bims, kristalize, gözenekli, süngerimsi, fiziksel ve kimyasal etkenlere karşı dayanıklı bir malzemedir."
            />
            <ProjectSamplesSection />
            <Brands />
            <div className="spacerH50"></div>
        </div>
    );
}

export default Home;
