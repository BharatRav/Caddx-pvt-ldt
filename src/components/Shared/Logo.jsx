import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="cursor-pointer w-fit scale-75 hover:scale-100 ease-in duration-500 text-white bg-giants-orange font-bold px-2 py-4 rounded-sm"
    >
      Cadd<sub className="text-soft-black opacity-65 font-black">X</sub>
    </div>
  );
};

export default Logo;
