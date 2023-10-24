import { useEffect, useState } from "react";
import bgvideo from "../assets/myvideo.mp4";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import WeBuild from "./WeBuild";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="fixed inset-0 w-full h-full object-cover -z-10 "
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div
          className={`flex items-center h-20 ${
            sticky ? "sticky top-1 bg-black text-white fixed" : "false"
          }`}
        >
          <div className="w-1/2 flex justify-start ml-32">
            <h1 className={`text-4xl  text-white ${isMenuOpen ? "z-10 " : ""}`}>
              Unmetered
            </h1>
          </div>
          <div className="w-1/2 flex justify-end mr-32 items-center gap-x-5">
            <button
              className={` flex justify-evenly items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full text-white  hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 bg   ${
                isMenuOpen ? "z-10" : ""
              } `}
            >
              HIRE US <BiRightArrowAlt />
            </button>
            <a
              className={`text-white ${isMenuOpen ? "z-10" : ""}`}
              onClick={toggleMenu}
            >
              <HiOutlineMenuAlt3 style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black text-white transition-all duration-1000">
            {/* Add your menu items and styling here */}
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        )}

        <div className="flex flex-col w-full mt-40">
          <div className="flex w-1/2 justify-start flex-col ml-32">
            <h1 className="text-6xl font-bold text-white ">
              Your Technology Partner
            </h1>
            <p className="mt-4 text-white  w-3/4">
              Digital marketing needs? Look no farther than Unmetered
              Technologies LLP. Our team of experts is committed to ensuring the
              online success of companies of all sizes. We provide a variety of
              options, each of which may be adapted to meet your specific
              requirements. We believe that effective results are the result of
              open conversation and collaboration.
            </p>
            <button className=" flex justify-center item-center bg-gradient-to-r from-indigo-500 vis-purple-500 to-pink-500  text-white px-2 py-2 rounded-full  mt-6 w-[300px] hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 ">
              <div>START THE CONVERSATION</div>
              <div className="ml-3 mt-1">
                <BiRightArrowAlt />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
