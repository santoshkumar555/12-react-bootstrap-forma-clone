import classes from "../footer/Footer.module.css";

const SocialIconLink = ({ props }) => {
    const socialClass = classes.social;
    const hoverClass = classes.elementHover;
    const baseClass = "border border-white rounded-circle px-2 pb-1 fs-5";
    const wrapperClass = `${socialClass} ${hoverClass} ${baseClass}`;

    return <div className={wrapperClass}>{props}</div>;
};

export default SocialIconLink;
