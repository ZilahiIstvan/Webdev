import React from "react";

import "./Title.scss";

const Title = (params) => {
  const { titleClass, subtitleClass, titleText, subtitleText } = params;
  return (
    <div>
      <div className={titleClass}>{titleText}</div>
      <div className={subtitleClass}>{subtitleText}</div>
    </div>
  );
};

export default Title;
