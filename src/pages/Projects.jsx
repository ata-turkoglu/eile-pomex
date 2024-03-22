import React, { useLayoutEffect } from "react";
import "./css/projectsPage.scss";
import projects from "../data/projects.json";
import ProjectCard from "../components/projectsGroup/projectCard.jsx";

function Projects() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="projects">
            <div className="projectsContainer">
                {projects.map((item, index) => {
                    return <ProjectCard key={index} project={item} />;
                })}
            </div>
        </div>
    );
}

export default Projects;
