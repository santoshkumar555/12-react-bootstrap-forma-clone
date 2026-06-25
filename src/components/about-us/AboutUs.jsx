import { Container, Row, Col, Badge } from "react-bootstrap";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

import FeatureCard from "../common/FeatureCard";
import StatCounter from "../common/StatCounter";

import classes from "./AboutUs.module.css";

import about1 from "../../../public/about-1.webp";
import about2 from "../../../public/about-2.webp";

const AboutUs = () => {

    const sectionClass = `${classes.about} py-4 px-3 px-md-0 pb-5 pb-md-0`;
    const leftColClass = "flex-fill";
    const badgeClass = "mt-3 mb-lg-3 p-2";
    const aboutUsTextClass = "text-primary fs-6 m-2";
    const headingClass = "mb-3 mt-3";
    const leadClass = "lead mb-3";

    const statsCardClass = "p-4 mb-3 rounded-3 border border-white border-opacity-25 statsCard";
    const statsRowClass = "row row-cols-1 row-cols-md-2 g-4 text-center";

    const featuresWrapClass = "mt-5";
    const buttonsWrapClass = "mt-4 mb-4";

    const primaryBtnClass = "btn btn-primary fw-bold p-3 me-2";
    const darkBtnClass = "btn btn-dark fw-bold p-3 ms-2";
    const arrowIconClass = "ms-2";

    const rightColClass = "d-flex align-items-center";
    const rightWrapClass = classes.rightWrap;
    const outerImgClass = classes.outerImg;
    const innerImgClass = classes.innerImg;

    const awardBadgeClass = classes.awardBadge;
    const awardIconClass = classes.awardIcon;
    const awardTitleClass = classes.awardTitle;
    const awardSubClass = classes.awardSub;

    return (
        <section className={sectionClass}>
            <Container>
                <Row lg={2}>
                    <Col className={leftColClass}>
                        <Badge pill bg="dark" className={badgeClass}>
                            <span className={aboutUsTextClass}>About Us</span>
                        </Badge>

                        <h2 className={headingClass}>
                            We Build Digital Products That Drive Growth
                        </h2>

                        <p className={leadClass}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>

                        <div className={statsCardClass}>
                            <div className={statsRowClass}>
                                <StatCounter start={0} end={150} text="Projects Delivered" cap={false} />
                                <StatCounter start={0} end={85} text="Happy Clients" cap={false} />
                                <StatCounter start={0} end={12} text="Years Experience" cap={false} />
                                <StatCounter start={0} end={95} text="Client Retention" cap={false} />
                            </div>
                        </div>

                        <div className={featuresWrapClass}>
                            <FeatureCard
                                icon={<BsFillLightningChargeFill />}
                                text="Fast Delivery"
                                label="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut fugit."
                            />
                            <FeatureCard
                                icon={<IoShieldCheckmarkOutline />}
                                text="Quality Assured"
                                label="Sed quia consequuntur magni dolores eos ratione."
                            />
                        </div>

                        <div className={buttonsWrapClass}>
                            <a href="" className={primaryBtnClass}>
                                Start Your Project <FaLongArrowAltRight className={arrowIconClass} />
                            </a>

                            <a href="" className={darkBtnClass}>
                                View Portfolio
                            </a>
                        </div>
                    </Col>

                    <Col className={rightColClass}>
                        <div className={rightWrapClass}>
                            <img src={about1} alt="About main" className={outerImgClass} />
                            <img src={about2} alt="About small" className={innerImgClass} />

                            <div className={awardBadgeClass}>
                                <div className={awardIconClass}>🏆</div>
                                <div>
                                    <div className={awardTitleClass}>Award Winning</div>
                                    <div className={awardSubClass}>Digital Agency 2024</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;
