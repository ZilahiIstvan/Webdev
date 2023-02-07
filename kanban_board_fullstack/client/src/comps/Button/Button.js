import React from "react";

import "./Button.scss";

const Button = (props) => {
  const {
    btnText,
    btnBgColor,
    btnTextColor,
    btnMargin,
    titleText,
    api_base,
    createBoardRef,
    setLeftSide,
    leftSide,
  } = props;

  const handleCreateButton = async () => {
    if (titleText !== "") {
      // add data to database
      const data = await fetch(api_base + "/create/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: createBoardRef.current.value,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log("Error message: ", err.message));

      // add to list
      setLeftSide(leftSide.concat(data));
    }
  };

  return (
    <div
      className={`button button_bg_${btnBgColor} button_text_${btnTextColor} button_margin_${btnMargin}`}
      onClick={handleCreateButton}
    >
      {btnText}
    </div>
  );
};

export default Button;
