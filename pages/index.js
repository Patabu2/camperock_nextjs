import Home from "../components/home/Home";
import Head from "next/head";
const Camperock = function () {
  return (
    <>
      <Head>
        <title>Luis Angel Campero Garcia</title>
        <meta name="description" content="Luis Campero's personal webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default Camperock;
