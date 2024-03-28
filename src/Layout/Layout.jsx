import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col flex-start bg-blue-300 py-7">
      <div>
        <NavBar />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
