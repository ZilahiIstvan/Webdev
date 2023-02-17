import React from "react";

import "./Btn.scss";

const Btn = (props) => {
  const { btnText, btnStyle, btnClick } = props;

  return (
    <div className={`btn btn_${btnStyle}`} onClick={btnClick}>
      {btnText}
    </div>
  );
};

export default Btn;
