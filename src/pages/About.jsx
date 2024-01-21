import React, { useLayoutEffect } from "react";
import "./css/aboutPage.scss";

function About() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="about">
            <h1>About Page</h1>
        </div>
    );
}

export default About;
