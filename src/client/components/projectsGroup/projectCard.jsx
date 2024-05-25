import React from "react";
import "./projectCard.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProjectCard({ project }) {
    const navigate = useNavigate();
    const lang = useSelector((state) => state.language.lang);
    return (
        <div className="projectCard">
            <div className="imgContainer">
                <img className="img1" src={project.image1} />
                <img
                    className="img2"
                    src={project.image2}
                    onClick={() =>
                        navigate("/product-details/" + project.product)
                    }
                />
            </div>
            <div className="textContainer">
                <h5>{project.name[lang]}</h5>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
