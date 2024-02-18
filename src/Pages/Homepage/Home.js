import React from "react";
import HeroSection from "../../Components/HeroSection";
import Content from "../../Components/Content";
import { hero1, content1, content2 } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...hero1} />
      <Content {...content1} />
      <Content {...content2} />
    </>
  );
}

export default Home;
