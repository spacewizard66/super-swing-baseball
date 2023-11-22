import React, { useState } from 'react';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    let aboutScroll = e => {
        let about = document.getElementsByClassName("section2");
        e.preventDefault();  // Stop Page Reloading
        about[0] && about[0].scrollIntoView({ behavior: "smooth", block: "center" });
        setIsOpen(false);
    }

    let ownerScroll = e => {
        let owner = document.getElementsByClassName("owner");
        e.preventDefault();  // Stop Page Reloading
        owner[0] && owner[0].scrollIntoView({ behavior: "smooth", block: "start"  });
        setIsOpen(false);
    }

    let footerScroll = e => {
        let footer = document.getElementsByClassName("footer");
        e.preventDefault();  // Stop Page Reloading
        footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "end"  });
        setIsOpen(false);
    }

    window.addEventListener("scroll", function(){
        if (window.scrollY > 4){
            //user is at the top of the page; no need to show the back to top button
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    });
    console.log(window.scrollY)

    return (
        <header>
            <nav className="nav">
                {/* <hr className={`border top-border ${isScrolled? 'scrolled1' : ''}`}/> */}
                <a href="/">
                    <img className="nav-logo" href="#" src="./img/logo.jpg" alt="Company Logo"></img>
                </a>
                <div className="hamburger">
                    <button className={`hamburger-button ${isOpen ? 'hamburger-button-open' : ''}`} onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>
                <div className={`${isOpen ? 'menu-background' : ''}`} onClick={toggleMobileMenu}>
                </div>
                <section className={`mobile-menu ${isOpen ? 'open' : ''}`}>
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
                {/* <hr className={`border bottom-border ${isScrolled? 'scrolled2' : ''}`}/> */}
            </nav>
        </header>
    );
}
export default Nav;