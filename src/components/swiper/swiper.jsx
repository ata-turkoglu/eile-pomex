import "./swiper.css";
import { useEffect, useState } from "react";

function Swiper({ children, gap }) {
    const [mobile, setMobile] = useState(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseUp, setMouseUp] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [startX, setStartX] = useState(null);
    const [scroll, setScroll] = useState(null);
    const [moveState, setMoveState] = useState(true);

    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
        setWrapperPadding();

        if (mobile) {
            window.addEventListener("touchstart", handleMouseDown);
            window.addEventListener("touchend", handleMouseUp);
        } else {
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchstart", handleMouseDown);
            window.removeEventListener("touchend", handleMouseUp);
        };
    });

    const setWrapperPadding = () => {
        const swiper = document.getElementById("swiper");
        setSwiper(swiper);
        const wrappers = document.getElementsByClassName("wrapper");
        const outerWidth = swiper.clientWidth;
        const padding = (outerWidth - wrappers[0].clientWidth) / 4;
        setScroll(outerWidth - padding * 2);
        for (let i = 0; i < wrappers.length; i++) {
            wrappers[i].style.marginInline = padding + "px";
        }
    };

    const handleMouseDown = (e) => {
        if (mobile) {
            setStartX(e.changedTouches[0].clientX);
        }
        setMouseDown(true);
        setMouseUp(false);
    };
    const handleMouseUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
    };
    const handleMouseMove = (e) => {
        if (mouseDown && !mouseUp) {
            if (mobile) {
                if (e?.changedTouches) {
                    const touchMove = e.changedTouches[0].clientX - startX;
                    setStartX(e.changedTouches[0].clientX);
                    if (moveState) {
                        setMoveState(false);
                        setTimeout(() => {
                            setMoveState(true);
                        }, 500);
                        if (touchMove < -3) {
                            swiper.scrollLeft = swiper.scrollLeft + scroll;
                        } else if (touchMove > 3) {
                            swiper.scrollLeft = swiper.scrollLeft - scroll;
                        }
                    }
                }
            } else {
            }
        }
    };

    return (
        <div id="swiper" style={gap && { gap }} onTouchMove={handleMouseMove}>
            {children.map((item, index) => (
                <div
                    key={index}
                    className="wrapper"
                    onMouseMove={handleMouseMove}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Swiper;
