import Badge from "react-bootstrap/Badge";

const WideCard = ({
    badgeText = null,
    title = null,
    titlestyle = null,
    desc = null,
    descStyle = null,
    btnText = null,
    btnbg = "white",
    btnIcon = null,
    secondBtn = null,
}) => {
    const wrapperClass = "px-3 px-md-0";
    const rowClass = "row align-items-center bg-primary rounded-3 px-3 py-4 w-100 mx-0";

    const leftColClass = "col col-lg-8 d-flex flex-column align-items-start justify-content-center";
    const rightColClass = "col-lg-4 mt-3 d-flex flex-column justify-content-center align-items-lg-center";

    const badgeClass = "fw-semibold text-white border border-white border-opacity-50 rounded-pill px-4 py-2 large";

    const titleClass = `mt-3 fw-bold fs-3 head-font ${titlestyle || ""}`.trim();
    const descClass = `mt-3 fs-6 ${descStyle || ""}`.trim();

    const primaryBtnClass = `btn btn-primary bg-${btnbg} text-primary px-3 mb-3`;
    const btnTextClass = "pe-3 fw-bold fs-5";

    const secondBtnClass = "btn border text-white";
    const secondBtnTextClass = "px-3 fs-5 fw-bold";

    return (
        <div className={wrapperClass}>
            <div className={rowClass}>
                <div className={leftColClass}>
                    <Badge bg="primary" className={badgeClass}>
                        {badgeText}
                    </Badge>

                    <h3 className={titleClass}>{title}</h3>
                    <p className={descClass}>{desc}</p>
                </div>

                <div className={rightColClass}>
                    <a href="" className={primaryBtnClass}>
                        <span className={btnTextClass}>{btnText}</span>
                        <span>{btnIcon}</span>
                    </a>

                    {secondBtn ? (
                        <a href="" className={secondBtnClass}>
                            <span className={secondBtnTextClass}>{secondBtn}</span>
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default WideCard;
