import React from "react";

import Item from "../item/Item";

import "./ItemsList.scss";

const ItemsList = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return <Item {...item} />;
      })}
    </>
  );
};

export default ItemsList;
