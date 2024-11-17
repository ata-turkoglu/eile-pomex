import { useEffect } from "react";

export default function DownloadCatalogEn() {
    useEffect(() => {
        let pdfUrl = "/assets/catalogs/eile_catalog_en.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "eile_catalog.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span>Downloading Catalog ...</span>
        </div>
    );
}
