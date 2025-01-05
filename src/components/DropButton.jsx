import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropButton = ({text, options}) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleOptionClick = (item) => {
    setIsButtonActive(false);
    window.open(item.url, "_blank")
  };

  return (
    <div className="flex items-center rounded bg-[#3B9DF8] border-none outline-none text-secondary justify-between relative">
      <button className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
        {text}
      </button>

      <div
        onClick={() => setIsButtonActive(!isButtonActive)}
        className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton"
      >
        <MdKeyboardArrowDown className="text-[2rem]" />
      </div>

      <ul
        className={`${
          isButtonActive
            ? "opacity-100 z-20 translate-y-0"
            : " opacity-0 z-[-1] translate-y-[-5px]"
        } publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-green-500 absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}
      >
        {options?.map((item, index) => (
          <li
            className="py-2 px-6 hover:bg-green-900 rounded-t cursor-pointer text-bw border-b-2 border-b-green-400"
            key={item.name}
            onClick={() => handleOptionClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropButton;
