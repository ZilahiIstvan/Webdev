import React from "react";

import "./LeftSideItemList.scss";

import LeftSideItem from "../LeftSideItem/LeftSideItem";

const LeftSideItemList = (props) => {
  const { setLeftSide, leftSide, setCreateBoard } = props;
  return (
    <div className="left_side_item_list">
      {leftSide
        .sort((a, b) => b.order - a.order)
        .map((item) => {
          const allProps = {
            ...item,
            setLeftSide,
            leftSide,
            setCreateBoard,
          };
          return <LeftSideItem key={item._id} {...allProps} />;
        })}
    </div>
  );
};

export default LeftSideItemList;
