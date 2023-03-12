import React from "react";

import "./style/style.css";

import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
//import elipse from "./img/elipse.png";

export default function Page3() {
  return (
    <div className="page3">
      <Text />
      <img src={img2} alt="img2" className="img-2-p-3" />
      <img src={img3} alt="img3" className="img-3-p-3" />
      <div className="elipse-1" />
      <div className="elipse-2" />
      <div className="elipse-3" />
      <div className="elipse-4" />
      <div className="elipse-5" />
      <div className="text-group"></div>
      <div className="one">1</div>

      <div className="elipse-6" />
      <div className="elipse-7" />
    </div>
  );
}

function Text() {
  return (
    <div className="text-section">
      <div className="topic">
        <div className="therefore">
          Therefore I created a range of
          <br /> boredom-busting edible shoes
          <br /> that Elsa could enjoy chewing
          <br /> that would also clean her teeth.
        </div>
        <div className="tag-3">
          <div className="schews">SCHEWS COLLECTION</div>
        </div>
      </div>
      <div className="just">
        Just like the dental chews I gave her at dinner-time to stop her staring
        at my plate!
      </div>
    </div>
  );
}
