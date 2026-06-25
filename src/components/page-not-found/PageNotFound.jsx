import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
    const wrapperClass = classes.notFoundWrapper;

    const rowClass = "align-items-center min-vh-100";
    const leftColClass = "text-center text-md-start";
    const rightColClass = "text-center";

    const codeClass = classes.code;
    const titleClass = classes.title;
    const descriptionClass = classes.description;

    const actionsClass = classes.actions;

    const homeBtnClass = "me-3";

    const illustrationClass = classes.illustration;

    return (
        <div className={wrapperClass}>
            <Container>
                <Row className={rowClass}>
                    <Col md={6} className={leftColClass}>
                        <h1 className={codeClass}>404</h1>
                        <h2 className={titleClass}>Page Not Found</h2>

                        <p className={descriptionClass}>
                            Oops! The page you’re looking for doesn’t exist or has been moved.
                        </p>

                        <div className={actionsClass}>
                            <Button
                                as={Link}
                                to="/"
                                variant="primary"
                                className={homeBtnClass}
                            >
                                Go Home
                            </Button>

                            <Button as={Link} to="/contact" variant="outline-light">
                                Contact Support
                            </Button>
                        </div>
                    </Col>

                    <Col md={6} className={rightColClass}>
                        <div className={illustrationClass}>
                            <span>🚀</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageNotFound;
