import KeyConcepts from "../components/KeyConcepts";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import engineerPic from "../assets/1.jpg"
import secondPic from "../assets/2.jpg"
import thirdPic from "../assets/3.jpg"
import Hero from "../components/Hero";
import Contact from "./Contact";
import AboutUs from "./AboutUs";


const Home = () => {
  return <div>
  <div className="flex flex-col">
      <div className="bg-white mt-12 text-gray-400 text-center text-xl">
      cadx Automation
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
      </div><div className="flex flex-col w-full bg-white">
    <div className="text-white">
            <Carousel className="bg-white pb-2">
                <div>
                    <img className="w-auto h-auto max-h-[600px]" src={engineerPic} />
                    <p className="legend">Cadd machenical</p>
                </div>
                <div>
                    <img className="w-auto h-auto max-h-[600px]" src={secondPic} />
                    <p className="legend">Cadd Design</p>
                </div>
                <div>
                    <img className="w-auto h-auto max-h-[600px]" src={thirdPic} />
                    <p className="legend">Robotics</p>
                </div>
            </Carousel>
    </div>
    <div >
      <KeyConcepts/>
    </div>
  </div>;
  </div>
};

export default Home;
