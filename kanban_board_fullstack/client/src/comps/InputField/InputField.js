import React from "react";

import "./InputField.scss";

const InputField = (props) => {
  const { headerText, defValue, titleText, setTitleText, createBoardRef } =
    props;

  return (
    <div className={`input_field`}>
      <div className="input_field_title">{headerText}</div>
      <input
        ref={createBoardRef}
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
