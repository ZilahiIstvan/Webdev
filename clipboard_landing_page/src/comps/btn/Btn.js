import React from "react";

import "./Btn.scss";

const Btn = (params) => {
  const { btnClass, btnText } = params;
  return <div className={btnClass}>{btnText}</div>;
};

export default Btn;
