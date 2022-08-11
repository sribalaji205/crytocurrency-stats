import React from "react";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Router from 'next/router';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
function MyApp({ Component, pageProps }: { Component: any, pageProps: any }): JSX.Element {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
  }, []);

  return (<>
    {!loading ? (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    ) : (
      <div className="lds-ripple"><div></div><div></div></div>
    )}
  </>
  );
}

export default MyApp