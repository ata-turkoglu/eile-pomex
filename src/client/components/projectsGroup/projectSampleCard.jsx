import React from "react";
import "./projectSamplesSection.scss";

function ProjectSampleCard({ image1, image2, text, icon }) {
    return (
        <div className="groupCard">
            {/*<div className="groupIcon">
                <img src={icon} />
            </div>*/}
            <div className="imgContainer">
                <img className="img1" src={image1} />
                <img className="img2" src={image2} />
            </div>
            <div className="textContainer">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProjectSampleCard;
