import React from "react";
import P from "../components/Shared/P";
import BrandPic from "../assets/aboutUs/Brand.png";
import OurLocationMap from "../components/Shared/OurLocationMap";
import Mission from "../components/aboutus/Mission";
import missionPic from "../assets/aboutUs/mission.jpg";
import impactPic from "../assets/aboutUs/impact.jpg";
import OurTeam from "../components/aboutus/OurTeam";

const AboutPage = () => {
  return (
    <div className="md:mt-4 px-4 md:px-8 lg:px-16 container mx-auto">
      <h1 className="text-black text-center font-bold text-2xl">About CADX</h1>
      <P className={"text-left max-w-2xl mx-auto leading-6"}>
        At CADX, we're passionate about empowering businesses with cutting-edge
        technology solutions. As a leading provider in the field of CAD
        (Computer-Aided Design) software and services, we strive to
        revolutionize the way businesses design, innovate, and create.
      </P>
      <img src={BrandPic} className="max-w-2xl mx-auto" alt="founder message" />
      <P className="max-w-2xl mx-auto text-justify mt-20 leading-8">
        Caddx Technology(Noida) Co., Ltd. is located in Noida, U.P, India. lt is
        a video solution research and development-driven enterprise with
        Automation technology as the core. lt has strong product research and
        development capabilities and product innovation concepts. Its business
        is oriented to globally Automation. <br />
        After several years of development with rapid development, CADDX has
        become a leading company in the CAD Automation industry. We are
        committed to bringing users the ultimate visual and control experience.
        we strive to develop global business, in order to better serve
        customers.
        <br /> We attach great importance to innovation and development, and a
        variety of products have achieved industry breakthroughs, which have
        greaty improved user experience. Committing to the promotion of FPV
        drone sports is our unremitting pursuit. we actively sponsor world-class
        and Indian team events. <br /> As a local young entrepreneurial team in
        India, we are full of passion and creativity, and continue to provide
        the industry with better images, more advanced digital image
        transmission and digital FPV glasses and other system equipment. We hope
        that more people will join CADx to enjoy flight, speed and Explore the
        world of HD fun. Customer Service We do our best to ensure that our
        customer service (both pre-sales and after-sales) is to your
        satisfaction. <br />
        <br />
        If you have any questions about any product, service or distributor,
        please contact us at the email below to let us know your concerns.
        <br />
        <br />R & D department：andy@caddxfpv.com
        <br />
        Partnership inquiry: jason@caddxfpv.com
        <br />
        Marketing inquiry: tina@caddxfpv.com
        <br />
        <br />
        After-sales/ Technical service: support@caddxfpv.com
        <br />
        <br />
        Order/ Shipping: service@caddxfpv.com
        <br />
        <br />
        Continue to bring better value to the FPV community, we are CADX
        Automation, let's work together for the circle we love!🥂 We are
        professional in CAD and Automation
        <br /> but we have passion and energy just like you pilots ! Welcome to
        suggest if any opinions and ideas !
      </P>
      <div className="flex flex-col gap-8">
        <Mission
          title={"Mission"}
          description={
            "Our mission is to democratize access to high-quality STEM education and hands-on experiences for all. We believe that every child, regardless of their background, should have the opportunity to explore the wonders of science, the possibilities of technology, the marvels of engineering, and the beauty of mathematics. We also encourage schools and institutions to include STEM concepts and practical learning methods into their curriculum. Our programs are designed to ignite curiosity, stimulate critical thinking, and foster a lifelong love for STEM subjects."
          }
          buttonText={"get involved"}
          buttonStyle={"w-fit"}
          src={missionPic}
          reverse={false}
        />
        <Mission
          title={"Our Impact"}
          description={
            "Over the years, with through our programs such as Robo Siksha Kendra, Gyanoday, Anusikshan and Sanrachna, we’ve made a significant impact – engaging 500K+ students and teachers, reaching over 20,000 schools, and delivering more than 6 million hours of STEM Education. Our impact is measured not only in the improved test scores of students but in their newfound confidence to ask questions, their enthusiasm for problem-solving, and their passion for innovation. Students that benefited through our programs have secured jobs with leading roles in prestigious organisations across the globe and also as STEM trainers in renowned institutions."
          }
          buttonText={"get involved"}
          buttonStyle={"w-fit"}
          src={impactPic}
          reverse={true}
        />
        <Mission
          title={"Our Pioneering Start"}
          description={
            "Our journey began with groundbreaking initiatives, by hosting the first-ever World Robot Olympiad (WRO) event in the country in 2006. In 2012, Mr. Sudhanshu Sharma founded the India STEM Foundation with an unwavering commitment to bring practical, hands-on learning experiences and STEM resources to Indian schools. Our goal has always been to revolutionize the teaching and learning practices of STEM concepts. Our pioneering efforts have not only inspired countless individuals but have also catalyzed the emergence of numerous STEM clubs and after-school institutions India the nation. We stand at the forefront of the STEM education movement in India, driving innovation, creativity, and excellence in learning."
          }
          buttonText={"get involved"}
          buttonStyle={"w-fit"}
          src={"https://bhaaraterp.s3.ap-south-1.amazonaws.com/m1.svg"}
          reverse={false}
        />
      </div>
      <OurTeam />

      <div
        className=" bg-no-repeat
bg-cover bg-[50%] bg-opacity-50
lg:bg-[url('https://bhaaraterp.s3.ap-south-1.amazonaws.com/m1.svg')]"
      >
        <OurLocationMap />
      </div>
    </div>
  );
};

export default AboutPage;
