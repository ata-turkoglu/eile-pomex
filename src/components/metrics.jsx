import React from "react";
import "./metrics.scss";

import { BrickWall, PackageSearch, MapPinned, Settings } from "lucide-react";

function Metrics() {
    return (
        <div className="metrics">
            <div className="metricContainer">
                <BrickWall size={90} strokeWidth={1} className="metricIcon" />
                <p className="metricCount">2834</p>
                <p>Proje Tamamlandı</p>
            </div>
            <div className="metricContainer">
                <PackageSearch
                    size={90}
                    strokeWidth={1}
                    className="metricIcon"
                />
                <p className="metricCount">239</p>
                <p>Ürün Çeşidi</p>
            </div>
            <div className="metricContainer">
                <MapPinned size={90} strokeWidth={1} className="metricIcon" />
                <p className="metricCount">43</p>
                <p>Bayilik</p>
            </div>
            <div className="metricContainer">
                <Settings size={90} strokeWidth={1} className="metricIcon" />
                <p className="metricCount">36</p>
                <p>Hammadde Üretimi</p>
            </div>
        </div>
    );
}

export default Metrics;
