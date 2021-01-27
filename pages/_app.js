import React from 'react';
import '@styles/globals.css';

// eslint-disable-next-line react/prop-types
function Application({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default Application;
