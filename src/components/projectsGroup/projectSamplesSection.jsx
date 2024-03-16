import React, { useEffect, useState } from "react";
import "./projectSamplesSection.scss";
import ProjectSampleCard from "./ProjectSampleCard.jsx";
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
                        image="assets/projects/project1.jpg"
                        text="İstanbul Boğaz köprüsü Ortaköy Yaklaşma Viyadüğü Güçlendirmesi"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project2.jpg"
                        text="Vestel Manisa Fabrika Binası İnşaatı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project3.jpg"
                        text=" Antalya Havaalanı Deprem İzolatörü Montajı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project4.jpg"
                        text="Yeda İnşaat İzmir Atatürk Yüzme Havuzu Tadilatı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project5.jpg"
                        text="Tüpraş Dolum iskelesi Onarım İşleri"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project6.jpg"
                        text="İzsu İshale Hatları"
                    />
                </Swiper>
            ) : (
                <div className="content">
                    <ProjectSampleCard
                        image="assets/projects/project1.jpg"
                        text="İstanbul Boğaz köprüsü Ortaköy Yaklaşma Viyadüğü Güçlendirmesi"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project2.jpg"
                        text="Vestel Manisa Fabrika Binası İnşaatı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project3.jpg"
                        text=" Antalya Havaalanı Deprem İzolatörü Montajı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project4.jpg"
                        text="Yeda İnşaat İzmir Atatürk Yüzme Havuzu Tadilatı"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project5.jpg"
                        text="Tüpraş Dolum iskelesi Onarım İşleri"
                    />
                    <ProjectSampleCard
                        image="assets/projects/project6.jpg"
                        text="İzsu İshale Hatları"
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectSamplesSection;
