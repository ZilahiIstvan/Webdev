import React from "react";

import "./ItemIcon.scss";

const ItemIcon = (props) => {
  const { icon, iconStyle } = props;
  return (
    <img
      src={require(`../../../imgs/${icon}.png`)}
      alt={icon}
      className={iconStyle}
    />
  );
};

export default ItemIcon;
