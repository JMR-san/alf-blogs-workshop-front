import React from "react";

import ArticleSection from "../components/ArticleSection";
import CtaSection from "../components/CtaSection";
import Hero from "../components/Hero";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <ArticleSection />
      <CtaSection />
    </>
  );
};

export default Home;