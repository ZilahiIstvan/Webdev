import React from "react";

import "./Tag.scss";

const Tag = (props) => {
  const { tagText } = props;
  return <div className="tag_cont">{tagText}</div>;
};

export default Tag;
