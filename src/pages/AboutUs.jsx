import ImageAndData from "../components/ImageAndData";
import { aboutUsConfig } from "../configs/AboutUsConfig";

const AboutUs = () => {
  return <div className="bg-white">
    <div className="text-gray-600 text-4xl font-semibold text-center m-4">ABOUT CADXITSERVICES</div>
    <div>{aboutUsConfig.map((item,idx)=>(<ImageAndData key={idx} heading={item.heading} description={item.description} src={item.src} toggle={idx%2===0}/>))}</div>
  </div>;
};

export default AboutUs;
