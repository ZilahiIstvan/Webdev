import React, { useState, useRef, useEffect } from "react";

import "./CreateBoard.scss";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import BoardStatus from "../BoardStatus/BoardStatus";
import AddNewItemPlaceholder from "../AddNewItemPlaceholder/AddNewItemPlaceholder";

const BASE_STATUS_LIST = [
  {
    _id: 0,
    headerText: "Status",
    defValue: "e.g. Review",
    value: "",
    color: "#000000",
  },
];

const CreateBoard = (props) => {
  const { createBoard, setCreateBoard, api_base, setLeftSide, leftSide } =
    props;
  const [titleText, setTitleText] = useState("");
  const [statusList, setStatusList] = useState(BASE_STATUS_LIST);
  const [addNewItemStatus, setAddNewItemStatus] = useState(true);
  const createBoardRef = useRef();

  const titleInputField = {
    headerText: "Title",
    defValue: "e.g. Take coffee break",
    titleText,
    setTitleText,
    itemRef: createBoardRef,
  };

  const checkStatusText = () => {
    const emptyField = statusList.filter((item) => item.value === "");
    return emptyField.length === 0;
  };

  const createBoardFunc = async (itemRef) => {
    // check if the input field is empty or not
    if (titleText !== "" && checkStatusText()) {
      // add data to database
      const data = await fetch(api_base + "/create/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemRef.current.value,
          status: statusList,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log("Error message: ", err.message));

      // add to list
      setLeftSide(leftSide.concat(data)); // add new menu point to the left-side menu
      setCreateBoard(false); // close board creatrion pup-up windows
      setTitleText(""); // set the title text field to ""
      setStatusList(BASE_STATUS_LIST); // reset status array
    }
  };

  const addNewItemFunc = () => {
    setStatusList(
      statusList.concat({
        ...BASE_STATUS_LIST[0],
        headerText: "",
        _id: statusList.length + 1,
      })
    );
  };

  useEffect(() => {
    if (statusList.length === 6) {
      setAddNewItemStatus(false);
    }
  }, [addNewItemStatus, statusList]);

  const createNewBoardButton = {
    btnText: "Create Board",
    btnBgColor: "purple",
    btnTextColor: "white",
    btnMargin: "createBoard",
    itemRef: createBoardRef,
    func: createBoardFunc,
  };

  const addNewItemPlaceholder = {
    text: "+ Add New Status",
    setStatusList,
    func: addNewItemFunc,
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
            setCreateBoard(false); // close pop-up window
            setTitleText(""); // reset the text of the title
            setStatusList(BASE_STATUS_LIST); // reset the list
            setAddNewItemStatus(true); // add new item placeholder
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="create_board_header">Create New Board</div>
        <InputField {...titleInputField} />
        {statusList.map((item) => {
          const statusProps = {
            ...item,
            setStatusList,
            statusList,
          };
          return <BoardStatus key={item._id} {...statusProps} />;
        })}
        {addNewItemStatus ? (
          <AddNewItemPlaceholder {...addNewItemPlaceholder} />
        ) : null}
        <Button {...createNewBoardButton} />
      </div>
    </div>
  );
};

export default CreateBoard;
