import React from "react";

import "./InputField.scss";

const InputField = (props) => {
  const { headerText, defValue, titleText, setTitleText, itemRef } = props;

  return (
    <div className={`input_field`}>
      <div className="input_field_title">{headerText}</div>
      <input
        ref={itemRef}
        type="text"
        className="input_field_input"
        placeholder={defValue}
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      />
    </div>
  );
};

export default InputField;
