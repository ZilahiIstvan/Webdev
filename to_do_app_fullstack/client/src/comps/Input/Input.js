import React, { useRef, useState } from "react";

import "./Input.scss";

const Input = (props) => {
  const { data, setData, api_base } = props;

  const defaultText = useRef("Create New Task");
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => setInputData(e.target.value);
  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const addedTask = await fetch(api_base + "/tasks/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: e.target.value,
        }),
      }).then((res) => res.json());
      setData(data.concat(addedTask));
    }
  };

  return (
    <div className="input">
      <svg
        className="input_symbol"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <input
        type="text"
        className="input_field"
        placeholder={defaultText.current}
        onChange={handleInputChange}
        value={inputData}
        onKeyDown={handleEnter}
      />
      <div className="input_stripe"></div>
    </div>
  );
};

export default Input;
