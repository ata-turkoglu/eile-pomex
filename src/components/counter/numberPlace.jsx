import { useLayoutEffect, useState } from "react";
import "./numberPlace.scss";

function numberPlace({ number, index }) {
    useLayoutEffect(() => {
        const el = document.getElementById(`placeContainer-${index}`);
        let placeHeight =
            document.getElementsByClassName("placeNumber")[0].clientHeight;
        el.scrollBy(0, number * placeHeight);
    }, []);
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
