import React from "react";

import "./Item.scss";

export const Item = (props) => {
  const { _id, text, completed, api_base, setData, data } = props;

  const deleteItem = async (id) => {
    await fetch(api_base + "/tasks/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));

    setData(data.filter((item) => item._id !== id));
  };

  const completedItem = async (id) => {
    await fetch(api_base + "/tasks/completed/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    setData(
      data.map((item) =>
        item._id === id ? { ...item, completed: !item.completed } : { ...item }
      )
    );
  };

  return (
    <div className="item" onClick={() => completedItem(_id)}>
      <div className="item_left">
        <div
          className={`item_left_indicator ${
            completed ? "item_left_indicator_completed" : ""
          }`}
        ></div>
        <div
          className={`item_left_text ${
            completed ? "item_left_text_completed" : ""
          }`}
        >
          {text}
        </div>
      </div>
      <svg
        className="item_symbol"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        stroke="currentColor"
        onClick={() => deleteItem(_id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default Item;
