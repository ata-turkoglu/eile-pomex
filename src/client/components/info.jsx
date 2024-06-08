import React from "react";
import "./info.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Info({
    image,
    header,
    text,
    to,
    bg,
    textColor,
    headerInside = false,
}) {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    }, []);
    return (
        <div className="infoContainer">
            {(!headerInside || !mobile) && <h2>{header}</h2>}
            <div className="content" style={{ color: textColor }}>
                {headerInside && mobile && <h2>{header}</h2>}
                <div className="imgContainer">
                    <img src={image} onClick={() => navigate(to)} />
                </div>
                <div className="textContainer">
                    <p>{text}</p>
                </div>
                {bg && (
                    <div className="content-bg">
                        <img src={bg} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Info;
