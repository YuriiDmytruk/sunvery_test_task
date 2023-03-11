import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import top from "./img/top.png";
import bottom from "./img/bottom.png";

import "./style/style.css";

export default function DogAnimation() {
  const [state, setState] = useState(0);

  const duration = 400;
  const waitWillHiding = 1500;

  const onClick = () => setState(1);

  const AnimTop = useSpring({
    from: state === 0 ? { top: 0 } : state === 1 ? { top: 0 } : { top: 154 },
    to: state === 0 ? { top: 0 } : state === 1 ? { top: 154 } : { top: 0 },
    config: { duration: duration },
    onRest: () =>
      setTimeout(() => setState(state === 1 ? 2 : 0), waitWillHiding),
  });
  const AnimBottom = useSpring({
    from: state === 0 ? { top: 67 } : state === 1 ? { top: 67 } : { top: 233 },
    to: state === 0 ? { top: 67 } : state === 1 ? { top: 233 } : { top: 67 },
    config: { duration: duration },
  });

  return (
    <div className="container">
      <div className="elipse" />
      <div className="imageContainer" onClick={onClick}>
        <animated.img style={AnimTop} src={top} className="imageTop" />
        <animated.img style={AnimBottom} src={bottom} className="imageBottom" />
      </div>
    </div>
  );
}
