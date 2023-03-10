import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./style.css";

export default function App() {
  const steps = [
    <div id="navi">A</div>,
    <div id="navi">B</div>,
    <div id="navi">C</div>,
    <div id="navi">D</div>,
  ];

  const [step, set] = useState(0);

  const transitions = useTransition(step, {
    from: step === 0 ? { opacity: 1 } : { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div
      onClick={() => {
        if (step < 3) {
          set(step + 1);
        }
      }}
    >
      {transitions((style, step) => (
        <animated.div style={style}>{steps[step]}</animated.div>
      ))}
    </div>
  );
}
