import Card from "react-bootstrap/Card";

import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

import classes from "../team/Team.module.css";

const TeamCard = ({ name, role, description, image }) => {
    const wrapperClass = "px-1";

    const teamsClass = "Teams";
    const cardClass = `${teamsClass} ${classes.teamCard} overflow-hidden`;

    const imgWrapClass = classes.imgWrap;
    const cardImgClass = "rounded-top";

    const socialIconsClass = classes.socialIcons;
    const iconClass = classes.icon;

    const titleClass = `${teamsClass} text-white`;
    const roleClass = `${teamsClass} text-primary mb-3`;
    const descClass = `${teamsClass} ${classes.teamDesc}`;

    return (
        <div className={wrapperClass}>
            <Card className={cardClass}>
                <div className={imgWrapClass}>
                    <Card.Img className={cardImgClass} variant="top" src={image} />

                    <div className={socialIconsClass}>
                        <span className={iconClass}>
                            <RiTwitterXFill size={18} />
                        </span>
                        <span className={iconClass}>
                            <FaFacebook size={18} />
                        </span>
                        <span className={iconClass}>
                            <RxInstagramLogo size={18} />
                        </span>
                        <span className={iconClass}>
                            <RxLinkedinLogo size={18} />
                        </span>
                    </div>
                </div>

                <Card.Body>
                    <Card.Title className={titleClass}>{name}</Card.Title>
                    <Card.Text className={roleClass}>{role}</Card.Text>
                    <Card.Text className={descClass}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCard;
