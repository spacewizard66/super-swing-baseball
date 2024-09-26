import React from 'react';

import spinner from '../../public/img/baseball.png';

export default function LoadingSpinner(): React.JSX.Element {
    return (
        <section className="spinner">
            <img className="spinner__content"
                alt=""
                src={spinner}
            ></img>
            <h3>Loading...</h3>
        </section>
    );
};