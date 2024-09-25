import React from 'react';
import { useInView } from 'react-intersection-observer';

import teamKids from '../../public/img/team-kids.jpg';
import field from '../../public/img/field.jpg';
import team from '../../public/img/team.jpg';

export default function Main(): React.JSX.Element {

    type Options = {
        triggerOnce: boolean;
        threshold: number;
    }

    // Declaring options for useInView() hook
    const options: Options = {
        triggerOnce: true,
        threshold: 0.5,
    }

    // useInView hooks that returns a boolean
    // (true, false) of ref if in viewport.
    // Accomplishes animation logic.
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
                    <p ref={section1InfoRef} className={`${"section__info"} ${section1Info ? "animate2 animate1" : ""}`}>
                        &emsp;Here at Super Swing, our goal is to help develop players fundamentally
                        and make them successful on and off the field. We encourage players to do their best, 
                        and most importantly have fun! We are proud to offer detailed training in baseball/softball and how to apply
                        necessary skills to the beloved sport.
                    </p>
                    <img
                        ref={section1ImgRef}
                        className={`section__img ${section1Img ? "animate3 animate1" : ""}`}
                        src={teamKids}
                        alt="Team">
                    </img>
                </div>
            </section>
            <section className="section section--2">
                <img
                    ref={section2ImgRef}
                    className={`section__img ${section2Img ? "animate2 animate1" : ""}`}
                    src={field}
                    alt="Building Interior">
                </img>
                <div ref={section2InfoRef} className={`about section__group ${section2Info ? "animate3 animate1" : ""}`}>
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
                <p ref={section3InfoRef} className={`section__info ${section3Info ? "animate2 animate1" : ""}`}>
                    &emsp;Discover the winning edge with our professional coaches 
                    who bring years of experience to every training session.
                    Train like a pro with cutting-edge techniques and proven strategies 
                    to enhance your performance.
                </p>
                <img
                    ref={section3ImgRef}
                    className={`section__img ${section3Img ? "animate3 animate1" : ""}`}
                    src={team}
                    alt="Field">
                </img>
            </section>
        </main>
    );
};