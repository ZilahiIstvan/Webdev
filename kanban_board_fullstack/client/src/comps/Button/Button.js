import React from "react";

import "./Button.scss";

const Button = (props) => {
  const {
    btnText,
    btnBgColor,
    btnTextColor,
    btnMargin,
    itemRef,
    func,
    btnPadding,
  } = props;

  return (
    <div
      className={`button button_bg_${btnBgColor} button_text_${btnTextColor} button_margin_${btnMargin} button_padding_${btnPadding}`}
      onClick={() => func(itemRef)}
    >
      {btnText}
    </div>
  );
};

export default Button;
