import { Link } from "react-router-dom";
import { NavbarConfig } from "../configs/NavbarConfig";
import Logo from "./Shared/Logo";
import { useState } from "react";
import { Close,Menu } from "@mui/icons-material";

const NavBar = () => {
  const [open,setOpen] = useState(false);
  const handleMenu = (e)=>{
    console.log("hello")
    setOpen(!open);
  }
  return (
    <header className="fixed w-full z-10 bg-white shadow-sm flex flex-col md:flex-row gap-4 justify-between md:items-center px-5">
      <div className="justify-self-start  md:block">
        <Logo />
      </div>
      <div className="gap-5 md:flex hidden">
        {NavbarConfig.map((curr, idx) => (
          <Link
            className="hover:scale-105 duration-300 hover:text-orange-red text-soft-black font-medium"
            key={idx}
            // to={curr.navItem}
            to={"#"}
          >
            {curr.navItem?.toUpperCase()}
          </Link>
        ))}
      </div>

      <button className="md:block hidden bg-gray-400 px-4 relative py-2 hover:before:w-full before:duration-300 before:top-0 before:left-0 rounded-md before:rounded-t-md hover:bg-transparent duration-500 hover:text-black hover:shadow-2xl text-white  font-medium after:w-0 after:bg-black hover:after:w-full after:rounded-b-md after:bottom-0 after:h-1/2 after:absolute after:right-0 after:duration-300 after:opacity-60 before:w-0 before:opacity-60 before:bg-black before:absolute before:h-1/2">
        Take Solution
      </button>
      {/* mobile */}
      <button className="bg-transparent hover:scale-105 duration-500 px-6 duration-300 delay-200 my-auto py-1 text-gray-400 absolute right-2 top-2" onClick={handleMenu}>{open?<Close/>:<Menu/>}</button>
      {open && <div className="flex z-50 duration-300 flex-col justify-around items-center w-screen  h-screen md:hidden">
      {NavbarConfig.map((curr, idx) => (
          <Link
            className="hover:scale-105 duration-300 hover:text-orange-red text-soft-black font-medium"
            key={idx}
            // to={curr.navItem}
            to={"#"}
            onClick={handleMenu}
          >
            {curr.navItem?.toUpperCase()}
          </Link>
        ))}
      </div>
      }
    </header>
  );
};

export default NavBar;
