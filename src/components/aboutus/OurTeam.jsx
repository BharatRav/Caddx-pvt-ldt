import React from "react";
import { Carousel } from "react-responsive-carousel";
import engineerPic from "../../assets/1.jpg";
import secondPic from "../../assets/2.jpg";
import thirdPic from "../../assets/3.jpg";
const OurTeam = () => (
  <div className="text-white py-8">
    <h4 className="text-center text-3xl my-4 text-black">Our Team</h4>
    <Carousel className="bg-white pb-2">
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={engineerPic}
        />
        {/* <p className="legend">Amit Sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={secondPic}
        />
        {/* <p className="legend">Feroz sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Rawat Sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Bharat Sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Maneesha mam</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Simranjeet sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Ankit sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Krishna Sir</p> */}
      </div>
      <div>
        <img
          className="w-auto rounded-lg h-auto max-h-[500px]"
          src={thirdPic}
        />
        {/* <p className="legend">Sumit Sir</p> */}
      </div>
    </Carousel>
  </div>
);

export default OurTeam;
