import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style.scss';

export default function Main() {
    // Declaring options for useInView() hook
    const options = {
        triggerOnce: true,
        threshold: 1,
    }

    // useInView hooks for each project that returns
    //  a boolean (true, false) of ref if in viewport.
    // Accomplishes animation logic for projects.
    const [ section1ref, section1 ] = useInView(options);
    const [ section2ref, section2 ] = useInView(options);
    const [ section3ref, section3 ] = useInView(options);

    // New animations for Mobile!
    const [ section1TitleRef, section1Title ] = useInView(options);
    const [ section1InfoRef, section1Info ] = useInView(options);
    const [ section1ImgRef, section1Img ] = useInView(options);

    const [ section2ImgRef, section2Img ] = useInView(options);
    const [ section2InfoRef, section2Info ] = useInView(options);

    const [ section3InfoRef, section3Info ] = useInView(options);
    const [ section3ImgRef, section3Img ] = useInView(options);

    return (
        <main>
            <section className="section section--1">
                <h2
                    ref={section1TitleRef}
                    className={`${"section__title"} ${section1Title ? "animate1" : ""}`}
                >
                    Sports Training in Northern Cambria, PA
                </h2>
                <div className="section__group">
                    <p ref={section1InfoRef} className={`${"section__info"} ${section1Info ? "animate2 animate-mobile" : ""}`}>
                        &emsp;Here at Super Swing, our goal is to help develop players fundamentally
                        and make them successful on and off the field. We encourage players to do their best, 
                        and most importantly have fun! We are proud to offer detailed training in baseball/softball and how to apply
                        necessary skills to the beloved sport.
                    </p>
                    <img
                        ref={section1ImgRef}
                        className={`section__img ${section1Img ? "animate3" : ""}`}
                        /* className="section__img" */
                        src="./img/team-kids.jpg"
                        alt="Team">
                    </img>
                </div>
            </section>
            <section className="section section--2">
                <img
                    ref={section2ImgRef}
                    className={`section__img ${section2Img ? "animate2" : ""}`}
                    /* className="section__img" */
                    src="./img/field.jpg"
                    alt="Building Interior">
                </img>
                <div ref={section2InfoRef} className={`about section__group ${section2Info ? "animate3 animate-mobile" : ""}`}>
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
            <section className="section section--3">
                <p ref={section3InfoRef} className={`section__info ${section3Info ? "animate2 animate-mobile" : ""}`}>
                    &emsp;Discover the winning edge with our professional coaches 
                    who bring years of experience to every training session.
                    Train like a pro with cutting-edge techniques and proven strategies 
                    to enhance your performance.
                </p>
                <img
                    ref={section3ImgRef}
                    className={`section__img ${section3Img ? "animate3" : ""}`}
                    /* className="section__img" */
                    src="./img/team.webp"
                    alt="Field">
                </img>
            </section>
        </main>
    );
}