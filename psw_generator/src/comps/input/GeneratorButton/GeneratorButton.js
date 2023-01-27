import React from "react";

import "./GeneratorButton.scss";

const GeneratorButton = (props) => {
  const { text, symbol, checkboxState, setPsw, slider } = props;

  const handleGenerateClick = () => {
    let pswString = "";
    let selectedItems = checkboxState.filter((item) => item.state);

    if (selectedItems.length === 0)
      alert("Please select at least one checkbox!");
    else {
      for (let i = 0; i < slider; i++) {
        let randomIndex = Math.floor(Math.random() * selectedItems.length);
        pswString += selectedItems[randomIndex].func();
      }

      if (pswString !== "") {
        setPsw(pswString);
      } else {
        alert("Please select a valid character length!");
      }
    }
  };

  return (
    <div className="generator-button" onClick={handleGenerateClick}>
      <div className="generator-button-text">{text}</div>
      <div className="generator-button-symbol">{symbol}</div>
    </div>
  );
};

export default GeneratorButton;
