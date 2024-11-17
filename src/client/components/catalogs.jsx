import React, { useState } from "react";
import "./catalogs.scss";
import { translateText as t } from "../../store/reducers/language";
import Button from "react-bootstrap/Button";
import { BookOpen } from "lucide-react";

export default function Catalogs() {
    const [selectedLang, setSelectedLang] = useState("");

    const downloadCatalog = () => {
        let pdfUrl = "";
        if (selectedLang == "tr") {
            pdfUrl = "/assets/catalogs/eile_katalog_tr.pdf";
        } else if (selectedLang == "en") {
            pdfUrl = "/assets/catalogs/eile_catalog_en.pdf";
        }
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "eile_catalog.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="catalogs">
            <h3 className="mb-4">{t("youCanDownloadOurDigitalCatalogHere")}</h3>
            <div className="downloadPart">
                <select
                    className="form-select form-select-sm"
                    style={{
                        outline: "none !important",
                        boxShadow: "none",
                        width: "150px",
                    }}
                    aria-label=".form-select-sm example"
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                >
                    <option value="">{t("selectLanguage")}</option>
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                </select>
                <Button
                    variant="light"
                    disabled={selectedLang == ""}
                    onClick={downloadCatalog}
                >
                    {t("download")}
                </Button>
                <BookOpen size={50} color="rgb(1,90,170)" />
            </div>
        </div>
    );
}
