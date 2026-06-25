import BadgePill from "./BadgePill";

const SectionHeader = ({ btn, white = "white", blue = "blue" }) => {
    const wrapperClass = "text-center";
    const titleClass = "mt-3 fw-bold text-capitalize"; 
    const blueTextStyle = { color: "#208bf4" };

    return (
        <div className={wrapperClass}>
            <BadgePill>{btn}</BadgePill>
            <h2 className={titleClass}>
                {white} <span style={blueTextStyle}>{blue}</span>
            </h2>
        </div>
    );
};

export default SectionHeader;
