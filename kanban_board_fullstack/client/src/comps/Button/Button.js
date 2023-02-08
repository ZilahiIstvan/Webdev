import React from "react";

import "./Button.scss";

const Button = (props) => {
  const { btnText, btnBgColor, btnTextColor, btnMargin, itemRef, func } = props;

  return (
    <div
      className={`button button_bg_${btnBgColor} button_text_${btnTextColor} button_margin_${btnMargin}`}
      onClick={() => func(itemRef)}
    >
      {btnText}
    </div>
  );
};

export default Button;
