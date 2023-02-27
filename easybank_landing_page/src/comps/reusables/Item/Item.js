import React from "react";

import "./Item.scss";

const Item = (params) => {
  const { itemText } = params;
  return (
    <div className="item_cont">
      <div className="item_text">{itemText}</div>
      <div className="item_underscore"></div>
    </div>
  );
};

export default Item;
