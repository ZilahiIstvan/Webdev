import React from "react";

import LazyLoad from "react-lazyload";
import Svg from "../../../svgs/Svg";

import "./Item.scss";

const Item = (props) => {
  const { id, img, year, type, rating, title, itemType } = props;
  const { Movie, Series, Bookmark } = Svg;

  return (
    <div
      key={id}
      className={`item ${
        itemType !== "trending"
          ? "item-flex-modifier"
          : "item-trending-modifier"
      }`}
    >
      <div className="item-img-container">
        <LazyLoad once>
          <img src={img} alt={title} className="item-img" />
        </LazyLoad>
      </div>
      <div
        className={`item-text-container ${
          itemType !== "trending" ? "" : "item-trending-modifier-text-container"
        }`}
      >
        <div className="item-container">
          <span className="item-container-year">{year}</span>
          <span className="item-container-circle">&middot;</span>
          {type === "Movie"
            ? Movie("item-container-symbol", 1.5)
            : Series("item-container-symbol", 1.5)}
          <span className="item-container-type">{type}</span>
          <span className="item-container-circle">&middot;</span>
          <span className="item-container-rate">{rating}</span>
        </div>
        <span className="item-text">{title}</span>
      </div>
      <div className="item-bookmark">{Bookmark("item-bookmark-symbol", 2)}</div>
    </div>
  );
};

export default Item;
