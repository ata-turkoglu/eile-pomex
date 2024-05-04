import React, { useEffect, useState } from "react";
import "./projectSamplesSection.scss";
import ProjectSampleCard from "./projectSampleCard.jsx";
import Swiper from "../swiper/swiper";

function ProjectSamplesSection() {
    const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
    });
    return (
        <div className="productGroupSection">
            <h2>Ürünlerimizin Kullanıldığı Projeler</h2>
            {mobileView ? (
                <Swiper>
                    <ProjectSampleCard
                        image1="assets/projects/project1.jpg"
                        image2="assets/products/eile_TH_70.png"
                        text="İstanbul Boğaz Köprüsü Ortaköy Yaklaşma Viyadüğü Güçlendirmesinde"
                        product="2-3-5"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project2.jpg"
                        image2="assets/products/epx_630.png"
                        text="Vestel Manisa Fabrika Binası İnşaatında"
                        product="5-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project3.jpg"
                        image2="assets/products/power_wt1.png"
                        text=" Antalya Havaalanı Deprem İzolatörü Montajında"
                        product="2-1-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project4.jpg"
                        image2="assets/products/likit_akrilik.png"
                        text="Yeda İnşaat İzmir Atatürk Yüzme Havuzu Tadilatında"
                        product="1-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project5.jpg"
                        image2="assets/products/epx_50.png"
                        text="Tüpraş Dolum İskelesi Onarım İşlerinde"
                        product="2-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project6.jpg"
                        image2="assets/products/eile_ASEAL.png"
                        text="İzsu İshale Hatlarında"
                        product="1-1-1"
                    />
                </Swiper>
            ) : (
                <div className="content">
                    <ProjectSampleCard
                        image1="assets/projects/project1.jpg"
                        image2="assets/products/eile_TH_70.png"
                        text="İstanbul Boğaz Köprüsü Ortaköy Yaklaşma Viyadüğü Güçlendirmesinde"
                        product="2-3-5"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project2.jpg"
                        image2="assets/products/epx_630.png"
                        text="Vestel Manisa Fabrika Binası İnşaatında"
                        product="5-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project3.jpg"
                        image2="assets/products/power_wt1.png"
                        text="Antalya Havaalanı Deprem İzolatörü Montajında"
                        product="2-1-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project4.jpg"
                        image2="assets/products/likit_akrilik.png"
                        text="Yeda İnşaat İzmir Atatürk Yüzme Havuzu Tadilatında"
                        product="1-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project5.jpg"
                        image2="assets/products/epx_50.png"
                        text="Tüpraş Dolum İskelesi Onarım İşlerinde"
                        product="2-2-1"
                    />
                    <ProjectSampleCard
                        image1="assets/projects/project6.jpg"
                        image2="assets/products/eile_ASEAL.png"
                        text="İzsu İshale Hatlarında"
                        product="1-1-1"
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectSamplesSection;
