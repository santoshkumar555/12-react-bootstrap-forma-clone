import Badges from "./Badges";

const Title = ({ badgeText, whiteText, blueText }) => {
    const wrapperClass = "text-center";
    const titleClass = "text-white fw-bold mt-3 text-capitalize";
    const blueTextClass = "text-primary h3 fw-bold";

    return (
        <div className={wrapperClass}>
            <Badges text={badgeText} />
            <h3 className={titleClass}>
                {whiteText} <span className={blueTextClass}>{blueText}</span>
            </h3>
        </div>
    );
};

export default Title;
