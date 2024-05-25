import React, { useState, useEffect } from "react";
import "./projectSamplesSection.scss";
import { useNavigate } from "react-router-dom";

function ProjectSampleCard({ image1, image2, text, icon, product }) {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    }, []);
    return (
        <div className="groupCard">
            {/*<div className="groupIcon">
                <img src={icon} />
            </div>*/}
            <div
                className="imgContainer"
                onClick={() => {
                    !mobile && navigate("/product-details/" + product);
                }}
            >
                <img className="img1" src={image1} />
                <img
                    className="img2"
                    src={image2}
                    onClick={() => {
                        mobile && navigate("/product-details/" + product);
                    }}
                />
            </div>
            <div className="textContainer">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProjectSampleCard;
