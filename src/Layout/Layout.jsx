import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col flex-start gap-0">
      <div className="max-h-10">
        <NavBar />
      </div>
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
