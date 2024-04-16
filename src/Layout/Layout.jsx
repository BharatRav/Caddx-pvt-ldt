import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { useState } from "react";
import { CircleOutlined } from "@mui/icons-material";

const Layout = ({ children }) => {
  // const [left, setLeft] = useState(0);
  // const [top, setTop] = useState(0);

  // const handleCursorAnimationLogic = (e) => {
  //   // console.log(e);
  //   // setLeft(e.clientX);
  //   // setTop(e.clientY);
  //   setLeft(e.pageX);
  //   setTop(e.pageY);
  // };
  return (
    <div
      // onWheel={handleCursorAnimationLogic}
      className="w-screen overflow-hidden overflow-x-hidden overflow-y-hidden bg-white flex relative h-full flex-col flex-start gap-0"
      // onMouseMove={handleCursorAnimationLogic}
    >
      <div className="h-[40px]">
        <NavBar />
      </div>

      {/* cursor animation */}
      {/* <span
        style={{
          position: "absolute",
          left: `${left}px`,
          top: `${top}px`,
        }}
        className={`text-yellow-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-2 w-2 duration-150 z-50`}
      >
        {<CircleOutlined />}
      </span>
      <span
        style={{
          position: "absolute",
          left: `${left}px`,
          top: `${top}px`,
        }}
        className={`text-yellow-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-2 w-2 duration-300 z-50`}
      >
        {<CircleOutlined fontSize="large" />}
      </span> */}

      {/* cursor animation */}

      <div className="w-full h-full min-h-[calc(100vh-40px)] bg-white">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
