import React from "react";
import ReactCurvedText from "react-curved-text";

import "./style/style.css";

import greenBoot from "./img/img-2.png";
import purpleBoot from "./img/img-3.png";

export default function Page3() {
  return (
    <div className="page3">
      <Text />
      <img src={greenBoot} alt="green" className="img-2-p-3" />
      <img src={purpleBoot} alt="purple" className="img-3-p-3" />
      {/*big border elipse */}
      <div className="elipse-1" />
      {/*//big filled elipse whith 1*/}
      <div className="elipse-2" />
      {/*//medium filed elipse on big border elipse up*/}
      <div className="elipse-3" />
      {/*//medium filed elipse on big border elipse down*/}
      <div className="elipse-4" />
      {/*//small border elipse*/}
      <div className="elipse-5" />
      {/*/ / div to hide part of small elipse*/}
      <div className="text-group">
        <div className="curved-text">
          <ReactCurvedText
            width={200}
            height={200}
            cx={45}
            cy={75}
            rx={87}
            ry={70}
            startOffset={170}
            reversed={true}
            text="DRAG TO CHANGE"
            textProps={{
              style: {
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "140%",
              },
            }}
            textPathProps={{ style: { fill: "white" } }}
          />
        </div>
      </div>
      {/*// number 1 in big filled elipse*/}
      <div className="one">1</div>
      {/*//small filed elipse on small border elipse up*/}
      <div className="elipse-6" />
      {/*//small filed elipse on small border elipse down*/}
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
