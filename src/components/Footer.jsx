
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import BgImg1 from "../assets/bg1.png";
import BgImg2 from "../assets/bg2.png";

const Footer = () => {
  return (
    <footer className="boxShadow rounded-xl w-full p-3 lg:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">

        <p className="text-[0.9rem] text-center sm:text-start text-gray-600">
          
        </p>

        <button className="py-1 px-6 rounded-full bg-primary text-white">
          Contact Us
        </button>

        <div className="flex gap-[15px] text-black mt-4 lg:mb-24">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full text-white dark:text-black bg-black dark:bg-white boxShadow" href="https://facebook.com">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-white dark:text-black bg-black dark:bg-white boxShadow" href="https://x.com">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-white dark:text-black bg-black dark:bg-white boxShadow" href="https://instagram.com">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-white dark:text-black bg-black dark:bg-white boxShadow" href="https://linkedin.com">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
        <p className="text-[0.9rem] text-gray-300 w-full text-center">
          CodeFusion <span className="pt-4">&copy;</span>2024 All Rights Reserved
        </p>

        <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
      </div>

      <img
        src={BgImg1}
        alt="background/image"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl w-[100vw]"
      />
      <img
        src={BgImg2}
        alt="background/image"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl bg-contain w-[100vw]"
      />
    </footer>
  );
};

export default Footer;
