import ImageAndData from "../components/ImageAndData";
import { aboutUsConfig } from "../configs/AboutUsConfig";
// import firstImg from "../assets/about1.jpg";
// import secondImg from "../assets/about2.jpg";
// import thirdImg from "../assets/about3.jpg";
import firstImg from "../assets/home/ai1.jpg";
import secondImg from "../assets/home/ai2.jfif";
import thirdImg from "../assets/home/ai3.jfif";
console.log(firstImg);

const AboutUs = () => {
  const images = [firstImg, secondImg, thirdImg];
  return (
    <div className="bg-white">
      <div className="text-gray-600 text-4xl font-semibold text-center">
        ABOUT CADX
      </div>
      <div>
        {aboutUsConfig.map((item, idx) => {
          return (
            <ImageAndData
              key={idx}
              heading={item.heading}
              description={item.description}
              toggle={idx % 2 === 0}
              img={images[idx]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
