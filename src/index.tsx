import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import LoadingSpinner from './components/LoadingSpinner';
import Nav from './components/Nav'

// Brings viewport back to top of page on unload (refresh) to help animation effects
window.onunload = () => {
    window.scrollTo(0, 0);
};

const LazyLoaded = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <>
        <Nav />
        <Suspense fallback={<LoadingSpinner />}>
            <LazyLoaded />
        </Suspense>
    </>
);