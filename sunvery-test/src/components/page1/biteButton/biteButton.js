import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

import "./style/style.css";

import vector1 from "./img/vector1.png";
import vector2 from "./img/vector2.png";

export default function BiteButton() {
  const [isMouseOver, setMouse] = useState([false, false]);

  const timer = useTimer({
    onExpire: () => setMouse([true, true]),
  });

  const seconds = 1.5;

  const mouseEnter = () => {
    setMouse([true, false]);
    restartTimer(timer, seconds);
  };
  const mouseLeave = () => {
    setMouse([false, false]);
    timer.pause();
  };

  return (
    <div
      className={isMouseOver[0] ? "containerHovered" : "containerNotHovered"}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div
        className="text"
        style={{ color: isMouseOver[0] ? "#FFFFFF" : "#F35669" }}
      >
        TASTE IT
      </div>
      <img
        className="vector1"
        src={vector1}
        alt="1"
        style={{ visibility: isMouseOver[0] ? "visible" : "hidden" }}
      />
      <img
        className="vector2"
        src={vector2}
        alt="2"
        style={{ visibility: isMouseOver[1] ? "visible" : "hidden" }}
      />
    </div>
  );
}

function restartTimer(timer, seconds) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);
  timer.restart(time);
}
