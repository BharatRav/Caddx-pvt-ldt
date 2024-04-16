import React from "react";
import KeyConceptCard from "./KeyConceptCard";
import { KeyConceptConfig } from "../configs/KeyConceptConfig";

const KeyConcepts = () => {
  return (
    <div className="bg-white flex gap-8 flex-col mx-auto py-5 px-4">
      <div className="flex flex-col gap-2 mt-5">
        <h2 className="font-bold text-4xl text-black">
          Transformative learning for every team
        </h2>
        <p className="text-gray-400">
          We meet all your learning needs, so you don’t have to spend time
          managing multiple providers.
        </p>
      </div>
      <div className=" grid mx-auto sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
        {KeyConceptConfig.map((item, idx) => (
          <KeyConceptCard
            key={idx}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyConcepts;
