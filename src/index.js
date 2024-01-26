import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import LoadingSpinner from './components/LoadingSpinner.js';
import Nav from './components/Nav.js'

const LazyLoaded = lazy(() => import('./App.js'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Nav />
        <Suspense fallback={<LoadingSpinner />}>
            <LazyLoaded />
        </Suspense>
    </>
);