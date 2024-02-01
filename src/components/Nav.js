import React, { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // Function that changes state (open/closed) of mobile nav menu
    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    // Smooth Scrolling Functions
    let aboutScroll = (e) => { // Scrolls to About section of the web page
        let about = document.getElementsByClassName("about");
        e.preventDefault();  // Stop Page Reloading
        about[0] && about[0].scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
    }
    let ownerScroll = (e) => { // Scrolls to Staff section of the web page
        let owner = document.getElementsByClassName("owner");
        e.preventDefault();  // Stop Page Reloading
        owner[0] && owner[0].scrollIntoView({ behavior: "smooth", block: "start"  });
        setIsOpen(false);
    }
    let footerScroll = (e) => { // Scrolls to Footer of the web page
        let footer = document.getElementsByClassName("footer");
        e.preventDefault();  // Stop Page Reloading
        footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "end"  });
        setIsOpen(false);
    }

    return (
        <header>
            <nav className="nav animate-slideIn-top">
                <a className="nav__relink" href="/">
                    <img className="nav__logo" href="#" src="./img/logo.jpg" alt="Company Logo"></img>
                    <section className="nav__title">
                        <h1 className="nav__title-text">
                            SUPER SWING BASEBALL
                        </h1>
                    </section>
                </a>
                <div className="nav__hamburger">
                    <button className={`nav__hamburger-button ${isOpen ? 'nav__hamburger-button--open' : ''}`} onClick={toggleMobileMenu} type="button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                {isOpen ? ( //Checks if Hamburger Button is Opened for mobile
                    <>
                        <section className="nav__menu nav--mobile">
                            <ul className="nav__menu-items">
                                <li>
                                    <a
                                        className="nav__link"
                                        href="/"
                                        onClick={aboutScroll}
                                    >
                                        ABOUT
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav__link"
                                        href="/"
                                        onClick={ownerScroll}
                                    >
                                        STAFF
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav__link"
                                        href="/"
                                        onClick={footerScroll}
                                    >
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <div className="nav__mobile-background" onClick={toggleMobileMenu}>
                        </div>
                    </>
                ) : ( // Desktop Markup (Excludes List Element)
                    <section className="nav__menu">
                                <a
                                    className="nav__link"
                                    href="/"
                                    onClick={aboutScroll}
                                >
                                    ABOUT
                                </a>
                                <a
                                    className="nav__link"
                                    href="/"
                                    onClick={ownerScroll}
                                >
                                    STAFF
                                </a>
                                <a
                                    className="nav__link"
                                    href="/"
                                    onClick={footerScroll}
                                >
                                    CONTACT
                                </a>
                    </section>
                    )
                }
            </nav>
        </header>
    );
}