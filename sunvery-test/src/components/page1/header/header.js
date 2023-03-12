import "./style/style.css";

import logo from "./img/logo-schews.png";
import icon from "./img/icon-bag.png";

export default function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <ColorTextHower text="OUR STORY" />
        <ColorTextHower text="BENEFITS" />
        <ColorTextHower text="PRODUCTS" />
        <ColorTextHower text="FAQ" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="right-side">
        <div className="language-drop-down">
          <ColorTextHower text="ENG" width="31px" />
          <div className="polygon">
            <svg height="6" width="9">
              <polygon points="4.5,0 0,6 9,6" style={{ fill: "#2DA6B1" }} />
            </svg>
          </div>
        </div>
        <img src={icon} alt="icon" className="icon" />
        <div className="buttons">
          <div className="little-secondary-button">
            <div className="button-text">LOG IN</div>
          </div>
          <div className="little-primary-button">
            <div className="button-text" style={{ width: 65 }}>
              SIGN UP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorTextHower(props) {
  return (
    <div className="color-text-hover" style={{ width: props.width }}>
      <div className="highly-digestible">{props.text}</div>
    </div>
  );
}
