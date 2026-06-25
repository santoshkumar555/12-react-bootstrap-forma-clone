const FeatureCard = ({ icon, text, label }) => {
    const wrapperClass = "d-flex align-items-center p-2";
    const iconWrapClass = "px-2 py-2 text-primary fs-2 bg-dark bg-opacity-50";
    const contentClass = "ms-5";
    const titleClass = "text-start";
    const labelClass = "text-start";

    return (
        <div className={wrapperClass}>
            <div className={iconWrapClass}>{icon}</div>

            <div className={contentClass}>
                <h4 className={titleClass}>{text}</h4>
                <p className={labelClass}>{label}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
