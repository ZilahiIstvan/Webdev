import React from "react";

import "./Slider.scss";

const Slider = (props) => {
  const { slider, setSlider, setIcon } = props;

  const handleSlider = (event) => {
    setSlider(event.target.value);
    setIcon(false);
  };

  return (
    <div className="slider">
      <input
        className="slider-item"
        type="range"
        min="0"
        max="20"
        step="1"
        onChange={handleSlider}
        value={slider}
      />
    </div>
  );
};

export default Slider;
