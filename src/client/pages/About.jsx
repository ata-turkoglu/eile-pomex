import React, { useLayoutEffect } from "react";
import "../pages/css/aboutPage.scss";
import { translateText as t } from "../../store/reducers/language";

function About() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about">
            <div className="banner-area">
                <h2>{t("whoWeAre")} ?</h2>
            </div>

            <div className="wrapper">
                <h2>Hakkımızda</h2>

                <p>
                    Pomza Export A.Ş., madencilik sektöründe tamamen yerli
                    sermaye kurulmuş, köklü bir şirket olarak 50 yıldan fazla
                    süredir faaliyet göstermektedir. Sürdürülebilirlik ilkesiyle
                    hareket eden firmamız, 2007 yılında Türkiye'ye daha fazla
                    katma değer sağlamak amacıyla, "sıfır-deşarj" üretim
                    modelini benimseyerek eile Pomex Yapı Kimyasalları şirketini
                    kurmuştur. Bu sayede, kendi madenlerinde üretilen perlit,
                    kuvars, korund gibi agregaları yapı ürünlerinde kullanarak
                    kaliteli, sürdürülebilir ve yenilikçi çözümleri pazara
                    sunmuştur.
                </p>
                <p>
                    Müşteri memnuniyetini en üst düzeyde tutarak, ulusal ve
                    uluslararası kalite standartlarına uygun şekilde hareket
                    etmek temel önceliğimizdir. Tüm çalışanlarımızın sürekli
                    mesleki alanda bilgilendirilmesi ve gelişimlerinin
                    desteklenmesi, iş sağlığı ve iş güvenliği bilincinin en üst
                    seviyede olması için en yüksek profesyonel standartlara
                    uygun eğitimler verilmektedir. Bu şekilde, çalışanlarımızın
                    iş güvenliği konusundaki bilincini artırarak daha güvenli
                    bir çalışma ortamı sağlamayı hedefliyoruz.
                </p>
                <p>
                    Ayrıca, hataları önceden önlemek ve tekrarlanmasını
                    engellemek için doğaya ve insana saygı çerçevesinde sürekli
                    iyileştirmeler yaparak yönetim sistemimizi geliştirmekteyiz.
                </p>
                <p>
                    Tüm yasa ve mevzuatlara uygun olarak faaliyet göstermek ve
                    en doğru şekilde çalışmak da işimizin ayrılmaz bir
                    parçasıdır. Müşteri memnuniyeti, sürdürülebilirlik, kalite,
                    güvenlik ve yasal uyumluluk alanlarında en üst düzeyde
                    performans sergileyerek çalışanlarımıza, müşterilerimize ve
                    topluma karşı sorumluluklarımızı yerine getiriyoruz.
                </p>

                <h2>Misyonumuz</h2>

                <p>
                    Genç, dinamik mühendis kadromuzla müşteri ihtiyaç ve
                    beklentilerini en iyi şekilde anlayarak, iş etiği ve ahlak
                    kurallarına uygun, sürdürülebilir ve kaliteli üretim
                    sağlamaktır.
                </p>

                <h2>Vizyonumuz</h2>

                <p>
                    Sektörde yılların güvenini kazanmış bir firma olarak,
                    kendimizi sürekli geliştirip firmamızın ulusal ve
                    uluslararası pazardaki etkinliğini ve verimliliğini
                    artırmak; Türkiye'nin inovasyon ve çevrecilik prensipleriyle
                    hareket eden saygın bir kuruluşu olmaktır.
                </p>
            </div>

            {/*<div className="info-container">
                <div className="content">
                    <div className="imgContainer">
                        <img src="/assets/pages/concept.jpg" />
                    </div>
                    <div className="textContainer">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum, temporibus.
                        </h2>
                    </div>
                </div>
            </div>*/}
        </div>
    );
}

export default About;
