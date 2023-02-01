import React from "react";

import ItemsList from "../itemsList/ItemsList";

import "./Gallery.scss";

function Gallery(props) {
  const { data, title } = props;

  return (
    <div className="gallery">
      <div className="gallery-title">{title}</div>
      <div className="gallery-container">
        <ItemsList data={data} />
      </div>
    </div>
  );
}

export default Gallery;
