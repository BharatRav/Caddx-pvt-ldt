import { Link } from "react-router-dom";
import { NavbarConfig } from "../configs/NavbarConfig";
import Logo from "./Shared/Logo";

const NavBar = () => {
  return (
    <div className="fixed w-full z-10 bg-white shadow-sm flex gap-4 justify-between items-center px-5">
      <div className="justify-self-start">
        <Logo />
        <button className="bg-gray-400 rounded-md hover:shadow-2xl text-white  font-medium hover:text-white hover:before:bg-soft-black before:absolute before:h-1/2 before:animate-[left-to-right-fill_1s_ease-in-out_infinite] relative">
          Take Solution
        </button>
      </div>
      <div className="flex gap-5">
        {NavbarConfig.map((curr, idx) => (
          <Link
            className="hover:scale-125 duration-300 hover:border-b-4 text-soft-black font-medium"
            key={idx}
            to={curr.navItem}
          >
            {curr.navItem?.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* <button className="bg-gray-400 px-4 py-2 rounded-md hover:shadow-2xl text-white  font-medium hover:text-white hover:before:bg-red-400 before:absolute before:h-1/2 before:animate-[left-to-right-fill_1s_ease-in-out_infinite]">
        Take Solution
      </button> */}
    </div>
  );
};

export default NavBar;
