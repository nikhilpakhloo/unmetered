import { BiRightArrowAlt } from "react-icons/bi";
import pinksvg from "../assets/pink-color.gif";

const Whytech = () => {
  return (
    <div className="h-screen bg-white">
      <div className="h-screen bg-white w-full flex">
        <div className="w-1/2 flex  flex-col justify-center ml-32  ">
          <h1 className="text-6xl ">
            Why Technology is important for your Business{" "}
          </h1>
          <p className="mt-7 ">
            Technology has become more vital in today's competitive marketplace.
            Technology, such as website design and development, social media
            marketing, and e-commerce solutions, can help you improve
            efficiency, expand your customer base, and remain competitive. We
            recognize the potential of cutting-edge tools to improve the
            business you run. That's why we provide a comprehensive suite of
            services meant to assist you in making the most of the latest
            technology. Experts on our team diligently monitor emerging
            technologies so that we can provide you with tailor-made solutions
            that help you achieve your specific objectives. If you want to grow
            your company to the next level by using innovative solutions we're
            here to help in any way we can.
          </p>
          <div className="w-1/2 flex justify-start mt-5 mr-32 items-center gap-x-5">
            <button
              className={` flex justify-evenly items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white  hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500`}
            >
              READ MORE <BiRightArrowAlt />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center">
          <img src={pinksvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whytech;
