import Nav from "@/components/Nav";
import Head from "next/head";
import Footer from "./Footer";

const FrontEndLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ABC </title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default FrontEndLayout;
