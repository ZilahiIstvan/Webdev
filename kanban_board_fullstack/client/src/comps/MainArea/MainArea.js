import React from "react";

import TaskItem from "../TaskItem/TaskItem";

import "./MainArea.scss";

const MainArea = (props) => {
  const { leftSide } = props;

  const filterStatus = () => {
    const activeSideItem = leftSide.filter((item) => item.active);
    if (activeSideItem.length > 0) {
      return activeSideItem[0].status;
    }
    return [];
  };

  return (
    <div
      className="main_area"
      style={{
        gridTemplateColumns: `${"1fr ".repeat(filterStatus().length)}`,
      }}
    >
      {filterStatus().map((item) => (
        <div key={item._id} className="main_area_cont">
          <div
            className="main_area_circle"
            style={{ backgroundColor: `${item.color}` }}
          ></div>
          <div className="main_area_title">{item.value}</div>
        </div>
      ))}
      {filterStatus().map((item) => (
        <div className="main_area_content">
          <TaskItem />
        </div>
      ))}
    </div>
  );
};

export default MainArea;
