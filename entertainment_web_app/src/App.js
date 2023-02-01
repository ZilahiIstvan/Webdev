import "./App.scss";

import React, { useState } from "react";

import SideBar from "./comps/input/sidebar/SideBar";
import SearchBar from "./comps/input/searchbar/SearchBar";
import Data from "./Data";
import Gallery from "./comps/output/gallery/Gallery";

const App = () => {
  const [sideBarState, setSideBarState] = useState(0);

  const sideBarText = [
    "Search for movies or TV series",
    "Search for movies",
    "Search for TV series",
    "Search for bookmarked shows",
  ];

  const titles = [
    "Trending",
    "Recommended for you",
    (count, searchWord) =>
      `Found ${count} result${count > 1 ? "s" : ""} for '${searchWord}'`,
    "Bookmarked Movies",
    "Bookmarked TV Series",
  ];

  const allProps = {
    sideBarState,
    setSideBarState,
    sideBarText,
  };

  const TrendingGallery = {
    data: Data.filter((item) => item.itemType === "trending"),
    title: titles[0],
  };

  const RecommendedGallery = {
    data: Data.filter((item) => item.itemType === "item"),
    title: titles[1],
  };

  return (
    <div className="main">
      <SideBar {...allProps} />
      <div className="main-area">
        <SearchBar {...allProps} />
        <div className="main-area-trending">
          {sideBarState === 0 ? (
            <>
              <Gallery {...TrendingGallery} />
              <Gallery {...RecommendedGallery} />
            </>
          ) : (
            <Gallery {...RecommendedGallery} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
