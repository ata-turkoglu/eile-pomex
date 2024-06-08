import React, { useLayoutEffect } from "react";
import Intro from "../components/intro";
import Metrics from "../components/metrics";
import Info from "../components/info";
import Banner from "../components/banner";
import Brands from "../components/brands";
import ProjectSamplesSection from "../components/projectsGroup/projectSamplesSection";
import thermomexImg from "/assets/products/thermomex_ısı_ve_yalıtım_sıvası.png";
import bannerImage from "/assets/info/etiperview.jpg";
import { translateText as t } from "../../store/reducers/language";
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
                header={t("naturalSolutionsInInsulation")}
                text={t("infoThermomex")}
                to="/product-details/6-0-2"
            />
            <Banner image={bannerImage} />
            <Info
                image={"/assets/pomexblok/bims-blok.png"}
                header="Pomex Blok"
                text={t("infoPomexBlok")}
                to="/pomexblok"
            />
            <ProjectSamplesSection />
            <Brands />
            <div className="spacerH50"></div>
        </div>
    );
}

export default Home;
