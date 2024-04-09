import React from "react";
import CustomButton from "../Shared/CustomButton";
import P from "../Shared/P";
import classNames from "classnames";

const Mission = ({
  src,
  title,
  description,
  buttonText,
  buttonAction,
  buttonStyle,
  reverse,
}) => {
  return (
    <div
      className={classNames(
        "md:flex w-full gap-4 py-2",
        reverse ? "flex-row-reverse " : ""
      )}
    >
      <div className="hidden md:flex">
        <img src={src} alt="our mission" className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 max-w-2xl">
        {title && (
          <h1 className="md:text-2xl text-orange-red border-b-4 w-full border-b-orange-red">
            {title}
          </h1>
        )}
        {description && <P className={"text-justify"}>{description}</P>}
        <CustomButton
          text={buttonText ? buttonText : "get involved"}
          className={classNames("bg-orange-red text-white", buttonStyle)}
          onClick={buttonAction}
        />
      </div>
    </div>
  );
};

export default Mission;
