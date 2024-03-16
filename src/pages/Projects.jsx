import React, { useLayoutEffect } from "react";
import "./css/projectsPage.scss";

function Projects() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="projects">
            <h1>Projects Page</h1>
        </div>
    );
}

export default Projects;
