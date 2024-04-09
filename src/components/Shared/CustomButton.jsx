import classNames from "classnames";
import React from "react";

const CustomButton = ({
  text,
  className = "",
  onClick = () => console.log("hello"),
}) => {
  return (
    <button
      className={classNames(
        "capitalize cursor-pointer select-none hover:opacity-80 rounded-md px-9 py-2",
        className
      )}
    >
      {text}
    </button>
  );
};

export default CustomButton;
