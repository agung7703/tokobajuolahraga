import React from "react";
import "../App.css";
import "../style/HeroSection.css";
import { CustomButton } from "../Components/Button";

function HeroSection({ thumbnail, desc, btnsnm }) {
  return (
    <div className="hero-container">
      <h1 align="center">{thumbnail}</h1>
      <p align="center">{desc}</p>
      <p className="tag" align="center">
        <strong>
          *-diclaimer web ini tidak bisa melakukan transaksi langsung-*
        </strong>
      </p>
      <div className="hero-btns">
        <CustomButton
          className="btns"
          buttonStyle="btns--outline"
          buttonSize="btns--medium"
        >
          {btnsnm}
        </CustomButton>
      </div>
    </div>
  );
}

export default HeroSection;
