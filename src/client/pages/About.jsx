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
                <h2>{t("about")}</h2>

                <p>{t("about1")}</p>
                <p>{t("about2")}</p>
                <p>{t("about3")}</p>
                <p>{t("about4")}</p>

                <h2>{t("ourMission")}</h2>

                <p>{t("ourMission1")}</p>

                <h2>{t("ourVision")}</h2>

                <p>{t("ourVision1")}</p>
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
