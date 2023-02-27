import React from "react";

import "./Button.scss";

const Button = (params) => {
  const { btnText } = params;
  return <div className="btn_cont">{btnText}</div>;
};

export default Button;
