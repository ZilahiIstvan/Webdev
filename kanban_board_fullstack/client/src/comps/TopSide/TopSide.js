import React, { useEffect, useState } from "react";

import "./TopSide.scss";

const TopSide = (props) => {
  const { leftSide } = props;
  const [topSider, setTopSider] = useState([]);

  useEffect(() => {
    setTopSider(leftSide.filter((item) => item.active));
  }, [leftSide]);

  return (
    <div className="top_side">
      <div className="top_side_header">
        {topSider.length > 0 ? topSider[0].name : "null"}
      </div>
      <div className="top_side_cont">
        <div className="top_side_cont_button">button</div>
        <svg
          className="top_side_cont_symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopSide;
