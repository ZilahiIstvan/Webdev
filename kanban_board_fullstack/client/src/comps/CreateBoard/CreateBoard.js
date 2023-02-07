import React, { useState, useRef } from "react";

import "./CreateBoard.scss";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const CreateBoard = (props) => {
  const { createBoard, setCreateBoard, api_base, setLeftSide, leftSide } =
    props;
  const [titleText, setTitleText] = useState("");
  const createBoardRef = useRef();

  const inputField = {
    headerText: "Title",
    defValue: "e.g. Take coffee break",
    titleText,
    setTitleText,
    createBoardRef,
  };

  const createNewBoardButton = {
    btnText: "Create Board",
    btnBgColor: "purple",
    btnTextColor: "white",
    btnMargin: "createBoard",
    titleText,
    api_base,
    createBoardRef,
    setLeftSide,
    leftSide,
  };

  return (
    <div className={`bg_disabled ${createBoard ? "" : "bg_disabled_hide"}`}>
      <div className={`create_board ${createBoard ? "" : "create_board_hide"}`}>
        <svg
          className="create_board_symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          onClick={() => {
            setCreateBoard(false);
            setTitleText("");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="create_board_header">Create New Board</div>
        <InputField {...inputField} />
        <Button {...createNewBoardButton} />
      </div>
    </div>
  );
};

export default CreateBoard;
