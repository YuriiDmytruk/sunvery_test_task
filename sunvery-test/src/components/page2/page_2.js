import React from "react";

import img_2 from "./img/img-2.png";
import img_3 from "./img/img-3.png";

import "./style/style.css";

export default function Page2() {
  return (
    <div className="page2">
      <Section1 />
      <Section2 />
      <div className="how">HOW Schews WAS CREATED</div>
    </div>
  );
}

function Section1() {
  return (
    <div className="section1">
      <img src={img_2} alt="img2" className="img-2" />
      <div className="once">
        Once I adopted my <br />
        beloved bulldog puppy,
        <br /> Elsa. To say sheโs a chewer
        <br /> is an understatement!
      </div>
      <div className="tag">
        <div className="hi">๐ Hi, Iโm Elsa</div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="section2">
      <img src={img_3} alt="img3" className="img-3" />
      <div className="and">
        And guess what
        <br />
        was her favourite toy?
        <br />โ My shoes!
      </div>
      <div className="tag-2">
        <div className="help">Help ๐ข</div>
      </div>
    </div>
  );
}
