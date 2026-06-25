import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge } from "react-bootstrap";

import Slider from "react-slick";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

import TeamCard from "../common/TeamCard";
import teamData from "./team.data.js";

import classes from "./Team.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arrowBaseStyle = {
    position: "absolute",
    top: "-70px",
    zIndex: 10,
    cursor: "pointer",
    transition: "filter 200ms ease, transform 200ms ease",
};

const arrowHoverStyle = {
    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9)) blur(0.3px)",
    transform: "scale(1.06)",
};

const PrevArrow = ({ onClick }) => {
    const [isHover, setIsHover] = useState(false);

    const prevArrowStyle = {
        ...arrowBaseStyle,
        right: "70px",
        ...(isHover ? arrowHoverStyle : {}),
    };

    const arrowColor = isHover ? "white" : "blue";

    return (
        <SlArrowLeftCircle
            size={40}
            color={arrowColor}
            style={prevArrowStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        />
    );
};

const NextArrow = ({ onClick }) => {
    const [isHover, setIsHover] = useState(false);

    const nextArrowStyle = {
        ...arrowBaseStyle,
        right: "10px",
        ...(isHover ? arrowHoverStyle : {}),
    };

    const arrowColor = isHover ? "white" : "blue";

    return (
        <SlArrowRightCircle
            size={40}
            color={arrowColor}
            style={nextArrowStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        />
    );
};

const Team = () => {
    const mainClass = classes.main;
    const centerRowClass = "justify-content-center";
    const badgeClass = "mt-3 mb-lg-3 p-2";
    const badgeTextClass = "text-primary fs-6 m-2";

    const titleRowClass = "justify-content-center mt-2";
    const teamTitleClass = `Teams ${classes.teamP1} fs-2 mb-5 text-white text-center`;
    const teamTitleSpanClass = `Teams ${classes.teamP1}`;

    const subTitleClass = `Teams ${classes.teamP2} fs-2 mb-2 text-white`;
    const borderLineClass = `Teams border-bottom border-primary border-4 ${classes.border1}`;
    const paraClass = `Teams ${classes.teamP4} mt-3 fs-6 w-50`;

    const sectionClass = classes.section;

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false, // ✅ no peeking
                    infinite: true,
                    arrows: true, // set false if you want hide
                },
            },
        ],
    };

    return (
        <div className={mainClass}>
            <Container>
                <Row className={centerRowClass}>
                    <Col xs="auto">
                        <Badge pill bg="dark" className={badgeClass}>
                            <span className={badgeTextClass}>Team</span>
                        </Badge>
                    </Col>
                </Row>

                <Row className={titleRowClass}>
                    <Col xs={12}>
                        <h1 className={teamTitleClass}>
                            Check Our <span className={teamTitleSpanClass}>Team</span>
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col md={10}>
                        <h1 className={subTitleClass}>Our Professional Team</h1>
                        <div className={borderLineClass} />
                        <p className={paraClass}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
                        </p>
                    </Col>
                </Row>
            </Container>

            <section className={sectionClass}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Slider {...settings}>
                                {teamData.map((elem, index) => (
                                    <TeamCard
                                        key={index}
                                        name={elem.name}
                                        role={elem.role}
                                        description={elem.description}
                                        image={elem.image}
                                    />
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Team;
