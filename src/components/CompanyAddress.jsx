import React from "react";
import { IoHome } from "react-icons/io5";
import { CiSquareInfo } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const CompanyAddress = () => {
  return (
    <div className=" text-black flex flex-col gap-1 justify-start">
      <h4 className="text-center font-bold text-2xl pt-5 !justify-self-start">
        Our Located Place
      </h4>
      <div className=" flex flex-col gap-4 justify-center h-full">
        <p className="text-paragraph text-lg">
          We Are The Best in Robotics, 3D Printing, UAV, IOT & AI MOULDS &
          TOOLS(Training development)
        </p>
        <div className="flex items-center gap-2">
          <IoHome color="gray" />
          <p className="text-paragraph">
            Head Office: G-16, FIRST FLOOR, Sec 63, Noida (U.p), 201301
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CiSquareInfo color="gray" />
          <p className="text-paragraph"> info@cadx.org.in</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPhone color="gray" />
            <p className="text-paragraph">+91 8745999061</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone color="gray" />
            <p className="text-paragraph">+91 9990095923</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddress;
