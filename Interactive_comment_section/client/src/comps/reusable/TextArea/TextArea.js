import React from "react";

import "./TextArea.scss";

const TextArea = (props) => {
  const { placeholderText, valueText, setTextVal, commentEdit } = props;
  return (
    <textarea
      className={`text_area ${commentEdit ? "text_area_edit_modifier" : ""}`}
      placeholder={placeholderText}
      value={valueText}
      onChange={(e) => setTextVal(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
