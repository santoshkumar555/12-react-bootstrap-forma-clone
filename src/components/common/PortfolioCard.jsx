import { useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowsFullscreen } from "react-icons/bs";

const PortfolioCard = ({
    img,
    category,
    year,
    title,
    desc,
    tags,
    linkText,
    onImageClick,
}) => {
    const [hovered, setHovered] = useState(false);

    const cardClass = "h-100 border border-secondary border-opacity-25 rounded-4 overflow-hidden mt-5";
    const imgWrapClass = "position-relative";
    const overlayClass = "position-absolute top-0 start-0 w-100 h-100 d-grid";
    const overlayIconClass = "d-grid text-white";
    const bodyClass = "d-flex flex-column";
    const subtitleClass = "mb-2 d-flex justify-content-between text-primary";
    const yearClass = "text-white text-opacity-50";
    const titleClass = "text-white fw-semibold";
    const descClass = "text-white text-opacity-75 small";
    const tagsClass = "list-group-horizontal flex-wrap gap-2 mb-3";
    const tagItemClass = "bg-dark text-primary border border-secondary border-opacity-25 rounded-3 px-2 py-1 w-auto small";
    const linkClass = "text-white text-decoration-none fw-semibold mt-auto d-inline-flex align-items-center gap-2";

    const imgWrapStyle = { cursor: "pointer" };

    const overlayStyle = {
        inset: 0,
        background: "rgba(13, 110, 253, 0.45)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        placeItems: "center",
    };

    const overlayIconStyle = {
        width: 56,
        height: 56,
        borderRadius: 12,
        background: "rgba(13, 110, 253, 0.95)",
        placeItems: "center",
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <Card
            bg="dark"
            className={cardClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={imgWrapClass} style={imgWrapStyle}>
                <Card.Img variant="top" src={img} onClick={onImageClick} />

                <div
                    className={overlayClass}
                    style={overlayStyle}
                    onClick={onImageClick}
                    role="button"
                    aria-label="Open image"
                >
                    <div className={overlayIconClass} style={overlayIconStyle}>
                        <BsArrowsFullscreen size={22} />
                    </div>
                </div>
            </div>

            <Card.Body className={bodyClass}>
                <Card.Subtitle className={subtitleClass}>
                    {category}
                    <span className={yearClass}>{year}</span>
                </Card.Subtitle>

                <Card.Title className={titleClass}>{title}</Card.Title>
                <Card.Text className={descClass}>{desc}</Card.Text>

                <ListGroup className={tagsClass}>
                    {tags.map((item, index) => (
                        <ListGroup.Item key={index} className={tagItemClass}>
                            {item}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <a href="#" className={linkClass}>
                    {linkText}
                    <FaArrowRightLong />
                </a>
            </Card.Body>
        </Card>
    );
};

export default PortfolioCard;
