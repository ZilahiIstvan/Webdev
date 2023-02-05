import React from "react";

import "./ItemList.scss";

import Item from "../Item/Item";

const ItemList = (props) => {
  const { api_base, data, setData } = props;

  return (
    <div className="item_list">
      {data.map((item) => {
        const allProps = {
          ...item,
          api_base,
          setData,
          data,
        };
        return <Item key={item._id} {...allProps} />;
      })}
    </div>
  );
};

export default ItemList;
