import React from "react";

import "./CheckBoxItem.scss";

const CheckBoxItem = (props) => {
  const { checkboxState, setCheckboxState, id, text, state, setIcon } = props;

  const handleClickEvent = () => {
    setCheckboxState(
      checkboxState.map((item) =>
        item.id === id ? { ...item, state: !state } : item
      )
    );
    setIcon(false);
  };

  return (
    <div className="checkbox-item">
      <div
        className={`checkbox-item-box checkbox-item-box${
          state ? "-active" : null
        }`}
        onClick={handleClickEvent}
        id={id}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="checkbox-item-text" onClick={handleClickEvent} id={id}>
        {text}
      </div>
    </div>
  );
};

export default CheckBoxItem;
