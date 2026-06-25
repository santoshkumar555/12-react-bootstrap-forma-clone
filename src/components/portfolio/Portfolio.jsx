import { useMemo, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

import PortfolioCard from "../common/PortfolioCard";
import WideCard from "../common/WideCard";
import PortfolioModal from "../common/PortfolioModal.jsx";

import portfolioData from "./portfolio.data.js";

const Portfolio = () => {
    const pageClass = "p-4";
    const headerRowClass = "flex-column align-items-center text-center";

    const badgeClass = "mt-3 mb-lg-3 p-2";
    const badgeTextClass = "text-primary fs-6 m-2";

    const titleColClass = "mt-3";
    const titleClass = "fw-bold fs-2";
    const titleAccentClass = "text-primary";

    const filterWrapColClass = "mt-5";
    const filterRowClass = "justify-content-center g-3";

    const cardsRowClass = "g-4 pb-5 mt-4";
    const wideRowClass = "mt-5";

    const btnBaseClass = "btn px-3";
    const btnActiveClass = "btn-primary";
    const btnInactiveClass = "btn-outline-secondary text-white";

    const buttons = ["All", "Web Development", "Mobile Apps", "Branding", "UI/UX Design"];

    const [activeCategory, setActiveCategory] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredData = useMemo(() => {
        return activeCategory === "All"
            ? portfolioData
            : portfolioData.filter((card) => card.category === activeCategory);
    }, [activeCategory]);

    const handleOpen = (clickedIndex) => {
        setActiveIndex(clickedIndex);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
    };

    const handleCategoryChange = (label) => {
        setActiveCategory(label);
        setShowModal(false);
        setActiveIndex(0);
    };

    return (
        <Container fluid>
            <Container className={pageClass}>
                <Row className={headerRowClass}>
                    <Col>
                        <Badge pill bg="dark" className={badgeClass}>
                            <span className={badgeTextClass}>Portfolio</span>
                        </Badge>
                    </Col>

                    <Col className={titleColClass}>
                        <h3 className={titleClass}>
                            Check Our <span className={titleAccentClass}>Portfolio</span>
                        </h3>
                    </Col>

                    <Col className={filterWrapColClass}>
                        <Row className={filterRowClass}>
                            {buttons.map((label) => {
                                const isActive = activeCategory === label;
                                const buttonClass = `${btnBaseClass} ${isActive ? btnActiveClass : btnInactiveClass}`;

                                return (
                                    <Col key={label} xs="auto">
                                        <button onClick={() => handleCategoryChange(label)} className={buttonClass}>
                                            {label}
                                        </button>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>

                <Row className={cardsRowClass}>
                    {filteredData.map((card, i) => (
                        <Col key={card.index} xs={12} md={6} lg={4}>
                            <PortfolioCard
                                img={card.img}
                                category={card.category}
                                year={card.year}
                                tags={card.tags}
                                title={card.title}
                                desc={card.description}
                                linkText={card.linkText}
                                onImageClick={() => handleOpen(i)}
                            />
                        </Col>
                    ))}
                </Row>

                <Row className={wideRowClass}>
                    <Col>
                        <WideCard
                            title="Have a project in mind?"
                            titlestyle="m-auto m-lg-0"
                            desc="Let's collaborate to create something exceptional. Our team is ready to bring your digital vision to life."
                            descStyle="text-center text-lg-start"
                            btnText="Start Your Project"
                            btnbg="dark"
                        />
                    </Col>
                </Row>
            </Container>

            <PortfolioModal
                show={showModal}
                onHide={handleClose}
                items={filteredData}
                activeIndex={activeIndex}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </Container>
    );
};

export default Portfolio;
