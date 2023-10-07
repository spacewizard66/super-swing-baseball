

function Nav() {


    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="./img/logo.jpg" alt="Company Logo"></img>
                <section className="nav-section">
                    <a
                        className="nav-section-link"
                        href="/"
                        onClick={e => {
                            let about = document.getElementsByClassName("section2");
                            e.preventDefault();  // Stop Page Reloading
                            about[0] && about[0].scrollIntoView({ behavior: "smooth", block: "center" });
                            }
                        }
                    >
                        ABOUT
                    </a>
                    <a
                        className="nav-section-link"
                        href="/"
                        onClick={e => {
                            let footer = document.getElementsByClassName("owner");
                            e.preventDefault();  // Stop Page Reloading
                            footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "center"  });
                            }
                        }
                    >
                        STAFF
                    </a>
                    <a
                        className="nav-section-link"
                        href="/"
                        onClick={e => {
                            let footer = document.getElementsByClassName("footer");
                            e.preventDefault();  // Stop Page Reloading
                            footer[0] && footer[0].scrollIntoView({ behavior: "smooth", block: "center"  });
                            }
                        }
                    >
                        CONTACT
                    </a>
                </section>
            </nav>
        </header>
    );
}
export default Nav;