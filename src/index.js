import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import LoadingSpinner from './components/LoadingSpinner.js';
import Nav from './components/Nav.js'

/* import Loadable from 'react-loadable';


import LoadingSpinner from './components/LoadingSpinner.js';
const LoadableComp = Loadable({
    loader: () => import("./App.js"),
    loading: () => <LoadingSpinner />
}) */

const LazyLoaded = lazy(() =>
    /* return new Promise(resolve => setTimeout(resolve, 100)).then(
        () => import("./components/Intro.js")
    ) */
    import('./App.js')
    /* import('./components/Intro.js')
    import('./components/Main.js')
    import('./components/Owner.js')
    import('./components/Contact.js')
    import('./components/Footer.js') */
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Nav />
        <Suspense fallback={<LoadingSpinner />}>
            <LazyLoaded />
        </Suspense>
    </>
);