import { Container, Row, Col, Badge } from "react-bootstrap";

import { BsStars } from "react-icons/bs";
import { FaLongArrowAltRight, FaRegPlayCircle } from "react-icons/fa";
import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

import FloatingInfoCard from "../common/FloatingInfoCard";

import classes from "./Home.module.css";

const Home = () => {
    const wrapperClass = `container-fluid ${classes.divHeight} pb-5`;
    const containerClass = "pt-5";
    const rowClass = "align-items-center justify-content-between";

    const leftColClass = "d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start";

    const badgeClass = "mb-lg-3";
    const starsIconClass = "text-danger";
    const badgeTextClass = "text-primary fs-6 m-2";

    const headingClass = `${classes.homeHead} m-0 mb-5 mb-lg-3`;
    const descClass = `${classes.desc} text-white text-opacity-75 mb-5 mb-lg-4`;

    const primaryBtnClass = "btn btn-primary fw-bold p-3 me-2";
    const primaryBtnTextClass = "me-2";

    const darkBtnClass = "btn btn-dark fw-bold p-3 ms-2";
    const darkBtnTextClass = "ms-2";

    const rightColClass = "text-center mt-5 mt-lg-0";
    const heroArtClass = classes.heroArt;

    const imgFluidClass = "img-fluid";
    const floatingWrapClass = "d-none d-lg-block";

    return (
        <div className={wrapperClass}>
            <Container className={containerClass}>
                <Row className={rowClass}>
                    <Col lg={6} className={leftColClass}>
                        <Badge pill bg="dark" className={badgeClass}>
                            <BsStars className={starsIconClass} />
                            <span className={badgeTextClass}>New Feature Launch</span>
                        </Badge>

                        <h1 className={headingClass}>Accelerate Your Business Growth</h1>

                        <p className={descClass}>
                            Our powerful SaaS platform helps modern teams increase productivity
                            by 40% and reduce operational costs. Join over 10,000+ companies
                            already transforming their workflow.
                        </p>

                        <div>
                            <a href="" className={primaryBtnClass}>
                                <span className={primaryBtnTextClass}>Start Free Trial</span>
                                <FaLongArrowAltRight />
                            </a>

                            <a href="" className={darkBtnClass}>
                                <FaRegPlayCircle />
                                <span className={darkBtnTextClass}>Watch Demo</span>
                            </a>
                        </div>
                    </Col>

                    <Col lg={6} className={rightColClass}>
                        <div className={heroArtClass}>
                            <img
                                src="https://bootstrapmade.com/content/demo/Forma/assets/img/misc/misc-17.webp"
                                alt="Online"
                                className={imgFluidClass}
                            />

                            <div className={floatingWrapClass}>
                                <FloatingInfoCard
                                    icon={FiTrendingUp}
                                    value="+127%"
                                    label="Revenue Growth"
                                    positionClass={classes.cardTop}
                                />

                                <FloatingInfoCard
                                    icon={FiUsers}
                                    value="2.4k"
                                    label="Active Users"
                                    positionClass={classes.cardRight}
                                />

                                <FloatingInfoCard
                                    icon={AiOutlineClockCircle}
                                    value="40%"
                                    label="Time Saved"
                                    positionClass={classes.cardBottom}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
