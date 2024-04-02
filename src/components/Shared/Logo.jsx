import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="m-1 cursor-pointer w-fit scale-100 hover:scale-105 ease-out duration-500 text-white bg-giants-orange font-bold px-2 py-2 rounded-sm"
    >
      Cadd<sub className="text-soft-black opacity-65 font-black">X</sub>
    </div>
  );
};

export default Logo;
