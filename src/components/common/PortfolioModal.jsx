import Modal from "react-bootstrap/Modal";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import classes from "../portfolio/Portfolio.module.css";

const PortfolioModal = ({ show, onHide, items, activeIndex, onPrev, onNext }) => {
    const current = items?.[activeIndex];

    const backdropClass = classes.modalBackdrop;
    const contentClass = classes.modalContent;
    const bodyClass = classes.body;

    const iconBtnClass = classes.iconBtn;
    const closeBtnClass = `${iconBtnClass} ${classes.closeBtn}`;
    const prevBtnClass = `${iconBtnClass} ${classes.navBtn} ${classes.prevBtn}`;
    const nextBtnClass = `${iconBtnClass} ${classes.navBtn} ${classes.nextBtn}`;

    const imgClass = classes.img;

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="xl"
            keyboard
            backdrop
            backdropClassName={backdropClass}
            contentClassName={contentClass}
        >
            <Modal.Body className={bodyClass}>
                <button
                    className={closeBtnClass}
                    onClick={onHide}
                    aria-label="Close"
                >
                    <IoClose />
                </button>

                <button className={prevBtnClass} onClick={onPrev} aria-label="Previous">
                    <FaArrowLeft size={24} />
                </button>

                <button className={nextBtnClass} onClick={onNext} aria-label="Next">
                    <FaArrowRight size={24} />
                </button>

                <img
                    src={current?.img}
                    alt={current?.title || "Portfolio image"}
                    className={imgClass}
                />
            </Modal.Body>
        </Modal>
    );
};

export default PortfolioModal;
