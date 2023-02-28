import React from "react";
import Become from "../../Component/Become";
import Faq from "../../Component/Faq";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Hero from "../../Component/Hero";
import Hosting from "../../Component/Hosting";
import List from "../../Component/List";
import Motto from "../../Component/Motto";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Motto />
      <Hosting />
      <List />
      <Faq />
      <Become />
      <Footer />
    </div>
  );
};

export default Landing;
