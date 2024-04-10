import classNames from "classnames";
import React from "react";

const CustomImage = ({ className, src }) => {
  return <img loading="lazy" className={classNames("", className)} src={src} />;
};

export default CustomImage;
