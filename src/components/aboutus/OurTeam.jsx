import React from "react";
import { Carousel } from "react-responsive-carousel";
import engineerPic from "../../assets/1.jpg";
import secondPic from "../../assets/2.jpg";
import thirdPic from "../../assets/3.jpg";
import CustomImage from "../Shared/CustomImage";
const OurTeam = ({ imgArr = [] }) => (
  <div className="text-white py-8">
    <h4 className="text-center text-3xl my-4 text-black">Our Team</h4>
    <Carousel className="bg-white pb-2">
      {imgArr.map((item, idx) => {
        return (
          <div key={idx}>
            <CustomImage className="w-auto rounded-lg h-auto" src={item} />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default OurTeam;
