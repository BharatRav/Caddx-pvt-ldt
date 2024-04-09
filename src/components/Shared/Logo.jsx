import { useNavigate } from "react-router-dom";
import logo from "../../assets/cadx_logo.png"
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="m-1 cursor-pointer w-fit scale-100 hover:scale-105 ease-out duration-500 text-white font-bold px-2 py-2 rounded-sm"
    >
      {/* CAD<sub className="text-soft-black opacity-65 font-black">X</sub> */}
      <img src={logo} className="lg:h-8 md:h-7 h-3"/>
    </div>
  );
};

export default Logo;
