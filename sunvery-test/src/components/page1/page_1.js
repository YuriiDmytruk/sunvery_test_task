import React from "react";

import "./style/style.css";

import Header from "./header/header";
import DogAnimation from "./dogAnimation/dogAnimation";
import BiteButton from "./biteButton/biteButton";
import List from "./list/list";

export default function Page1() {
  return (
    <div className="page1">
      <Header />
      <DogAnimation />
      <BiteButton />
      <List />
      <div className="natural">THE 100% NATURAL</div>
      <div className="dental">DENTAL</div>
      <div className="chewy">CHEWY SHOES</div>
      <div className="for-dogs">FOR DOGS</div>
    </div>
  );
}
