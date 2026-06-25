import Card from "react-bootstrap/Card";

const TestimonialsCard = ({ title, description, profile, featuredImage }) => {
    const { name, role, image } = profile;

    const cardClass = "bg-transparent border-0 text-white teamCard p-4";
    const rowClass = "row align-items-center";

    const leftColClass = "col-lg-7";
    const rightColClass = "col-lg-5 text-center";

    const titleClass = "fs-3 fw-bold mb-3";
    const descClass = "teamDesc mb-3";

    const profileWrapClass = "d-flex align-items-center gap-3 mt-4";
    const profileImgClass = "rounded-circle";
    const nameClass = "mb-0";
    const roleClass = "text-white text-opacity-75";

    const featuredImgClass = "img-fluid rounded-4";

    const profileImgWidth = 50;
    const profileImgHeight = 50;

    return (
        <Card className={cardClass}>
            <div className={rowClass}>
                <div className={leftColClass}>
                    <Card.Body>
                        <Card.Title className={titleClass}>{title}</Card.Title>

                        {description.map((text, index) => (
                            <Card.Text key={index} className={descClass}>
                                {text}
                            </Card.Text>
                        ))}

                        <div className={profileWrapClass}>
                            <img
                                src={image}
                                alt={name}
                                className={profileImgClass}
                                width={profileImgWidth}
                                height={profileImgHeight}
                            />

                            <div>
                                <h6 className={nameClass}>{name}</h6>
                                <small className={roleClass}>{role}</small>
                            </div>
                        </div>
                    </Card.Body>
                </div>

                <div className={rightColClass}>
                    <img src={featuredImage} alt={title} className={featuredImgClass} />
                </div>
            </div>
        </Card>
    );
};

export default TestimonialsCard;
