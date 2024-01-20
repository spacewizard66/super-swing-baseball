import React from 'react';
/* import Loadable from 'react-loadable'; */
/* import LoadingSpinner from './components/LoadingSpinner.js'; */
/* import Nav from './components/Nav.js'; */
import Intro from './components/Intro.js';
import Main from './components/Main.js';
import Owner from './components/Owner.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
    /* const [loading, setLoading] = useState(true); */

    // Brings viewport back to top of page on unload (refresh)
    //  to help animation effects
    window.onunload = () => {
        window.scrollTo(0, 0);
        /* setLoading(true) */
    }

    /* useEffect(() => {
        setTimeout(() => {
            // Set loading to false when the page is finished loading
            setLoading(false)
        }, "500")
        
        }
 */





        /* setLoading(false); */

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
    /* }, []); */
/* 
    function All() {
        <>
            <Nav />
            <Intro />
            <Main />
            <Owner />
            <Contact />
            <Footer />
        </>
    }
 */
    

    /* const LoadableComp = Loadable({
        loader: () => import("./components/Intro.js"),
        loading: () => <LoadingSpinner />
    }) */

    return (
        <>
            {/* <Suspense fallback={<LoadingSpinner />}>
                <LazyLoaded />
            </Suspense> */}

            {/* <LoadableComp /> */}
            {/* <Nav /> */}
            <Intro />
            <Main />
            <Owner />
            <Contact />
            <Footer />
        </>
    );
}
export default App;