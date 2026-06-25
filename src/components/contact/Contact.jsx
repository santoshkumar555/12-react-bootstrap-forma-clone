import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";

import SectionHeader from "../common/SectionHeader";
import BadgePill from "../common/BadgePill";

import classes from "./Contact.module.css";

function Contact() {
    const sectionClass = classes.section;

    const containerClass = `${classes.main_box} px-3 px-lg-3 py-2 my-4`;
    const rowClass = "g-5 align-items-center mt-3";

    const leftWrapClass = "text-start pe-lg-4";
    const headingClass = "my-4";
    const paragraphClass = "text-secondary mb-4";

    const infoListClass = "d-flex flex-column gap-3";

    const infoCardClass = `${classes.contact_info} ${classes.glassBox} d-flex align-items-start p-4`;
    const iconClass = "fs-3 text-primary me-3";
    const infoTitleClass = ""; 
    const infoTextClass = "mb-1";
    const infoSmallClass = "text-secondary";

    const statsBoxClass = `${classes.glassBox} p-4 mt-3`;
    const statsRowClass = "text-center g-0";
    const statsColBorderClass = "border-end border-white border-opacity-10";
    const statsNumberClass = "text-primary mb-1";

    const rightFormWrapClass = `${classes.right_form} ${classes.glassBox} p-4 p-lg-5`;
    const formTitleClass = "mb-2";
    const formSubTitleClass = "text-secondary mb-4";

    const groupMb3Class = "mb-3";
    const groupMb4Class = "mb-4";
    const buttonClass = "w-100";

    return (
        <section className={sectionClass}>
            <Container fluid="lg" className={containerClass}>
                <SectionHeader btn=" Contact" white="Need Help? " blue="Contact Us" />

                <Row className={rowClass}>
                    <Col xs={12} lg={6}>
                        <div className={leftWrapClass}>
                            <BadgePill up={false}>
                                <IoIosRocket /> Let&apos;s Build Something Amazing
                            </BadgePill>

                            <h1 className={headingClass}>
                                Ready to Transform Your Digital Presence?
                            </h1>

                            <p className={paragraphClass}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
                            </p>

                            <div className={infoListClass}>
                                <div className={infoCardClass}>
                                    <MdEmail className={iconClass} />
                                    <div>
                                        <h6 className={infoTitleClass}>Email</h6>
                                        <p className={infoTextClass}>hello@example.com</p>
                                        <small className={infoSmallClass}>We reply within 4 hours</small>
                                    </div>
                                </div>

                                <div className={infoCardClass}>
                                    <FaPhoneAlt className={iconClass} />
                                    <div>
                                        <h6 className={infoTitleClass}>Phone</h6>
                                        <p className={infoTextClass}>+1 (555) 234-5678</p>
                                        <small className={infoSmallClass}>Mon-Fri, 9AM-6PM EST</small>
                                    </div>
                                </div>

                                <div className={infoCardClass}>
                                    <FaLocationDot className={iconClass} />
                                    <div>
                                        <h6 className={infoTitleClass}>Office</h6>
                                        <p className={infoTextClass}>
                                            5632 Market Street, San Francisco, CA 94102
                                        </p>
                                        <small className={infoSmallClass}>Visit us anytime</small>
                                    </div>
                                </div>
                            </div>

                            <div className={statsBoxClass}>
                                <Row className={statsRowClass}>
                                    <Col xs={4} className={statsColBorderClass}>
                                        <h5 className={statsNumberClass}>2.5K+</h5>
                                        <small>Happy Clients</small>
                                    </Col>

                                    <Col xs={4} className={statsColBorderClass}>
                                        <h5 className={statsNumberClass}>4.9/5</h5>
                                        <small>Client Rating</small>
                                    </Col>

                                    <Col xs={4}>
                                        <h5 className={statsNumberClass}>15min</h5>
                                        <small>Avg Response</small>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className={rightFormWrapClass}>
                            <Form>
                                <h3 className={formTitleClass}>Start Your Project</h3>
                                <p className={formSubTitleClass}>
                                    Tell us about your project and we&apos;ll get back to you.
                                </p>

                                <Form.Group className={groupMb3Class}>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group className={groupMb3Class}>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group className={groupMb3Class}>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group className={groupMb4Class}>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>

                                <Button className={buttonClass}>Send Message →</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
