import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { Router } from "react-router-dom";

import AppRoot from './app-root'
import "antd/dist/antd.css";
import history from './history';

const appEl = document.querySelector('.testAntDFramework');
const rootEl = document.createElement('div');

let renderApp = () => {
    render(
        (<Router history={history}>
            <AppRoot/>
        </Router>),
        rootEl
    );
};

/* Hot Replacement support, won't be bundled to production */
/* eslint-disable modules/no-exports-typo */
if (module.hot) {
    const renderAppHot = renderApp;
    const renderError = error => {
        render(
            <RedBox error={error}/>,
            rootEl
        );
    };

    renderApp = () => {
        try {
            renderAppHot();
        } catch (error) {
            renderError(error);
        }
    };

    module.hot.accept('./app-root', () => {
        setTimeout(renderApp);
    });
}

renderApp();
appEl.appendChild(rootEl);