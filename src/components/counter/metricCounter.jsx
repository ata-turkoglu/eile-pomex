import { useEffect, useState } from "react";
import "./metricCounter.scss";
import NumberPlace from "./numberPlace";

function metricCounter({ number, index }) {
    const [numberArray, setNumberArray] = useState([]);
    const [counters, setCounters] = useState(false);
    useEffect(() => {
        const arr = number.toString().split("");
        setNumberArray(arr);
    }, []);

    useEffect(() => {
        numberArray.length > 0 && setArray();
    }, [numberArray]);

    const setArray = () => {
        let arr = numberArray.map((itm, indx) => (
            <NumberPlace
                key={indx}
                index={index + "-" + indx}
                number={Number(itm)}
            />
        ));
        setCounters(arr);
    };

    return <div className="counterContainer">{counters}</div>;
}

export default metricCounter;
