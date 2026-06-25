import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge } from "react-bootstrap";

import Slider from "react-slick";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

import TestimonialsCard from "../common/TestimonialsCard";
import testimonialsData from "./testomonials.data";

import classes from "./Testimonials.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const prevArrowStyle = {
    position: "absolute",
    bottom: "-55px",
    left: "50%",
    transform: "translateX(-60px)", // pushes left arrow a bit left
    zIndex: 10,
    cursor: "pointer",
};

const nextArrowStyle = {
    position: "absolute",
    bottom: "-55px",
    left: "50%",
    transform: "translateX(20px)", // pushes right arrow a bit right
    zIndex: 10,
    cursor: "pointer",
};

const PrevArrow = ({ onClick }) => {
    const prevArrowClass = classes.arrowBtn;

    return (
        <div style={prevArrowStyle} className={prevArrowClass} onClick={onClick}>
            <SlArrowLeftCircle size={40} className={classes.arrowIcon} />
        </div>
    );
};

const NextArrow = ({ onClick }) => {
    const nextArrowClass = classes.arrowBtn;

    return (
        <div style={nextArrowStyle} className={nextArrowClass} onClick={onClick}>
            <SlArrowRightCircle size={40} className={classes.arrowIcon} />
        </div>
    );
};


const Testimonials = () => {
    const sectionClass = classes.main;

    const headerRowClass = "text-center mb-3";
    const badgeClass = "mt-3 mb-lg-3 p-2";
    const badgeTextClass = "text-primary fs-6 m-2";

    const headingClass = `Teams ${classes.teamP} fs-2 mt-3 text-white`;
    const headingSpanClass = `Teams ${classes.teamP1}`;

    const sliderRowClass = "justify-content-center mb-5";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className={sectionClass}>
            <Row className={headerRowClass}>
                <Col>
                    <Badge pill bg="dark" className={badgeClass}>
                        <span className={badgeTextClass}>Testimonials</span>
                    </Badge>

                    <h1 className={headingClass}>
                        Check Our{" "}
                        <span className={headingSpanClass}>
                            Testimonials
                        </span>
                    </h1>
                </Col>
            </Row>

            <Row className={sliderRowClass}>
                <Col lg={9}>
                    <Slider {...settings}>
                        {testimonialsData.map((elem, index) => (
                            <TestimonialsCard
                                key={index}
                                title={elem.title}
                                description={elem.description}
                                profile={elem.profile}
                                featuredImage={elem.featuredImage}
                            />
                        ))}
                    </Slider>
                </Col>
            </Row>
        </section>
    );
};

export default Testimonials;
