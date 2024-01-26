import React, { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner.js';
import Main from './components/Main.js';
import Owner from './components/Owner.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

export default function App() {
    // Brings viewport back to top of page on unload (refresh) to help animation effects
    window.onunload = () => {
        window.scrollTo(0, 0);
    }

    const LazyLoaded = lazy(() => import('./components/Intro.js'))

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <LazyLoaded />
            </Suspense>
            <Main />
            <Owner />
            <Contact />
            <Footer />
        </>
    );
}