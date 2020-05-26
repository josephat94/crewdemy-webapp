// import App from 'next/app'

import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import theme from '../theme';
import Head from 'next/head';
import './main.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Use at the root of your app

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <script
          type='text/javascript'
          src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'
        ></script>
        <script
          type='text/javascript'
          src='https://js.openpay.mx/openpay.v1.min.js'
        ></script>
        <script
          type='text/javascript'
          src='https://js.openpay.mx/openpay-data.v1.min.js'
        ></script>
        <title> Crewdemy</title>
      </Head>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
