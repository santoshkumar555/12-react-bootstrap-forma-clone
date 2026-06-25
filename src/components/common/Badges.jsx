import Badge from "react-bootstrap/Badge";

const Badges = ({ text = "", up = true }) => {
    const badgeStyle = {
        backgroundColor:
            "color-mix(in srgb, rgb(32, 139, 244) 2%, transparent)",
        color: "#208bf4",
    };

    const caseClass = up ? "text-uppercase" : "text-capitalize";
    const baseBadgeClass = "rounded-pill px-3 py-2 bg-opacity-25";
    const badgeClass = `${baseBadgeClass} ${caseClass}`;

    return (
        <Badge style={badgeStyle} className={badgeClass}>
            <span>{text}</span>
        </Badge>
    );
};

export default Badges;
