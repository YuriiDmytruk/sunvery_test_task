import React from "react";

import "./style/style.css";

export default function Page4() {
  return (
    <div className="page4">
      <div className="benefits">BENEFITS</div>
      <Card
        rowText="No stress"
        cardText="While your dog is having fun chewing Schews, you don’t need to worry about your shoes."
        color="#2DA6B1"
        top="315px"
        left="820px"
        img="😅"
        zIndex={5}
      />
      <Card
        rowText="Natural"
        cardText="100% natural vegan formula with low-calorie superfoods"
        color="#467027"
        top="518px"
        left="606px"
        img="🍃"
        zIndex={4}
      />
      <Card
        rowText="Eco-friendly"
        cardText="Being vegan, Schews have less carbon foot print, & the packaging is 100% recyclable."
        color="#FFB13B"
        top="90px"
        left="628px"
        img="♻️"
        zIndex={4}
      />
      <Card
        rowText="Healthy"
        cardText="Keep your dog’s teeth clean & help to maintain a healthy weight, boost energy levels, & reduce allergies."
        color="#EF4238"
        top="415px"
        left="154px"
        img="🦷"
        zIndex={3}
      />
    </div>
  );
}

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.color,
        top: props.top,
        left: props.left,
        zIndex: props.zIndex,
      }}
    >
      <div className="row">
        <div className="row-text">{props.rowText}</div>
        <div className="row-img">{props.img}</div>
      </div>
      <div className="card-text">{props.cardText}</div>
    </div>
  );
}
