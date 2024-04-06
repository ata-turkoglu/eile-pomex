import { useLayoutEffect, useState } from "react";
import "./numberPlace.scss";

function numberPlace({ number, index, timeout, intvlValue }) {
    useLayoutEffect(() => {
        const el = document.getElementById(`placeContainer-${index}`);
        let placeHeight =
            document.getElementsByClassName("placeNumber")[0].clientHeight;
        setTimeout(() => {
            countNumber(el, number, placeHeight);
        }, timeout);
    }, []);

    const countNumber = (el, number, placeHeight) => {
        let count = 0;
        const intrvl = setInterval(() => {
            el.style.transform = `translateY(-${++count * placeHeight}px)`;
            if (count >= number) {
                clearInterval(intrvl);
            }
        }, intvlValue);
    };

    return (
        <div id={`placeContainer-${index}`} className="placeContainer">
            <span className="placeNumber">0</span>
            <span className="placeNumber">1</span>
            <span className="placeNumber">2</span>
            <span className="placeNumber">3</span>
            <span className="placeNumber">4</span>
            <span className="placeNumber">5</span>
            <span className="placeNumber">6</span>
            <span className="placeNumber">7</span>
            <span className="placeNumber">8</span>
            <span className="placeNumber">9</span>
        </div>
    );
}

export default numberPlace;
