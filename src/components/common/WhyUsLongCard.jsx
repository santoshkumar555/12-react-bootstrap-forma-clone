import Card from "react-bootstrap/Card";
import classes from "../why-us/WhyUs.module.css";

const WhyUsLongCard = ({ num, children, desc }) => {
    const cardClass = `${classes.longcard} mt-2 p-0 rounded-3`;
    const bodyClass = "d-flex align-items-start gap-4";

    const numBoxClass = "bg-primary text-white fw-bold d-flex align-items-center justify-content-center rounded";
    const titleClass = "text-white fw-semibold";
    const descClass = "text-white text-opacity-75";

    const numBoxStyle = { height: "3rem", width: "3rem", fontSize: "1.6rem", };

    return (
        <Card bg="dark" className={cardClass}>
            <Card.Body className={bodyClass}>
                <div className={numBoxClass} style={numBoxStyle}>
                    {num}
                </div>

                <div>
                    <h6 className={titleClass}>{children}</h6>
                    <p className={descClass}>{desc}</p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default WhyUsLongCard;
