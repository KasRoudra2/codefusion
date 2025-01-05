import { FaPlay } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { NavLink } from "react-router";
import SSImg from "../assets/ss.jpg";

const features = [
  "AutoSuggestion",
  "AutoComplete",
  "Auto Indentation",
  "Code HighLighting",
  "Code Folding",
  "Line Numbering",
];

const Hero = () => {
  return (
    <div className="w-full h-full rounded-md">
      {/* header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
        <div className="p-8 pb-[100px] w-full lg:w-[50%]">
          <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500] text-black dark:text-white">
            Unleash your coding skill
          </h1>
          <p className="text-[16px] mt-2  text-black dark:text-white">
            A complete code editor with enhanced AI support to make you focused
            on creativity and productivity.
          </p>

          <div className="flex items-center flex-wrap gap-[20px] mt-6">
            <NavLink
              className="py-2 px-6 min-w-fit bg-[#3B9DF8] rounded-full hover:bg-transparent hover:border-[#64BCAE] hover:text-[#64BCAE]  transition-all duration-200 border text-white"
              to={"/docs"}
            >
              Docs
            </NavLink>

            <NavLink
              className="bg-[#1E7E34] min-w-fit rounded-full py-1.5 px-2 flex items-center gap-[10px]"
              to={"https://www.youtube.com/watch?v=5HqfjQ_0IK0"}
              target="_blank"
            >
              <FaPlay className="text-white bg-[#64BCAE] rounded-full py-2 text-[2rem]" />
              Watch Tutorial
            </NavLink>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5 px-5">
          <img className="border border-amber-950" src={SSImg} />
        </div>
      </header>
      <div className="mt-8 w-full p-8 flex justify-center flex-col">
        <h2 className="font-bold text-3xl mb-4 left-8">Key Features</h2>
        {features.map((feature) => (
          <div className="pb-1 flex gap-2">
            <FcOk className="inline mt-1" />
            <div className="font-sans text-bw">{feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
