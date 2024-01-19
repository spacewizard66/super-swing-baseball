import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style.scss';

function Main() {
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


    /*
        IDEA::
            give classNames "--reversed" Modifiers, and use js and state to manipulate
            when --reversed should be applied, possibly depending on screen size/orientation.

            Make the main tag a Block className, sections and their children become elements.
    */

    return (
        <main>
            <section ref={section1ref} className="section section--1">
                <p className={`${"section__info"} ${section1 ? "animate-left" : ""}`}>
                    &emsp;Here at Super Swing, our goal is to help develop players fundamentally
                    and make them successful on and off the field. We encourage players to do their best, 
                    and most importantly have fun! We are proud to offer detailed training in baseball/softball and how to apply
                    necessary skills to the beloved sport.
                </p>
                <img
                    className={`section__img ${section1 ? "animate-right" : ""}`}
                    src="./img/team.webp"
                    alt="Team">
                </img>
            </section>
            <section ref={section2ref} className="section section--2">
                <img className={`section__img ${section2 ? "animate-left" : ""}`} src="./img/interior.jpg" alt="Building Interior"></img>
                <div className={`section__group ${section2 ? "animate-right" : ""}`}>
                    <h2 className="section__title">
                        About Us
                    </h2>
                    <p className="section__info">
                        &emsp;
                        All the instructors have college experience and they strive to get the most out of their
                        students. The dedicated staff work on important skills
                        such as fundamentals, technique, form, strategy, and personality, all while enjoying the sport.
                        This also includes batting, pitching, fielding, catching, and weight lifting.
                    </p>
                </div>
            </section>
            <section ref={section3ref} className="section section--3">
                <p className={`section__info ${section3 ? "animate-left" : ""}`}>
                    &emsp;sljhdfk jsh dfkjs hdfks adfsd fsdfsd fsdfsd fdfsdfsd fsdfsd fsdf sdfsdf
                    sdfsdfsd fsdfsdffffff fff ffffff ffffff  ffffffff ffffffff ffffff
                    dff   ffffffffff ffffff fff  ffffff fffff
                </p>
                <img className={`section__img ${section3 ? "animate-right" : ""}`} src="./img/field.jpg" alt="Field"></img>
            </section>
        </main>
    );
}
export default Main;