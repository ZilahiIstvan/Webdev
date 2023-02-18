import React, { useEffect, useRef } from "react";

import "./TextArea.scss";

const TextArea = (props) => {
  const { placeholderText, valueText, setTextVal, commentEdit } = props;

  const textAreaRef = useRef(null);

  const focusOnTextArea = () => {
    textAreaRef.current.selectionStart = valueText.length;
    textAreaRef.current.focus();
  };

  useEffect(() => {
    if (commentEdit) {
      focusOnTextArea();
    }
  });

  return (
    <textarea
      className={`text_area ${commentEdit ? "text_area_edit_modifier" : ""}`}
      placeholder={placeholderText}
      value={valueText}
      onChange={(e) => setTextVal(e.target.value)}
      ref={textAreaRef}
    ></textarea>
  );
};

export default TextArea;
