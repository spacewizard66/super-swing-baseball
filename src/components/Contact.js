function Contact() {
    return (
        <section className="contact">
            <header>
                <h2 className="contact__title">
                    CONTACT US
                </h2>
            </header>
            <section className="contact__section">
                <div className="contact__group1">
                    <p className="contact__times">
                        Hours of Operation<br/><hr className="contact__line"/>
                        Monday - Friday&emsp;4:00 p.m. - 8:00 p.m.<br/>
                        Saturday&emsp;9:00 a.m. - 2:30 p.m.<br/>
                        {/* Sunday-&emsp;Closed */}
                    </p>
                </div>
                <div className="contact__group2">
                    <p className="contact__details">
                        Owner / Instructor<br/><hr className="contact__line"/>
                        John Bonatesta<br/>
                        {/* Tel. (814)-312-3861<br/> */}
                        johnbonatesta@yahoo.com
                    </p>
                </div>
            </section>
        </section>
    );
}
export default Contact;