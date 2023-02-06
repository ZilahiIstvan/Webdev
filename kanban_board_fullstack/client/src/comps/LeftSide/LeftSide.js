import React, { useEffect, useState } from "react";

import "./LeftSide.scss";

import LeftSideItemList from "../LeftSideItemList/LeftSideItemList";

const LeftSide = (props) => {
  const { leftSide, setLeftSide } = props;

  const allProps = {
    setLeftSide,
    leftSide,
  };

  return (
    <div className="left_side">
      <div className="left_side_container">
        <svg
          className="left_side_container_symbol"
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="84"
          viewBox="0 0 73 84"
          fill="none"
        >
          <rect width="21.9" height="84" rx="10" fill="#645FC6" />
          <rect x="51.1" width="21.9" height="84" rx="10" fill="#28264F" />
          <rect x="25.55" width="21.9" height="84" rx="10" fill="#46438B" />
        </svg>
        <div className="left_side_container_title">kanban</div>
      </div>
      <div className="left_side_header">ALL BOARDS ({leftSide.length - 1})</div>
      <LeftSideItemList {...allProps} />
    </div>
  );
};

export default LeftSide;
