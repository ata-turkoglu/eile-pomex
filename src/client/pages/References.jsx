import React, { useLayoutEffect } from "react";
import "./css/referencesPage.scss";
import refData from "../../data/references.json";
import RefRow from "../components/refRow.jsx";

function References() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="references">
            <div className="listContainer">
                {refData.map((item) => {
                    return (
                        <RefRow
                            key={item.id}
                            logo={item.logo}
                            text={item.text}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default References;
