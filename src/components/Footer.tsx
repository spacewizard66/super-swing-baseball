import React from 'react';

export default function Footer() {
    /* Functions Get Current Year for Copyright Tag */
    var d = new Date();
    var currYear = d.getFullYear();

    return (
        <footer className="footer">
            <section className="footer__info">
                <header>
                    <h1 className="footer__title">
                        Super Swing Baseball
                    </h1>
                </header>
                <a
                    className="footer__link footer__link--facebook"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/SuperSwingbaseball"
                >
                    &emsp;Follow us on Facebook
                </a>
                <a
                    className="footer__link footer__link--phone"
                    href="tel:8143123861"
                >
                    &emsp;8143123861
                </a>
                <a
                    className="footer__link footer__link--location"
                    target="_blank"
                    rel="noreferrer"
                    href="https://tinyurl.com/5n7ffbmw"
                >
                    &emsp;Find us on Google Maps
                </a>
            </section>
            <small className="footer__copyright">
                Copyright &copy; {currYear} Super Swing Baseball LLC.<br/>
                <a
                    className="footer__copyright__creator"
                    target="_blank"
                    rel="norefferer"
                    href="https://www.masongalat.com"
                    >
                    Created by Mason Galat
                </a>
            </small>
        </footer>
    );
}