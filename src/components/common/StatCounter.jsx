import CountUp from "react-countup";

const StatCounter = ({ start = 0, end, text, cap = true, suffix = "" }) => {
    const wrapperClass = "col d-flex flex-column align-items-center text-center";
    const countClass = "text-primary fw-bold fs-1 fs-md-2";
    const caseClass = cap ? "text-capitalize" : "";
    const textBaseClass = "text-white text-opacity-75 fw-light mb-0 fs-6 fs-md-6";
    const textClass = `${caseClass} ${textBaseClass}`.trim();

    const textStyle = { fontSize: "0.95rem" };

    return (
        <div className={wrapperClass}>
            <CountUp
                start={start}
                end={end}
                duration={2}
                suffix={suffix}
                className={countClass}
            />

            <p className={textClass} style={textStyle}>
                {text}
            </p>
        </div>
    );
};

export default StatCounter;
