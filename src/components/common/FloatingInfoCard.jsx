import classes from "../home/Home.module.css";

const FloatingInfoCard = ({ icon: Icon, value, label, positionClass, className = "", }) => {
    const cardClass = `${classes.floatCard} ${positionClass} ${className}`;
    const iconBoxClass = classes.iconBox;
    const contentClass = "text-start";
    const bigTextClass = classes.bigText;
    const smallTextClass = classes.smallText;

    return (
        <div className={cardClass}>
            <div className={iconBoxClass}>{Icon ? <Icon /> : null}</div>
            <div className={contentClass}>
                <div className={bigTextClass}>{value}</div>
                <div className={smallTextClass}>{label}</div>
            </div>
        </div>
    );
};

export default FloatingInfoCard;
