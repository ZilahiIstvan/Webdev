import React, { useState, useEffect, useRef } from "react";

import "./App.scss";

import LeftSide from "./comps/LeftSide/LeftSide";
import TopSide from "./comps/TopSide/TopSide";
import MainArea from "./comps/MainArea/MainArea";
import CreateBoard from "./comps/CreateBoard/CreateBoard";

const api_base = "http://localhost:3001";

const App = () => {
  const [leftSide, setLeftSide] = useState([]); // left side menu state
  const [createBoard, setCreateBoard] = useState(false); // create board pop-up window enabler state
  const activeItemSet = useRef(true);

  // used to load the left side menu data from the database
  useEffect(() => {
    fetch(api_base + "/boards")
      .then((res) => res.json())
      .then((data) =>
        setLeftSide(
          data.map((item, idx) => {
            if (activeItemSet.current && !item.creator) {
              activeItemSet.current = false;
              return { ...item, active: true };
            }
            return { ...item };
          })
        )
      );
  }, []);

  const allProps = {
    api_base,
    leftSide,
    setLeftSide,
    createBoard,
    setCreateBoard,
  };

  return (
    <div className="app">
      <LeftSide {...allProps} />
      <TopSide {...allProps} />
      <MainArea {...allProps} />
      <CreateBoard {...allProps} />
    </div>
  );
};

export default App;
