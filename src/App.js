import React, { useEffect, useState } from 'react';

import LoadingSpinner from './components/LoadingSpinner.js';
import Nav from './components/Nav.js';
import Title from './components/Title.js';
import Main from './components/Main.js';
import Owner from './components/Owner.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const finishLoading = () => {
        // Set loading to false when the page is finished loading
        setTimeout(() => {
            setLoading(false);
        }, 400)
    };

    // Add an event listener for the 'load' event on the window
    window.addEventListener('load', finishLoading);

    // Clean up the event listener when the component unmounts
    return () => {
    window.removeEventListener('load', finishLoading);
    };
    }, []);

    return (
        <>
            {loading ? (
                // Display the loading spinner while loading page and assets
                <LoadingSpinner />
            ) : (
                // Display the main content when page has finished loading
                <>
                    <Nav />
                    <Title />
                    <Main />
                    <Owner />
                    <Contact />
                    <Footer />
                </>
            )}
        </>
    );
}
export default App;