import "./App.scss";

import React, { useState } from "react";

import SideBar from "./comps/input/sidebar/SideBar";
import SearchBar from "./comps/input/searchbar/SearchBar";
import Item from "./comps/output/item/Item";

const App = () => {
  const [sideBarState, setSideBarState] = useState(0);

  const sideBarText = [
    "Search for movies or TV series",
    "Search for movies",
    "Search for TV series",
    "Search for bookmarked shows",
  ];

  const allProps = {
    sideBarState,
    setSideBarState,
    sideBarText,
  };

  return (
    <div className="main">
      <SideBar {...allProps} />
      <div className="main-area">
        <SearchBar {...allProps} />
        <Item />
      </div>
    </div>
  );
};

export default App;
