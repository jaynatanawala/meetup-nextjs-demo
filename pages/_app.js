import Head from "next/head";
import Layout from "../component/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Meetup demo</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
