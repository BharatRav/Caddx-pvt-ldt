import { Link } from "react-router-dom";
import { NavbarConfig } from "../configs/NavbarConfig";
import Logo from "./Shared/Logo";
import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import NavRecursion from "./navbar/NavRecursion";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = (e) => {
    setOpen(!open);
  };
  return (
    <header className="fixed w-full z-10 gradient bg-gradient-to-br from-white to-[#f6f6f6]  bg-white shadow-lg flex flex-col md:flex-row gap-4 justify-between md:items-center px-5">
      <div className="justify-self-start bg-white  md:block">
        <Logo />
      </div>
      <div className="gap-5 relative md:flex hidden">
        {NavbarConfig.map((curr, idx) => {
          return (
            <div key={idx} className="relative group">
              <div className="flex justify-between items-center">
                <Link
                  className="hover:scale-105 duration-300 group-hover:text-orange-red hover:text-orange-red text-soft-black text-sm text-center font-medium"
                  key={idx}
                  to={curr.navLink}
                >
                  {curr.navItem?.toUpperCase()}
                </Link>
                {curr?.children && <RiArrowDropDownLine color="black" />}
              </div>

              {curr?.children && (
                <div className="bg-white group-hover:grid grid-cols-2 min-w-96 grid-row-2 gap-5 hidden absolute text-black">
                  {curr?.children?.map((child, cidx) => {
                    return (
                      <div key={cidx} className="whitespace-nowrap p-2">
                        <p className="whitespace-nowrap font-medium opacity-80">
                          {child.navItem}
                        </p>
                        <div className="ml-4">
                          {child.children?.map((cchild, ccidx) => (
                            <Link
                              key={ccidx}
                              to={cchild.navLink}
                              className=" hover:bg-orange-red text-opacity-80 hover:text-white rounded-lg active:bg-pink-400 flex gap-0.5 justify-start items-center p-2"
                            >
                              <FaChevronRight
                              // color="black"
                              // className="opacity-25 hover:opacity-100"
                              />
                              <p>{cchild.navItem}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className="md:block text-sm hidden bg-gray-400 px-4 relative py-2 hover:before:w-full before:duration-300 before:top-0 before:left-0 rounded-md before:rounded-t-md hover:bg-transparent duration-500 hover:text-black hover:shadow-2xl text-white  font-medium after:w-0 after:bg-black hover:after:w-full after:rounded-b-md after:bottom-0 after:h-1/2 after:absolute after:right-0 after:duration-300 after:opacity-60 before:w-0 before:opacity-60 before:bg-black before:absolute before:h-1/2">
        Take Solution
      </button>
      {/* mobile */}
      <button
        className="bg-transparent hover:scale-105 md:hidden px-6 duration-1000 delay-200 my-auto py-1 text-gray-400 absolute right-1"
        onClick={handleMenu}
      >
        {open ? <Close /> : <Menu />}
      </button>
      {open && (
        <div className="flex z-50 duration-300 flex-col justify-around items-center w-screen  h-screen md:hidden">
          {NavbarConfig.map((curr, idx) => (
            <Link
              className="hover:scale-105 duration-300 hover:text-orange-red text-soft-black font-medium"
              key={idx}
              to={curr.navLink}
              onClick={handleMenu}
            >
              {curr.navItem?.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
