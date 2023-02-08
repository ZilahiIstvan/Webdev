import React from "react";

import "./BoardStatus.scss";

const BoardStatus = (props) => {
  const { headerText, defValue, value, color, setStatusList, statusList, _id } =
    props;

  return (
    <div
      className={`board_status ${
        headerText !== "" ? "" : "board_status_modifier"
      }`}
    >
      {headerText !== "" ? (
        <div className="board_status_title">{headerText}</div>
      ) : null}
      <div className="board_status_cont">
        <input
          type="text"
          className="board_status_input"
          placeholder={defValue}
          value={value}
          onChange={(e) =>
            setStatusList(
              statusList.map((item) =>
                item._id === _id
                  ? { ...item, value: e.target.value }
                  : { ...item }
              )
            )
          }
        />
        <input
          type="color"
          className="board_status_color"
          value={color}
          onChange={(e) =>
            setStatusList(
              statusList.map((item) =>
                item._id === _id
                  ? { ...item, color: e.target.value }
                  : { ...item }
              )
            )
          }
        />
      </div>
    </div>
  );
};

export default BoardStatus;
