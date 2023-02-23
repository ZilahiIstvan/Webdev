import React from "react";

import "./FooterPoint.scss";

const FooterPoint = (params) => {
  const { footerText } = params;
  return (
    <div className="footer_point_cont">
      <div className="footer_point">{footerText}</div>
      <div className="footer_point_underline"></div>
    </div>
  );
};

export default FooterPoint;
