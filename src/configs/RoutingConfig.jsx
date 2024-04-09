import About from "../pages/AboutPage.jsx";
import Blog from "../pages/Blog.jsx";
import Blogs from "../pages/Blogs.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import OurPrograms from "../pages/OurPrograms.jsx";
import Placements from "../pages/Placements.jsx";
export const RoutingConfig = [
  {
    id: 0,
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    id: 1,
    name: "Our Programs",
    path: "/our-programs",
    component: OurPrograms,
  },
  {
    id: 2,
    name: "Placements",
    path: "/placements",
    component: Placements,
  },
  {
    id: 3,
    name: "Blogs",
    path: "/blogs",
    component: Blogs,
  },
  {
    id: 4,
    name: "Blog",
    path: "/blogs:blogId",
    component: Blog,
  },
  {
    id: 5,
    name: "About Us",
    path: "/aboutus",
    component: About,
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact_us",
    component: Contact,
  },
];
