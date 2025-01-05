import { FaSun, FaMoon } from "react-icons/fa6";
import { NavLink } from "react-router";
import LogoImg from "../assets/logo.png";
import { useTheme } from "../hooks";

const Navbar = () => {
  const [theme, toggle] = useTheme();
  return (
    <nav className="flex items-center justify-between w-full relative boxShadow rounded-full px-[20px] py-[12px]">
      <NavLink to="/">
        <img src={LogoImg} alt="logo" className="w-[55px] " />
      </NavLink>

      <div className="items-center gap-[10px] flex">
        <NavLink
          className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex text-black dark:text-white"
          to="/docs"
        >
          Docs
        </NavLink>
        <NavLink
          className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex text-black dark:text-white"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="py-[7px] text-[1rem] px-[16px] mr-[8px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex"
          to="/download"
        >
          Download
        </NavLink>

        {theme === "dark" ? (
          <FaSun
            onClick={toggle}
            color={theme === "dark" ? "white" : "black"}
            size={30}
          />
        ) : (
          <FaMoon
            onClick={toggle}
            color={theme === "dark" ? "white" : "black"}
            size={30}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
