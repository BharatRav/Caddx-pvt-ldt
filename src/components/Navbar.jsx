import { Link } from "react-router-dom";
import { NavbarConfig } from "../configs/NavbarConfig";
import Logo from "./Shared/Logo";

const NavBar = () => {
  return (
    <header className="fixed w-full z-10 bg-white shadow-sm flex gap-4 justify-between items-center px-5">
      <div className="justify-self-start">
        <Logo />
      </div>
      <div className="flex gap-5">
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

      <button className="bg-gray-400 px-4 relative py-2 hover:before:w-full before:duration-300 before:top-0 before:left-0 rounded-md before:rounded-t-md hover:bg-transparent duration-500 hover:text-black hover:shadow-2xl text-white  font-medium after:w-0 after:bg-black hover:after:w-full after:rounded-b-md after:bottom-0 after:h-1/2 after:absolute after:right-0 after:duration-300 after:opacity-60 before:w-0 before:opacity-60 before:bg-black before:absolute before:h-1/2">
        Take Solution
      </button>
    </header>
  );
};

export default NavBar;
