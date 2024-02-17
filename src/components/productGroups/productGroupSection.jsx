import React, { useEffect, useState } from "react";
import "./productGroupSection.scss";
import ProductCard from "./productGroupCard";
import img1 from "../../assets/productGroups/c1.png";
import img2 from "../../assets/productGroups/c2.jpg";
import img3 from "../../assets/productGroups/c3.jpg";
import img4 from "../../assets/productGroups/c4.jpg";
import img5 from "../../assets/productGroups/c5.jpeg";
import img6 from "../../assets/productGroups/c6.jpeg";
import img7 from "../../assets/productGroups/c7.jpeg";
import img8 from "../../assets/introCarousel/siva.jpg";
import icon1 from "../../assets/groupIcons/i1.png";
import icon2 from "../../assets/groupIcons/i2.png";
import icon3 from "../../assets/groupIcons/i3.png";
import icon4 from "../../assets/groupIcons/i4.png";
import icon5 from "../../assets/groupIcons/i5.png";
import Swiper from "../swiper/swiper";

function ProductGroupSection() {
    const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
    });
    return (
        <div className="productGroupSection">
            <h2>Ürün Grupları / Örnek Projeler</h2>
            {mobileView ? (
                <Swiper>
                    <ProductCard
                        image={img1}
                        text="Seramik Yapıştırma Harçları"
                        icon={icon5}
                    />
                    <ProductCard image={img2} text="Su Yalıtımı" icon={icon1} />
                    <ProductCard
                        image={img3}
                        text="Isı ve Ses Yalıtımı"
                        icon={icon3}
                    />
                    <ProductCard
                        image={img4}
                        text="Zemin Uygulamaları"
                        icon={icon1}
                    />
                    <ProductCard
                        image={img5}
                        text="Onarım ve Güçlendirme"
                        icon={icon2}
                    />
                    <ProductCard
                        image={img6}
                        text="Astar ve Destek Ürünleri"
                        icon={icon1}
                    />
                </Swiper>
            ) : (
                <div className="content">
                    <ProductCard
                        image={img1}
                        text="Seramik Yapıştırma Harçları"
                        icon={icon5}
                    />
                    <ProductCard image={img2} text="Su Yalıtımı" icon={icon1} />
                    <ProductCard
                        image={img3}
                        text="Isı ve Ses Yalıtımı"
                        icon={icon3}
                    />
                    <ProductCard
                        image={img4}
                        text="Zemin Uygulamaları"
                        icon={icon1}
                    />
                    <ProductCard
                        image={img5}
                        text="Onarım ve Güçlendirme"
                        icon={icon2}
                    />
                    <ProductCard
                        image={img6}
                        text="Astar ve Destek Ürünleri"
                        icon={icon1}
                    />
                    {/* 
                <ProductCard
                    image={img7}
                    text="Fuga ve Derz Dolgular"
                    icon={icon4}
                />
                <ProductCard image={img8} text="Sıvalar" icon={icon4} /> 
                */}
                </div>
            )}
        </div>
    );
}

export default ProductGroupSection;
