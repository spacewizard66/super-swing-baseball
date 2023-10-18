import React, { useState } from 'react';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let aboutScroll = e => {
        let about = document.getElementsByClassName("section2");
        e.preventDefault();  // Stop Page Reloading
        about[0] && about[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }

    let ownerScroll = e => {
        let owner = document.getElementsByClassName("owner");
        e.preventDefault();  // Stop Page Reloading
        owner[0] && owner[0].scrollIntoView({ behavior: "smooth", block: "center"  });
    }

    let footerScroll = e => {
        let footer = document.getElementsByClassName("footer");
        e.preventDefault();  // Stop Page Reloading
        footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "center"  });
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
            <hr className={`top-border ${isScrolled? 'scrolled' : ''}`}/>
            <nav className="nav" onScroll={console.log('pp')}>
                <img className="nav-logo" src="./img/logo.jpg" alt="Company Logo"></img>
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <button className="hamburger" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
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
                </div>
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
                
            </nav>
        </header>
    );
}
export default Nav;