import '@/styles/globals.css';

import Head from "next/head";
import Layout from "../components/layout/layout";


function Myapp({ Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Myapp;
