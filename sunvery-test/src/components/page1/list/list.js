import React from "react";

import "./style/style.css";

export default function List() {
  return (
    <div className="list">
      <ColorText width={220} text="Prevents dental disease" />
      <Separator />
      <ColorText width={85} text="Delicious" />
      <Separator />
      <ColorText width={55} text="Vegan" />
      <Separator />
      <ColorText width={34} text="Fun" />
      <Separator />
      <ColorText width={115} text="Gluten-free" />
      <Separator />
      <ColorText width={155} text="Highly digestible" />
    </div>
  );
}

function ColorText(props) {
  return (
    <div style={{ width: props.width }} className="color-text">
      {props.text}
    </div>
  );
}

function Separator() {
  return <div className="separator" />;
}
