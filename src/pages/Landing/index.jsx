import React from "react";
import Faq from "../../Component/Faq";
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
    </div>
  );
};

export default Landing;
