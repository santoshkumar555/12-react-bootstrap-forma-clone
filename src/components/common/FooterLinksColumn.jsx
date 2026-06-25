import classes from "../footer/Footer.module.css";

const FooterLinksColumn = ({ title, arr }) => {
    const listClass = "list-unstyled";
    const itemClass = "pt-2";
    const linkClass = "text-decoration-none text-white text-opacity-50 p-0";
    const hoverSpanClass = classes.elementHover;

    return (
        <div>
            <h5>{title}</h5>
            <ul className={listClass}>
                {arr.map((el, i) => (
                    <li key={i} className={itemClass}>
                        <a href="#" className={linkClass}>
                            <span className={hoverSpanClass}>{el}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinksColumn;
