const BadgePill = ({ children = "Some Text Here", up = true }) => {

    const btnStyle = {
        background: "rgba(32,138,244,0.24)",
        color: "#208bf4",
        fontSize: "14px",
    };
    const caseClass = up ? "text-uppercase" : "text-capitalize";
    const baseBtnClass = "fw-bold mt-3 px-3 py-1 border-0 rounded-pill";
    const btnClass = `${caseClass} ${baseBtnClass}`;

    return (
        <button style={btnStyle} className={btnClass}>
            {children}
        </button>
    );
};

export default BadgePill;
