function Footer() {
    /* Functions Gets Current Year for Copyright Tag */
    var d = new Date();
    var currYear = d.getFullYear();

    return (
        <footer className="footer">
            <section className="footer-info">
                <header>
                    <h1 className="footer-info-heading">
                        Super Swing Baseball
                    </h1>
                </header>
                <a className="footer-info-facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/SuperSwingbaseball">
                    &emsp;Follow us on Facebook
                </a>
                <a className="footer-info-phone" href="tel:8143123861">
                    &emsp;8143123861
                </a>
                <a className="footer-info-location" target="_blank" rel="noreferrer" href="https://tinyurl.com/5n7ffbmw">
                    &emsp;2011 Crawford Avenue, Northern Cambria, PA, 15714
                </a>
            </section>
            <small className="footer-copyright">
                Copyright &copy; {currYear} Super Swing Baseball LLC. All Rights Reserved.
                Proudly created by Mason Galat
            </small>
        </footer>
    );
}
export default Footer;