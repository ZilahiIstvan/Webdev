import React from "react";

import "./SectionText.scss";

const SectionText = (params) => {
  const {
    sectionTextTitleClass,
    sectionTextTitleText,
    sectionTextCommentClass,
    sectionTextComment,
    sectionContClass,
  } = params;
  return (
    <div className={sectionContClass}>
      <div className={sectionTextTitleClass}>{sectionTextTitleText}</div>
      <div className={sectionTextCommentClass}>{sectionTextComment}</div>
    </div>
  );
};

export default SectionText;
