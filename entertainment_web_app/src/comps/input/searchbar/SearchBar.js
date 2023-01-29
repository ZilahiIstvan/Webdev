import React, { useState } from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const { sideBarText, sideBarState } = props;

  const [searchBarState, setSearchBarState] = useState(
    sideBarText[sideBarState]
  );

  return (
    <div className="searchbar">
      <svg
        className="searchbar-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className={`searchbar-input ${
          searchBarState !== sideBarText[sideBarState]
            ? "searchbar-input-active"
            : ""
        }`}
        type="text"
        size="50"
        value={searchBarState}
        onChange={(e) => {
          setSearchBarState(e.target.value);
        }}
        onClick={() => {
          setSearchBarState("");
        }}
        onBlur={() => setSearchBarState(sideBarText[sideBarState])}
      />
    </div>
  );
};

export default SearchBar;
