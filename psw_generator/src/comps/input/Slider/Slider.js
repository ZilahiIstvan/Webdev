import React from "react";

import "./Slider.scss";

const Slider = (props) => {
  const { slider, setSlider, setIcon } = props;

  const sliderMinVal = 0;
  const sliderMaxVal = 20;

  const handleSlider = (event) => {
    setSlider(event.target.value);
    setIcon(false);
  };

  return (
    <div className="slider">
      <input
        className="slider-item"
        type="range"
        min={sliderMinVal}
        max={sliderMaxVal}
        step="1"
        onChange={handleSlider}
        value={slider}
        style={{
          backgroundImage: `linear-gradient(to right, #a4ffaf ${
            (slider / (sliderMaxVal - sliderMinVal)) * 100
          }%, #100f15 0%)`,
        }}
      />
    </div>
  );
};

export default Slider;
