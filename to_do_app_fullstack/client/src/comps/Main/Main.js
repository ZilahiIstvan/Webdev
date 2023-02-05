import React, { useEffect, useState } from "react";

import "./Main.scss";

import Input from "../Input/Input.js";
import ItemList from "../ItemList/ItemList";

const api_base = "http://localhost:3001";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api_base + "/tasks")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const allProps = {
    data,
    api_base,
    setData,
  };

  return (
    <div className="main">
      <div className="main_header_text">To-Do Application</div>
      <Input {...allProps} />
      <ItemList {...allProps} />
    </div>
  );
};

export default Main;
