import React from 'react';
import '../style.scss';

import bg from '../../public/img/interior.jpg';

export default function Intro(): any {

    // Background image styles, stored in a variable.
    // Necessary to import image for webpack processing.
    let background: React.CSSProperties = {
        "background": "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("+bg+")",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover"
    }

    return (
        <section
            className="intro"
            style={background}
        >
            {/* <img
                className="intro__image"
                src="./img/interior.jpg"
            ></img> */}
            <h1
                className="intro__title animate1"
            >
                designed to sharpen your skills
            </h1>
        </section>
    );
}