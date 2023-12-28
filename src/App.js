import React, { useEffect, useState } from 'react';

import LoadingSpinner from './components/LoadingSpinner.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Owner from './components/Owner.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
    const [loading, setLoading] = useState(true);

    // Brings viewport back to top of page on unload (refresh)
    //  to help animation effects
    window.onunload = function () {
        window.scrollTo(0, 0);
        /* setLoading(true) */
    }

    useEffect(() => {
        setTimeout(() => {
            // Set loading to false when the page is finished loading
            setLoading(false)
        }, "250")

        /* window.onload = () => {
            finishLoading();
        }; */

        /* document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                setLoading(false)
            }
        } */

        // Checks if document has already finished loading
        /* if (document.readyState === 'complete') {
            finishLoading();
        } else {
            // Add an event listener for the 'load' event on the window
            // window.addEventListener('load', finishLoading);
            // Clean up the event listener when the component unmounts
            // return () => window.removeEventListener('load', finishLoading);
        } */
    }, []);

    return (
        <>
            
            {loading ? (
                // Display the loading spinner while loading page and assets
                <LoadingSpinner />
            ) : (
                // Display the main content when page has finished loading
                <>
                    
                    <Main />
                    <Owner />
                    <Contact />
                    <Footer />
                </>
            )}
            <Nav />
        </>
    );
}
export default App;