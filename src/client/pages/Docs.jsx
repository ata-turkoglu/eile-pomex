import React, { useLayoutEffect } from "react";
import { Accordion } from "react-bootstrap";
import "./css/docsPage.scss";
// import Button from "../components/button/button"

function Docs() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        let overlay = document.createElement("span");
        overlay.classList.add("overlay");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px";

        e.target.appendChild(overlay);

        setTimeout(() => {
            window.open(e.target.href);
            overlay.remove();
        }, 500);
    };

    return (
        <div className="docs">
            <div className="container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h5>Firma Belgeleri</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>Eile Pomex Firmamıza Ait Belgeler</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="assets/docs/firma belgesi.pdf"
                                            target="_blank"
                                            onClick={handleClick}
                                        >
                                            ISO 9001
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h5>Kimyasal Dübel Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile EPOX</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h5>
                                Çimento Esaslı Onarım Güçlendirme Belgelerimiz
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile GROUT 50C</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile GROUT 60C</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile GROUT TH60</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile GROUT TH70</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/EİLE TH 70 TSE.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile AK 8</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>Pomex Brüt Beton Tamir Harcı</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/eile brüt beton sıva.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <h5>
                                Epoksi Esaslı Onarım Güçlendirme Belgelerimiz
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile EPX 100</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile EPX 240</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <h5>Çimento Esaslı Su Yalıtım Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile A SEAL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile MAX SEAL ELASTİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile MAX SEAL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>KAPİLER</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>Water Bond</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            <h5>Akrilik Esaslı Su Yalıtımı Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile LİKİT AKRİLİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE EİLE LİKİT AKRİLİK.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>
                            <h5>Bitum Esaslı Su Yalıtımı Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>elie BİTU-ÇİM ELASTİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_bitucim_per_bey_rap.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>
                            <h5>
                                Çimento Esaslı Zemin Sistemleri Belgelerimiz
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>elie TOP 110 S</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile top 110 s.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EİLE TOP 110 S-EİLE KROUND 120 F.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>elie KORUND 120 F</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile korund 120 f.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EİLE TOP 110 S-EİLE KROUND 120 F.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX ZEMİN YÜZEY SERTLEŞTİRİCİ</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex zemin yüzey sertleştiricisi.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX ZEMİN YÜZEY SERTLEŞTİRİCİSİ.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>EİLE LEVEL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_level.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EİLE LEVEL.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>
                            <h5>Isı Yalıtım Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>THERMOMEX ISI YALITIM SIVASI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex thermomex.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN SIVA-İNCE SIVA.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button three"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN SIVA-İNCE SIVA.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>THERMOMEX ISI YALITIM ŞAPI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex thermomex.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile PLY 2100</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EİLE PLY 2100.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile PLS 2000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN SIVA-İNCE SIVA.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>
                            <h5>Sıva Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile GBS 5000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/CE_eile gbs 5000.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>DS 40</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex ds 40.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>SON KAT ELYAFLI SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile son kat elyaflı sıva.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>İNCE SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex ince sıva.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN SIVA-İNCE SIVA.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>KALIN SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex kalın sıva.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN SIVA-İNCE SIVA.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX SATEN SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex saten sıva.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                        <Accordion.Header>
                            <h5>Çimento Esaslı Yapıştırıcı Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile SPY 1000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_SYP 1000 BELGESİ.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EİLE SYP 1000.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX SERAMİK YAPIŞTIRICI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_POMEX SERAMİK BELGESİ111.pdf"
                                            onClick={handleClick}
                                        >
                                            CE
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX SERAMİK YAPIŞTIRICISI.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX GRANİT YAPIŞTIRICI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX GRANİT YAPIŞTIRICISI.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                        <Accordion.Header>
                            <h5>Çimento Esaslı Derz Dolgu Belgelerimiz</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>POMEX DERZ DOLGU</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX DERZ DOLGU.pdf"
                                            onClick={handleClick}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Docs;
