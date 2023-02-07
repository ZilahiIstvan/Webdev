import React from "react";

import "./LeftSideItem.scss";

const LeftSideItem = (props) => {
  const { _id, name, creator, active, setLeftSide, leftSide, setCreateBoard } =
    props;

  const handleItemClick = (id) => {
    setLeftSide(
      leftSide.map((item) => {
        // create new board
        if (item._id === id && item.creator) {
          setCreateBoard(true);
          return { ...item };
        } else {
          // add background to clicked menu
          if (item._id === id && !item.creator) {
            return { ...item, active: true };
          }
          // inactivate lastly activated item
          else if (item.active) {
            return { ...item, active: false };
          } else {
            return { ...item };
          }
        }
      })
    );
  };

  return (
    <div
      className={`left_side_item ${creator ? "left_side_item_creator" : ""} ${
        active ? "left_side_item_active" : ""
      }`}
      onClick={() => handleItemClick(_id)}
    >
      <svg
        className="left_side_item_symbol"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
        />
      </svg>
      <div className="left_side_item_text">{name}</div>
    </div>
  );
};

export default LeftSideItem;
