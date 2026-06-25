import { Container, Badge } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";

import Title from "../common/Title";
import NumberDisplay from "../common/NumberDisplay";
import WhyUsCard from "../common/WhyUsCard";
import WhyUsLongCard from "../common/WhyUsLongCard";

import { CardData, LongCardData, data } from "../why-us/whyus.data.js";

import img from "../../../public/whyus.webp";
import classes from "./WhyUs.module.css";

const WhyUs = () => {
    const sectionBgClass = `${classes.whyusbg} w-100`;
    const containerClass = "py-5";

    const topRowClass = "row row-cols-lg-2 row-cols-1 mb-5";
    const colClass = "col";

    const badgeWrapClass = "my-4";
    const badgeClass = "mt-2 mb-lg-3 p-2";
    const badgeTextClass = "text-primary fs-6 m-2";

    const headingClass = "text-capitalize text-white fw-semibold mt-3";
    const paraClass = "text-white text-opacity-75 text-start fw-light mt-3";
    const statsRowClass = "row row-cols-1 row-cols-md-3";

    const imageClass = "img-fluid rounded object-fit-cover shadow";

    const cardsRowClass = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5";
    const cardsColClass = "col";

    const thirdRowClass = "row row-cols-1 row-cols-lg-2 g-5 align-items-center mt-3";
    const cardColumnClass = "col order-2 order-lg-1";
    const textColumnClass = "col order-1 order-lg-2";

    const coreHeadingClass = "text-white fw-bold mb-3";
    const coreHeadingStyle = { fontSize: "2.2rem" };
    const coreParaClass = "text-white text-opacity-75";

    const listWrapClass = "d-flex flex-column";
    const listItemClass = "mb-2";
    const listItemInnerRowClass = "d-flex gap-3";

    const checkPillClass = "bg-primary text-white rounded-circle px-2 py-1 d-flex align-items-center justify-content-center";
    const checkPillStyle = { height: "1.5rem", width: "1.5rem" };

    const itemTitleClass = "text-white fw-bold text-capitalize";
    const itemDescClass = "text-white text-opacity-75";

    const buttonsRowClass = "d-flex gap-3 flex-column flex-md-row";
    const primaryBtnClass = `btn btn-primary btn-lg fw-semibold text-capitalize ${classes.bouncebtn}`;
    const outlineBtnClass = `btn btn-outline-primary btn-lg text-capitalize ${classes.bouncebtn}`;

    return (
        <div className={sectionBgClass}>
            <Container className={containerClass}>
                <div>
                    <Title badgeText="Why us" whiteText="why" blueText="choose us" />
                </div>

                <div className={topRowClass}>
                    <div className={colClass}>
                        <div className={badgeWrapClass}>
                            <Badge pill bg="dark" className={badgeClass}>
                                <span className={badgeTextClass}>About Us</span>
                            </Badge>
                        </div>

                        <h2 className={headingClass}>
                            partner with a team that delivers real results
                        </h2>

                        <p className={paraClass}>
                            We don't just create digital experiences—we build solutions that
                            drive measurable growth. Our data-driven approach combines
                            creativity with performance to help your business thrive in the
                            digital landscape.
                        </p>

                        <div className={statsRowClass}>
                            <NumberDisplay start={0} end={150} text="projects delivered" />
                            <NumberDisplay start={0} end={98} text="% client Retention" />
                            <NumberDisplay
                                start={0}
                                end={250}
                                text="% Avg ROI Increase"
                                cap={false}
                            />
                        </div>
                    </div>

                    <div className={colClass}>
                        <img src={img} alt="" className={imageClass} />
                    </div>
                </div>

                <div className={cardsRowClass}>
                    {CardData.map((card) => (
                        <div className={cardsColClass} key={card.title}>
                            <WhyUsCard
                                desc={card.description}
                                linkText={card.linkText}
                                icon={card.icon}
                                active={card.active}
                            >
                                {card.title}
                            </WhyUsCard>
                        </div>
                    ))}
                </div>

                <div className={thirdRowClass}>
                    <div className={cardColumnClass}>
                        {LongCardData.map((card, index) => (
                            <div key={index}>
                                <WhyUsLongCard num={card.number} desc={card.description}>
                                    {card.title}
                                </WhyUsLongCard>
                            </div>
                        ))}
                    </div>

                    <div className={textColumnClass}>
                        <h3 className={coreHeadingClass} style={coreHeadingStyle}>
                            Our Core Capabilities
                        </h3>

                        <p className={coreParaClass}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores.
                        </p>

                        <div className={listWrapClass}>
                            {data.map((item, index) => (
                                <div className={listItemClass} key={index}>
                                    <div className={listItemInnerRowClass}>
                                        <span className={checkPillClass} style={checkPillStyle}>
                                            <FaCheck />
                                        </span>

                                        <div>
                                            <h5 className={itemTitleClass}>{item.title}</h5>
                                            <p className={itemDescClass}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={buttonsRowClass}>
                            <a className={primaryBtnClass}>start your project</a>
                            <a className={outlineBtnClass}>view case studies</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUs;
