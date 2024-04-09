import React from "react";
import classNames from "classnames";

const P = ({ className, children }) => {
  return (
    <p
      className={classNames(
        "text-paragraph text-justify leading-8 select-none",
        className
      )}
    >
      {children}
    </p>
  );
};

export default P;
