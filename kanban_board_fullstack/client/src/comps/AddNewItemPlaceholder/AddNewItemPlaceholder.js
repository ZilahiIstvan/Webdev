import React from "react";

import "./AddNewItemPlaceholder.scss";

const AddNewItemPlaceholder = (props) => {
  const { text, func } = props;

  return (
    <div className="add_new_item_placeholder" onClick={func}>
      {text}
    </div>
  );
};

export default AddNewItemPlaceholder;
