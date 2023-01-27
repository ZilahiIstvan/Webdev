import React from "react";

import "./StrengthBar.scss";

const StrengthBar = (props) => {
  const { checkboxState } = props;
  let count = 0;
  checkboxState.forEach((item) => (item.state ? (count += 1) : null));

  return (
    <div className="strength-bar">
      <div className="strength-bar-text">STRENGTH</div>
      <div className="strength-bar-display">
        <div className="strength-bar-strength">
          {count === 0
            ? ""
            : count < 2
            ? "EASY"
            : count < 4
            ? "MEDIUM"
            : "HARD"}
        </div>
        <div className="strength-bar-container">
          <div
            className={`strength-bar-container-box ${
              count > 0 ? "strength-bar-container-box-active" : null
            }`}
          ></div>
          <div
            className={`strength-bar-container-box ${
              count > 1 ? "strength-bar-container-box-active" : null
            }`}
          ></div>
          <div
            className={`strength-bar-container-box ${
              count > 2 ? "strength-bar-container-box-active" : null
            }`}
          ></div>
          <div
            className={`strength-bar-container-box ${
              count > 3 ? "strength-bar-container-box-active" : null
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StrengthBar;
