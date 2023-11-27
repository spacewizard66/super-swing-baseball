import React, { useState } from 'react';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    /* const [isScrolled, setIsScrolled] = useState(false); */

    // Function that changes state (open/closed) of mobile nav menu
    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    // Smooth scrolls to About section of the web page
    let aboutScroll = e => {
        let about = document.getElementsByClassName("section2");
        e.preventDefault();  // Stop Page Reloading
        about[0] && about[0].scrollIntoView({ behavior: "smooth", block: "center" });
        setIsOpen(false);
    }

    // Smooth scrolls to Staff section of the web page
    let ownerScroll = e => {
        let owner = document.getElementsByClassName("owner");
        e.preventDefault();  // Stop Page Reloading
        owner[0] && owner[0].scrollIntoView({ behavior: "smooth", block: "start"  });
        setIsOpen(false);
    }

    // Smooth scrolls to Footer of the web page
    let footerScroll = e => {
        let footer = document.getElementsByClassName("footer");
        e.preventDefault();  // Stop Page Reloading
        footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "end"  });
        setIsOpen(false);
    }

    // Checks if the page has been scrolled from the top by 5 pixels,
    // then changes state accordingly.
    /* window.addEventListener("scroll", function(){
        if (window.scrollY > 4) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }); */

    return (
        <header>
            <nav className="nav">
                {/* Logo and Title */}
                <a className="nav-relink animate-slide-in" href="/">
                    <img className="nav-logo" href="#" src="./img/logo.jpg" alt="Company Logo"></img>
                    <section className="title">
                        <h1 className="title-text">
                            SUPER SWING BASEBALL
                        </h1>
                    </section>
                </a>
                {/* Hamburger Button for Mobile Navigation */}
                <div className="hamburger">
                    <button className={`hamburger-button ${isOpen ? 'hamburger-button-open' : ''}`} onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>
                {/* Checks if Hamburger Button has been Opened, Returns Appropriate Markup */}
                {isOpen ? (
                    // Mobile Markup
                    <>
                        <div className="menu-background" onClick={toggleMobileMenu}>
                        </div>
                        <section className="mobile-menu open">
                            <ul className="menu-items">
                                <li>
                                    <a
                                        className="nav-section-link"
                                        href="/"
                                        onClick={aboutScroll}
                                    >
                                        ABOUT
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-section-link"
                                        href="/"
                                        onClick={ownerScroll}
                                    >
                                        STAFF
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-section-link"
                                        href="/"
                                        onClick={footerScroll}
                                    >
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </>
                ) : (
                    // Desktop Markup
                    <section className="nav-section">
                        <a
                            className="nav-section-link"
                            href="/"
                            onClick={aboutScroll}
                        >
                            ABOUT
                        </a>
                        <a
                            className="nav-section-link"
                            href="/"
                            onClick={ownerScroll}
                        >
                            STAFF
                        </a>
                        <a
                            className="nav-section-link"
                            href="/"
                            onClick={footerScroll}
                        >
                            CONTACT
                        </a>
                    </section>
                    )
                }
                {/* <hr className={`border bottom-border ${isScrolled? 'scrolled2' : ''}`}/> */}
            </nav>
        </header>
    );
}
export default Nav;