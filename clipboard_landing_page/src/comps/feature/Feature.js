import React from "react";

import "./Feature.scss";

import Title from "../title/Title";

const Feature = (params) => {
  const { svgIcon, titleText, subtitleText } = params;
  return (
    <div className="feature_cont">
      {svgIcon}
      <Title
        {...{
          titleClass: "main_subtitle main_feature_subtitle",
          subtitleClass: "main_subtitle_subtitle",
          titleText: titleText,
          subtitleText: subtitleText,
        }}
      />
    </div>
  );
};

export default Feature;
