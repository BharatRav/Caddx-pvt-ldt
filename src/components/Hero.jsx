import React from "react";
// import heroImage from "../assets/hero/hero.jpg"
import heroImage from "../assets/home/heroImg.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className=" md:block ">
        <img src={heroImage} className="w-full h-[90vh]" />
      </div>
      <div className="bg-black flex flex-col items-center justify-center gap-5 px-12 pt-8 md:pb-0 pb-4 h-full">
        <h1 className=" text-white font-extrabold capitalize text-3xl md:text-5xl text-center">
          EMPOWERING YOUR BUSINESS WITH EXPERT CADX{" "}
        </h1>
        <p className="first-letter:capitalize text-center">
          We specialize in providing innovative technology solutions for small
          businesses.
        </p>
        <button className=" hover:opacity-80 self-end justify-self-end hover:duration-150 duration-150 capitalize text-black bg-white w-full px-6 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
