import CountUp from "react-countup";

const NumberDisplay = ({ start, end, text, cap = true }) => {
    const wrapperClass = "d-flex col align-self-start flex-column align-items-center";
    const countClass = "text-primary fw-bold";
    const textCaseClass = cap ? "text-capitalize" : "";
    const textBaseClass = "text-white text-opacity-75 fw-light";
    const textClass = `${textCaseClass} ${textBaseClass}`.trim();
    const countStyle = { fontSize: "2.7rem" };

    return (
        <div className={wrapperClass}>
            <CountUp
                start={start}
                end={end}
                duration={2}
                className={countClass}
                style={countStyle}
            />
            <p className={textClass}>{text}</p>
        </div>
    );
};

export default NumberDisplay;
