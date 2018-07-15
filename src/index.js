/* globals document */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal, css } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cssImports = css`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Sans:400i');
`;

// Global CSS
injectGlobal`
    ${ () => cssImports}
    body {
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans Condensed', sans-serif;
    }
`;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
