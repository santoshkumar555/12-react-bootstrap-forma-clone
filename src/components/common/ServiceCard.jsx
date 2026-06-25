import Card from "react-bootstrap/Card";
import { CardHeader } from "react-bootstrap";

import { FaArrowRight } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

import classes from "../services/Services.module.css";

function ServiceCard({ icon: Icon, title, desc, features }) {
    const cardClass = classes.card;
    const headerClass = classes.header;
    const iconWrapClass = classes.iconWrap;

    const bodyClass = classes.body;
    const titleClass = classes.title;
    const descClass = classes.desc;

    const featuresListClass = classes.featuresList;
    const featureItemClass = classes.featureItem;
    const checkIconClass = classes.checkIcon;
    const featureTextClass = classes.featureText;

    const exploreBtnClass = classes.exploreBtn;
    const arrowClass = classes.arrow;

    return (
        <Card bg="dark" text="white" className={cardClass}>
            <CardHeader className={headerClass}>
                <div className={iconWrapClass}>{Icon ? <Icon /> : null}</div>
            </CardHeader>

            <Card.Body className={bodyClass}>
                <Card.Title as="h3" className={titleClass}>
                    {title}
                </Card.Title>

                <Card.Text className={descClass}>{desc}</Card.Text>

                <ul className={featuresListClass}>
                    {features.map((el, index) => (
                        <li key={index} className={featureItemClass}>
                            <CiCircleCheck className={checkIconClass} />
                            <span className={featureTextClass}>{el}</span>
                        </li>
                    ))}
                </ul>

                <a href="" className={exploreBtnClass}>
                    <span>Explore Service</span>
                    <span className={arrowClass}>
                        <FaArrowRight />
                    </span>
                </a>
            </Card.Body>
        </Card>
    );
}

export default ServiceCard;
