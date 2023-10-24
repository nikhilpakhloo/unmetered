import bluesvg from "../assets/blue-circle.gif";
import { BiRightArrowAlt } from "react-icons/bi";

const WeBuild = () => {
  return (
    <>
  
    <div className="h-screen bg-white w-full flex">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <img src={bluesvg} alt="" />
      </div>
      <div className="w-1/2 flex flex flex-col justify-center  ">
        <h1 className="text-6xl ">
          We build Your Brand and generate leads & opportunities.
        </h1>
        <p className="mt-7 w-3/4">
          Our expertise is in assisting businesses in developing enduring brands
          and attracting the kind of high-quality leads and prospects that fuel
          sustained expansion and long-term achievement. If you want to stand
          out from the crowd and connect with your target audience, go no
          further than our professional team. We take the time to learn about
          your business and its objectives in order to craft a thorough branding
          plan that accurately represents your brand.
        </p>
        <div className="w-1/2 flex justify-start mt-5 mr-32 items-center gap-x-5">
          <button
            className={` flex justify-evenly items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white  hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500`}
          >
            READ MORE <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default WeBuild;
