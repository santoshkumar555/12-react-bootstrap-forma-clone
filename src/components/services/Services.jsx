import { useState } from "react";

import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

import ServiceCard from "../common/ServiceCard.jsx";
import WideCard from "../common/WideCard.jsx";

import servicesData from "./services.data.js";
import classes from "./Services.module.css";

const ServiceHoverWrap = ({ children }) => {
    const [hovered, setHovered] = useState(false);
    const wrapClass = `${classes.serviceHoverWrap} ${hovered ? classes.hovered : ""}`;

    return (
        <div
            className={wrapClass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    );
};

const Services = () => {
    const pageClass = "mt-5 px-3 px-md-0";

    const textCenterClass = "text-center";

    const badgeClass = "mt-3 mb-3 px-4 py-2";
    const badgeTextClass = "text-primary fw-bold";

    const titleClass = "fw-bold display-6 mb-5 fs-2";
    const titleHighlightClass = "text-primary";

    const headerRowClass = "align-items-center justify-content-between mt-3";
    const leftColClass = "me-lg-5";
    const headingClass = "head-font";

    const viewAllBtnClass = "btn text-primary fw-bold fs-6";
    const viewAllInnerClass = "d-inline-flex align-items-center w-auto";

    const cardsRowClass = "mt-5 pb-5";
    const cardColClass = "mb-4";

    const badgeTextStyle = { letterSpacing: "1px" };

    const popularPillClass = classes.popularPill;

    return (
        <Container className={pageClass}>
            <div className={textCenterClass}>
                <Badge pill bg="dark" className={badgeClass}>
                    <span className={badgeTextClass} style={badgeTextStyle}>
                        SERVICES
                    </span>
                </Badge>

                <h3 className={titleClass}>
                    Check Our <span className={titleHighlightClass}>Services</span>
                </h3>
            </div>

            <Row className={headerRowClass}>
                <Col lg={6} className={leftColClass}>
                    <h2 className={headingClass}>Comprehensive Digital Solutions</h2>
                    <p>
                        We deliver end-to-end digital services that drive growth, enhance user
                        experience, and transform your business vision into reality.
                    </p>
                </Col>

                <Col lg="auto">
                    <a href="" className={viewAllBtnClass}>
                        <span className={viewAllInnerClass}>
                            View All Services <FaArrowRight />
                        </span>
                    </a>
                </Col>
            </Row>

            <Row className={cardsRowClass}>
                {servicesData.map((el, index) => {
                    const isPopular = el.popular || el.tag === "Popular";

                    return (
                        <Col key={index} xs={12} md={6} lg={4} className={cardColClass}>
                            <ServiceHoverWrap>
                                {isPopular && <span className={popularPillClass}>POPULAR</span>}

                                <ServiceCard
                                    icon={el.icon}
                                    title={el.title}
                                    desc={el.description}
                                    features={el.features}
                                />
                            </ServiceHoverWrap>
                        </Col>
                    );
                })}
            </Row>

            <WideCard
                badgeText="READY TO START ?"
                title="Transform Your Digital Presence Today"
                desc="Partner with us to create innovative solutions that drive real business results. Let's build something extraordinary together."
                btnIcon={<FaArrowRightLong />}
                btnText="Get Started"
                secondBtn="Schedule Consultation"
            />
        </Container>
    );
};

export default Services;
