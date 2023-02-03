import "./App.scss";

import React, { useEffect, useState } from "react";

import SideBar from "./comps/input/sidebar/SideBar";
import SearchBar from "./comps/input/searchbar/SearchBar";
import Data from "./Data";
import Gallery from "./comps/output/gallery/Gallery";

const App = () => {
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

  const trendingMaxCnt = 3;

  const [sideBarState, setSideBarState] = useState(0);
  const [searchBarText, setSearchBarText] = useState("");

  // just first render
  //useEffect(() => {}, []);

  const allProps = {
    sideBarState,
    setSideBarState,
    sideBarText,
    setSearchBarText,
  };

  const filterData = (filterCond) => Data.filter(filterCond);

  const createGallery = (filterArr, title, returnCnt = null) => {
    // filterArr[itemType, type]
    let filterCond = (item) =>
      filterArr.length > 1
        ? item.itemType === filterArr[0] && item.type === filterArr[1]
        : item.itemType === filterArr[0];
    let filteredData = filterData(filterCond);
    return {
      data:
        returnCnt !== null ? filteredData.slice(0, returnCnt) : filteredData,
      title: title,
    };
  };

  const FilterFromAllData = () => {
    let data = Data.filter(
      (item) =>
        item.title.toLowerCase().search(searchBarText.toLowerCase()) !== -1
    ).map((item) => {
      return item.itemType === "trending"
        ? { ...item, itemType: "filtered" }
        : { ...item };
    });

    Data.map((item) => {
      return item.itemType === "filtered"
        ? { ...item, itemType: "trending" }
        : { ...item };
    });

    return {
      data: data,
      title: titles[2](data.length, searchBarText),
    };
  };

  const galleryCreator = () => {
    // ALL SERIES AND MOVIES
    if (sideBarState === 0) {
      // filter is active
      if (searchBarText !== "") {
        return <Gallery {...FilterFromAllData()} />;
      }
      // there is no filter
      else {
        return (
          <>
            <Gallery
              {...createGallery(["trending"], titles[0], trendingMaxCnt)}
            />
            <Gallery {...createGallery(["item"], titles[1])} />
          </>
        );
      }
    }
    // MOVIE
    else if (sideBarState === 1) {
      if (searchBarText !== "") {
        return <Gallery {...FilterFromAllData()} />;
      }
      // there is no filter
      else {
        return (
          <>
            <Gallery
              {...createGallery(
                ["trending", "Movie"],
                titles[0],
                trendingMaxCnt
              )}
            />
            <Gallery {...createGallery(["item", "Movie"], titles[1])} />
          </>
        );
      }
    }
    // SERIES
    else if (sideBarState === 2) {
      return (
        <>
          <Gallery
            {...createGallery(
              ["trending", "Series"],
              titles[0],
              trendingMaxCnt
            )}
          />
          <Gallery {...createGallery(["item", "Series"], titles[1])} />
        </>
      );
    }
    // BOOKMARKED
    else {
      return (
        <Gallery
          {...createGallery(
            (item) => item.itemType === "trending" && item.type === "Series",
            titles[0]
          )}
        />
      );
    }
  };

  return (
    <div className="main">
      <SideBar {...allProps} />
      <div className="main-area">
        <SearchBar {...allProps} />
        <div className="main-area-trending">{galleryCreator()}</div>
      </div>
    </div>
  );
};

export default App;
