import React from "react";
import classNames from "classnames";

const P = ({ className, children }) => {
  return (
    <p
      className={classNames("text-paragraph  leading-7 select-none", className)}
    >
      {children}
    </p>
  );
};

export default P;
