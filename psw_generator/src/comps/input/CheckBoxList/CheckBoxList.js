import React from "react";

import "./CheckBoxList.scss";

import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";

const CheckBoxList = (props) => {
  const { checkboxState, setCheckboxState, setIcon } = props;

  return (
    <div className="checkbox-list">
      {checkboxState.map((item) => {
        const allProps = {
          checkboxState,
          setCheckboxState,
          setIcon,
          ...item,
        };
        return <CheckBoxItem {...allProps} />;
      })}
    </div>
  );
};

export default CheckBoxList;
