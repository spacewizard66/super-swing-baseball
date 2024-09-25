import React from 'react';

export default function LoadingSpinner(): React.JSX.Element {
    return (
        <section className="spinner">
            <img className="spinner__content"
                alt=""
                src="./img/favicon/baseball-96.png"
            ></img>
            <h3>Loading...</h3>
        </section>
    );
};