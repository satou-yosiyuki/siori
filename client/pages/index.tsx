import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Home/content";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
