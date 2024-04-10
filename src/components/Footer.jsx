import React from "react";
import { footerConfig } from "../configs/FooterConfig";
import { VerticalAlignBottom } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="px-4 bg-gray-800">
      <div className="md:grid-cols-2 grid grid-cols-1  text-white border-b-2 border-b-gray-700">
        <h4 className="text-2xl font-semibold">
          Top companies choose Caddx to learn in-demand career skills.
        </h4>
        <div className="flex gap-4 justify-center">
          <span>Nasdaq</span>
          <span>box</span>
          <span>nexApp</span>
          <span>evenbrite</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:text-left text-center gap-2 py-4">
        {footerConfig.map((item, idx) => (
          <span
            key={idx}
            className="cursor-pointer hover:translate-x-3 duration-300 hover:text-orange-red select-none font-medium hover:font-semibold hover:opacity-60"
          >
            {item?.title}
          </span>
        ))}
      </div>
      <div>
        <p className="text-center">
          Copyright © 2024 by the CADx Community and the CADX R&D.
        </p>
        <p className="text-center cursor-pointer select-none hover:text-blue-300">
          Privacy policy | Imprint
        </p>
      </div>
    </footer>
  );
};

export default Footer;
