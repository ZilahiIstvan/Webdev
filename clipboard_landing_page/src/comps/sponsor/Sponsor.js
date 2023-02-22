import React from "react";

import "./Sponsor.scss";

const Sponsor = (params) => {
  const { sponsorClass, svgIcon } = params;
  return <img className={sponsorClass} src={svgIcon} alt={svgIcon} />;
};

export default Sponsor;
