import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style.scss';

export default function Main() {
    // Declaring options for useInView() hook
    const options = {
        triggerOnce: true,
        threshold: 0.3,
    }

    // useInView hooks for each project that returns
    //  a boolean (true, false) of ref if in viewport.
    // Accomplishes animation logic for projects.
    const [ section1ref, section1 ] = useInView(options);
    const [ section2ref, section2 ] = useInView(options);
    const [ section3ref, section3 ] = useInView(options);

    return (
        <main>
            <section ref={section1ref} className="section section--1">
                <h2 className="section__title animate-slideIn-bottom">Sports Training in Northern Cambria, PA</h2>
                <div className="section__group">
                    <p className={`${"section__info"} ${section1 ? "animate-slideIn-left" : ""}`}>
                        &emsp;Here at Super Swing, our goal is to help develop players fundamentally
                        and make them successful on and off the field. We encourage players to do their best, 
                        and most importantly have fun! We are proud to offer detailed training in baseball/softball and how to apply
                        necessary skills to the beloved sport.
                    </p>
                    <img
                        className={`section__img ${section1 ? "animate-slideIn-right" : ""}`}
                        src="./img/team-kids.jpg"
                        alt="Team">
                    </img>
                </div>
            </section>
            <section ref={section2ref} className="section section--2">
                <img className={`section__img ${section2 ? "animate-slideIn-left" : ""}`} src="./img/field.jpg" alt="Building Interior"></img>
                <div className={`section__group ${section2 ? "animate-slideIn-right" : ""}`}>
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
                <p className={`section__info ${section3 ? "animate-slideIn-left" : ""}`}>
                    &emsp;Discover the winning edge with our professional coaches 
                    who bring years of experience to every training session.
                    Train like a pro with cutting-edge techniques and proven strategies 
                    to enhance your performance.
                </p>
                <img className={`section__img ${section3 ? "animate-slideIn-right" : ""}`} src="./img/team.webp" alt="Field"></img>
            </section>
        </main>
    );
}