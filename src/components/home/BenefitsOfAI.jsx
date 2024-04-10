import React from "react";
import CustomImage from "../Shared/CustomImage";
import CustomButton from "../Shared/CustomButton";
import P from "../Shared/P";
import { TechIcon } from "../Shared/icons";

const BenefitsOfAI = () => {
  const data = {
    heading:
      "Get Benefits Of Using Latest Artificial Intelligence Technologies.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    feature: [
      { icon: <TechIcon />, feat: "Complete Technology Partner" },
      { icon: <TechIcon />, feat: "Backed By 100% Customer References" },
      { icon: <TechIcon />, feat: "Fast, Scalable, & Reliable" },
      { icon: <TechIcon />, feat: "The Emerging Tech Exparts" },
    ],
  };
  return (
    <div className="flex md:flex-row flex-col gap-5 justify-between items-center mx-5 my-8">
      <div className="flex flex-col md:w-1/2 gap-2">
        <h4 className="text-black text-5xl mb-9 font-extrabold">
          {data.heading}
        </h4>
        <P>{data.paragraph}</P>
        <div className="grid grid-cols-2 mx-auto gap-4">
          {data?.feature?.map((feat, idx) => (
            <div key={idx} className="flex justify-start items-center gap-2">
              <span>{feat.icon}</span>
              <p
                className={
                  "text-base font-medium text-opacity-100 text-gray-400"
                }
              >
                {feat.feat}
              </p>
            </div>
          ))}
        </div>
        <CustomButton
          text={"Know Details"}
          className="text-white bg-orange-red w-fit self-left"
        />
      </div>
      <div>
        <CustomImage
          src={"https://fabrotics.in/assets/img/home-two/benefit-main.jpg"}
          className={"max-h-[400px]"}
        />
      </div>
    </div>
  );
};

export default BenefitsOfAI;
