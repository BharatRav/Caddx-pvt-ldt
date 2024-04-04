import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import {useState} from 'react'
import {CircleOutlined} from "@mui/icons-material";

const Layout = ({ children }) => {
  const [left,setLeft]=useState(0);
  const [top,setTop]=useState(0);
  const handleCursorAnimationLogic  = e => {
    console.log(e.clientX,e.clientY)
    setLeft(e.clientX);
    setTop(e.clientY);
  }
  return (
    <div className="w-full bg-white h-full flex relative flex-col flex-start gap-0" onMouseMove={handleCursorAnimationLogic}>
      <div className="max-h-10">
        <NavBar />
      </div>
      <div  style={{
                        position: "absolute",
                        left: `${left}px`,
                        top: `${top}px`,
                      }}
                       className= {`text-yellow-500 h-8 w-2 duration-100 z-50`}>{<CircleOutlined/>}</div>
      <div className="flex flex-col">
      <div className="bg-white mt-12 text-gray-400 text-center text-xl">
      cadxitservices
      </div>
      <div>
        <Hero/>
      </div>
        <div>
        <Contact/>
        </div>
        <div>
        <AboutUs/>
        </div>
      </div>
      <div className="w-full h-full min-h-screen mt-10 bg-white">{children}</div>
      <div><Footer/></div>
    </div>
  );
};

export default Layout;
