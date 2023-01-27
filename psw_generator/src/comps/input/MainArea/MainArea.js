import React, { useState } from "react";

import "./MainArea.scss";

import CheckBoxList from "../CheckBoxList/CheckBoxList";
import StrengthBar from "../../output/StrengthBar/StrengthBar";
import GeneratorButton from "../GeneratorButton/GeneratorButton";
import Slider from "../Slider/Slider";

const MainArea = (props) => {
  const randomAsciiChar = (lowerValue, upperValue) => {
    return String.fromCharCode(
      lowerValue + Math.random() * (upperValue - lowerValue + 1)
    );
  };

  const generateRandomUppercaseLetter = () => {
    return randomAsciiChar(65, 90); // A - Z
  };

  const generateRandomLowercaseLetter = () => {
    return randomAsciiChar(97, 122); // a - z
  };

  const generateRandomNumber = () => {
    return randomAsciiChar(48, 57); // 0 - 9
  };

  const generateRandomSymbol = () => {
    let arr = [
      randomAsciiChar(33, 47), // random symbols (e.g.: @)
      randomAsciiChar(58, 64),
      randomAsciiChar(91, 96),
      randomAsciiChar(123, 126),
    ];
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const [slider, setSlider] = useState(0);
  const [checkboxState, setCheckboxState] = useState([
    {
      id: 1,
      text: "Include Uppercase Letters",
      state: false,
      func: generateRandomUppercaseLetter,
    },
    {
      id: 2,
      text: "Include Lowercase Letters",
      state: false,
      func: generateRandomLowercaseLetter,
    },
    {
      id: 3,
      text: "Include Numbers",
      state: false,
      func: generateRandomNumber,
    },
    {
      id: 4,
      text: "Include Symbols",
      state: false,
      func: generateRandomSymbol,
    },
  ]);

  const { psw, setPsw, setIcon } = props;

  const allProps = {
    checkboxState,
    setCheckboxState,
    slider,
    setSlider,
    psw,
    setPsw,
    setIcon,
    text: "GENERATE",
    symbol: <>&rarr;</>,
  };

  return (
    <div className="main-gui">
      <div className="main-gui-area">
        <div className="main-gui-area-title">Character Length</div>
        <div className="main-gui-area-num">{slider}</div>
      </div>
      <Slider {...allProps} />
      <CheckBoxList {...allProps} />
      <StrengthBar {...allProps} />
      <GeneratorButton {...allProps} />
    </div>
  );
};

export default MainArea;
