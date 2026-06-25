import { Container, Row, Col } from "react-bootstrap";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

import SocialIconLink from "../common/SocialIconLink";
import FooterLinksColumn from "../common/FooterLinksColumn";

import classes from "./Footer.module.css";

const socialIcons = [<FaXTwitter />, <FaFacebook />, <FaInstagram />, <FaLinkedin />];

const usefulLinks = ["Home", "About Us", "Services", "Terms of service", "Privacy Policy"];
const services = ["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"];
const address = ["A108 Adam Street", "New York, NY 535022", "United states"];

const Footer = () => {
    const containerClass = "mt-5 pt-3 ps-3";
    const rowClass = "align-items-center";

    const brandLinkClass = "fs-1 text-opacity-100 ps-0 text-decoration-none fw-bold";
    const brandNameClass = `${classes.footerTitle} text-white`;

    const aboutTextClass = "mt-2";

    const socialsUlClass = "d-flex justify-content-start align-items-center list-unstyled";
    const socialsLiClass = "m-0 p-2";

    const middleColClass = "ps-4 ps-md-0";
    const middleRowClass = "g-4";

    const rightColClass = "d-flex justify-content-center justify-content-md-start";
    const rightInnerWrapClass = "d-flex flex-column align-items-center align-items-md-start mt-2 mt-lg-0 mb-2";
    const contactTitleClass = "mb-md-3";

    const addressPClass = "m-auto mb-md-auto ms-md-0 text-md-start p-0 text-white text-opacity-75";

    const contactInfoWrapClass = "mt-4 mb-2 ms-2 ms-md-0 ps-2 ps-md-0";
    const contactLineClass = "m-0";
    const contactValueClass = "text-white text-opacity-75";

    const footerBgClass = classes.footerbg;
    const copyrightPClass = "pt-4 pb-4 d-flex align-items-center justify-content-center";
    const copyrightBrandClass = "ms-3 text-white fw-bold";
    const ms3Class = "ms-3";

    return (
        <Container className={containerClass}>
            <Row className={rowClass}>
                <Col lg={5}>
                    <a href="" className={brandLinkClass}>
                        <span className={brandNameClass}>Forma</span>
                    </a>

                    <p className={aboutTextClass}>
                        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                        nada terra videa magna derita valies darta donna mare fermentum
                        iaculis eu non diam phasellus.
                    </p>

                    <ul className={socialsUlClass}>
                        {socialIcons.map((iconEl, i) => (
                            <li key={i} className={socialsLiClass}>
                                <SocialIconLink props={iconEl} />
                            </li>
                        ))}
                    </ul>
                </Col>

                <Col lg={4} className={middleColClass}>
                    <Row className={middleRowClass} lg={2} xs={2}>
                        <FooterLinksColumn title="Useful Links" arr={usefulLinks} />
                        <FooterLinksColumn title="Our Services" arr={services} />
                    </Row>
                </Col>

                <Col lg={3} className={rightColClass}>
                    <div className={rightInnerWrapClass}>
                        <h5 className={contactTitleClass}>Contact Us</h5>

                        {address.map((line, i) => (
                            <p key={i} className={addressPClass}>
                                {line}
                            </p>
                        ))}

                        <div className={contactInfoWrapClass}>
                            <p className={contactLineClass}>
                                Phone: <span className={contactValueClass}>+1 5589 55488 55</span>
                            </p>
                            <p className={contactLineClass}>
                                Email: <span className={contactValueClass}>info@example.com</span>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className={footerBgClass}>
                <p className={copyrightPClass}>
                    <span>
                        <AiOutlineCopyright /> Copyright
                    </span>
                    <span className={copyrightBrandClass}>Forma</span>
                    <span className={ms3Class}>All Rights Reserved</span>
                </p>
            </div>
        </Container>
    );
};

export default Footer;
