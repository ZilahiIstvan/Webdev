import React from "react";

import "./DisabledBg.scss";

const DisabledBg = (props) => {
  const { onClickFunc } = props;
  return <div className="disabled_bg" onClick={onClickFunc}></div>;
};

export default DisabledBg;
