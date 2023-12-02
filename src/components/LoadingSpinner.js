import React from 'react';

function LoadingSpinner() {
    return (
        <section className="spinner">
            {/* <div className="spinner-content"></div> */}
            <img className="spinner-content" alt="" src="./img/favicon/baseball-96.png"></img>
            <h3>Loading...</h3>
        </section>
    );
}
export default LoadingSpinner;