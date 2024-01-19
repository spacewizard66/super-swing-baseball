import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
/* import App from './App'; */

import Loadable from 'react-loadable';


import LoadingSpinner from './components/LoadingSpinner.js';
const LoadableComp = Loadable({
    loader: () => import("./App.js"),
    loading: () => <LoadingSpinner />
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoadableComp />
    
);