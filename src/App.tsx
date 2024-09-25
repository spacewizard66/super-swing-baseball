import React, { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import Main from './components/Main';
import Owner from './components/Owner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    // Brings viewport back to top of page on unload (refresh) to help animation effects
    window.onunload = () => {
        window.scrollTo(0, 0);
    }

    const LazyLoaded = lazy(() => import('./components/Intro'))

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