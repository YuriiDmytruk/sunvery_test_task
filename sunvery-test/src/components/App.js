import React, { useState } from "react";
import { useTransition, animated, useSpring } from "react-spring";

import "./style/style.css";
import "./style/boot1_2animation.css";
import "./style/boot2_3animation.css";

import Page1 from "./page1/page_1";
import Page2 from "./page2/page_2";
import Page3 from "./page3/page_3";
import Page4 from "./page4/page_4";

import boot1 from "./img/boot_1.png";
import boot2 from "./img/boot_2.png";
import boot3 from "./img/boot_3.png";

export default function App() {
  const steps = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];

  const [step, set] = useState(0);

  const handleOnWheel = (e) => {
    if (e.nativeEvent.wheelDelta < 0) {
      if (step < 3) {
        set(step + 1);
        console.log(step);
      }
    }
  };

  const duration = 1000;

  const AnimBoot = useSpring({
    from:
      step === 0
        ? {
            backgroundImage: `url("${boot1}")`,
            backgroundSize: "453.4px 441.02px",
          }
        : step === 1
        ? {
            left: 332.36,
            top: 445,
            transform: "rotate(9.31deg)",
            backgroundImage: `url("${boot1}")`,
            backgroundSize: "453.4px 441.02px",
          }
        : step === 2
        ? {
            left: -150,
            top: 290,
            transform: "rotate(100.64deg)",
            backgroundImage: `url("${boot1}")`,
            backgroundSize: "453.4px 441.02px",
          }
        : step === 3
        ? {
            left: 740,
            top: 170,
            transform: "rotate(-14.21deg)",
            backgroundImage: `url("${boot2}")`,
            backgroundSize: "386.51px 405.72px",
          }
        : {},
    to:
      step === 0
        ? {
            backgroundImage: `url("${boot1}")`,
            backgroundSize: "453.4px 441.02px",
          }
        : step === 1
        ? {
            left: -150,
            top: 290,
            transform: "rotate(100.64deg)",
            backgroundImage: `url("${boot1}")`,
            backgroundSize: "453.4px 441.02px",
          }
        : step === 2
        ? {
            left: 740,
            top: 170,
            transform: "rotate(-14.21deg)",
            backgroundImage: `url("${boot2}")`,
            backgroundSize: "386.51px 405.72px",
          }
        : step === 3
        ? {
            left: 437,
            top: 142,
            transform: "rotate(95.87deg)",
            backgroundImage: `url("${boot3}")`,
            backgroundSize: "478px 419px",
          }
        : {},
    config: { duration: duration },
  });

  const transitions = useTransition(step, {
    from: step === 0 ? { opacity: 1 } : { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div onWheel={handleOnWheel} className="App">
      <animated.div
        className="boot"
        alt="boot"
        style={AnimBoot}
        id={step === 2 ? "boot1-2" : step === 3 ? "boot2-3" : ""}
      />
      {transitions((style, step) => (
        <animated.div style={style}>{steps[step]}</animated.div>
      ))}
    </div>
  );
}
