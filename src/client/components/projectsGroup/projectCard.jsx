import React from "react";
import "./projectCard.scss";

function ProjectCard({ project }) {
    return (
        <div className="projectCard">
            <div className="imgContainer">
                <img className="img1" src={project.image1} />
                <img className="img2" src={project.image2} />
            </div>
            <div className="textContainer">
                <h5>{project.name}</h5>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
