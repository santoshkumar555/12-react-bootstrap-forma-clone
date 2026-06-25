import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import headerData from "../header/header.data.js";
import classes from "../header/Header.module.css";

function Header() {
    const location = useLocation();
    const isHashActive = (hashUrl) => location.pathname === "/" && location.hash === hashUrl;

    const navbarClass = classes.header;
    const brandClass = `${classes.title} text-white fw-bold`;

    const mobileActionsWrapClass = "d-flex align-items-center ms-auto d-lg-none";
    const mobileGetStartedClass = "btn btn-primary me-2";

    const navClass = "mx-auto text-center text-lg-start";
    const navStyle = { fontSize: "16px" };

    const desktopActionsWrapClass = "text-lg-end d-none d-lg-block";
    const desktopGetStartedClass = "btn btn-primary";

    const getLinkClass = (active) =>
        `${classes.nav} nav-link ${active ? classes.navActive : ""}`;

    return (
        <Navbar expand="lg" className={navbarClass} data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={HashLink} to="/#home" smooth className={brandClass}>
                    {/* Note: In a multi-page setup, use "/home" for the Home page route. "/#home" is meant for single-page (hash/scroll) navigation. */}
                    Forma<span className="text-primary">.</span>
                </Navbar.Brand>

                <div className={mobileActionsWrapClass}>
                    <Navbar.Brand as={HashLink} to="/#contact" smooth className={mobileGetStartedClass}>
                    {/* Note: In a multi-page setup, use "/contact" for the Home page route. "/#contact" is meant for single-page (hash/scroll) navigation. */}
                        Get Started
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar" />
                </div>

                <Navbar.Collapse id="main-navbar">
                    <Nav className={navClass} navbar style={navStyle}>
                        {headerData.map(({ title, url }) => {
                            const isHash = url.startsWith("#");

                            if (isHash) {
                                const active = isHashActive(url);

                                return (
                                    <HashLink
                                        key={url}
                                        to={`/${url}`} // "/#about", "/#contact", etc.
                                        smooth
                                        className={getLinkClass(active)}
                                    >
                                        {title}
                                    </HashLink>
                                );
                            }

                            return (
                                <NavLink
                                    key={url}
                                    to={url}
                                    className={({ isActive }) => getLinkClass(isActive)}
                                >
                                    {title}
                                </NavLink>
                            );
                        })}
                    </Nav>

                    <div className={desktopActionsWrapClass}>
                        <HashLink to="/#contact" smooth className={desktopGetStartedClass}>
                        {/* Note: In a multi-page setup, use "/contact" for the Home page route. "/#contact" is meant for single-page (hash/scroll) navigation. */}
                            Get Started
                        </HashLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
