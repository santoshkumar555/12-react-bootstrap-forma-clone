/* eslint-disable no-unused-vars */
import Card from "react-bootstrap/Card";

import { FaArrowRightLong } from "react-icons/fa6";

import classes from "../why-us/WhyUs.module.css";

function WhyUsCard({ icon: Icon, children, desc, linkText, active = false }) {
    const baseCardClass = "align-start h-100 p-2";
    const stateCardClass = active ? classes.active : classes.card;
    const cardClass = `${stateCardClass} ${baseCardClass}`;

    const iconWrapClass = "p-2 bg-primary d-flex align-items-center justify-content-center text-white fw-semibold ms-3 mt-2 rounded";
    const titleClass = "text-white fw-bold text-capitalize mb-4";
    const descClass = "text-white text-opacity-75 text-start mb-3";
    const linkClass = "text-decoration-none mt-auto text-capitalize d-inline-flex align-items-center gap-2";

    const iconWrapStyle = { height: "2.5rem", width: "2.5rem", fontSize: "2rem" };

    return (
        <Card className={cardClass} bg="dark">
            <div className={iconWrapClass} style={iconWrapStyle}>
                <Icon />
            </div>

            <Card.Body>
                <Card.Title className={titleClass} as="h4">
                    {children}
                </Card.Title>

                <Card.Text className={descClass}>{desc}</Card.Text>

                <Card.Link href="#" className={linkClass}>
                    {linkText} <FaArrowRightLong />
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default WhyUsCard;
