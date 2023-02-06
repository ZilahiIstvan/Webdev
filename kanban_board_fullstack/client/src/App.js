import React, { useState, useEffect } from "react";

import "./App.scss";

import LeftSide from "./comps/LeftSide/LeftSide";
import TopSide from "./comps/TopSide/TopSide";
import MainArea from "./comps/MainArea/MainArea";

const api_base = "http://localhost:3001";

const App = () => {
  const [leftSide, setLeftSide] = useState([]);

  useEffect(() => {
    fetch(api_base + "/boards")
      .then((res) => res.json())
      .then((data) =>
        setLeftSide(
          data.map((item, idx) =>
            idx === 0 ? { ...item, active: true } : { ...item }
          )
        )
      );
  }, []);

  const allProps = {
    api_base,
    leftSide,
    setLeftSide,
  };

  return (
    <div className="app">
      <LeftSide {...allProps} />
      <TopSide {...allProps} />
      <MainArea />
    </div>
  );
};

export default App;
