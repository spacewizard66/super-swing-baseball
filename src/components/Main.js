import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style.scss';

function Main() {
    // Brings viewport back to top of page on unload (refresh)
    //  to help animation effects
    window.onunload = function () {
        window.scrollTo(0, 0);
    }

    // Declaring options for useInView() hook
    const options = {
        triggerOnce: true,
        threshold: 0.4,
    }

    // useInView hooks for each project that returns
    //  a boolean (true, false) of ref if in viewport.
    // Accomplishes animation logic for projects.
    const [ section1ref, section1 ] = useInView(options);
    const [ section2ref, section2 ] = useInView(options);
    const [ section3ref, section3 ] = useInView(options);







    return (
        <main>
            <section ref={section1ref} className={`${"section section1"} ${section1 ? "animate" : ""}`}>
                <p className="section-info">
                    &emsp;Our goal is to help develop players fundamentally
                    and make them successful on and off the field. We encourage players to do their best, and they
                    have immense fun doing so.
                </p>
                <img
                    className="section-img"
                    src="./img/team.webp"
                    alt="Team of Kids">
                </img>
            </section>
            <section ref={section2ref} className={`${"section section2"} ${section2 ? "animate" : ""}`}>
                <img className="section-img" src="./img/interior.jpg" alt="Building Interior"></img>
                <div className="section2-group">
                    <h2 className="section2-group-title">
                        About Us
                    </h2>
                    <p className="section2-group-info">
                        &emsp;Here at Super Swing, we are proud to offer detailed training in baseball/softball and how to apply
                        necessary skills to the beloved sport.
                        All the instructors have college experience and they strive to get the most out of their
                        students. The dedicated staff work on important skills
                        such as fundamentals, technique, form, strategy, and personality, all while enjoying the sport.
                        This also includes batting, pitching, fielding, catching, and weight lifting.
                    </p>
                </div>
            </section>
            <section ref={section3ref} className={`${"section section3"} ${section3 ? "animate" : ""}`}>
                <p className="section-info">
                    &emsp;sljhdfk jsh dfkjs hdfks adfsd fsdfsd fsdfsd fdfsdfsd fsdfsd fsdf sdfsdf
                    sdfsdfsd fsdfsdffffff fff ffffff ffffff  ffffffff ffffffff ffffff
                    dff   ffffffffff ffffff fff  ffffff fffff
                </p>
                <img className="section-img" src="./img/field.jpg" alt="Field"></img>
            </section>
        </main>
    );
}
export default Main;