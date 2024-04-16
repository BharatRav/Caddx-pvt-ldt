import React from "react";
import { Carousel } from "react-responsive-carousel";
import CustomImage from "../Shared/CustomImage";
const OurTeam = ({ imgArr = [] }) => (
  <div className="text-white py-8">
    <h4 className="text-center text-3xl my-4 text-black">Our Team</h4>
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showIndicators={true}
      className="bg-white pb-2"
    >
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
