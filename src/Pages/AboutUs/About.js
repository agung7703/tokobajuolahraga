import React from "react";
import Content from "../../Components/Content";
import { content1, content2 } from "./Data";

function About() {
  return (
    <>
      <h1 className="about">About Us</h1>
      <Content {...content1} />
      <Content {...content2} />
    </>
  );
}

export default About;
