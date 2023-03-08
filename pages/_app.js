import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <Fragment>
      <Head>
        <title>Goresy - Heryerden Randevu</title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/png"
        />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default MyApp;
