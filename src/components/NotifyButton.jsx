import { useState } from "react";

import { MdOutlineDone } from "react-icons/md";

const Notification = ({ title, text, btn, callback }) => {
  const [autoClose, setAutoClose] = useState(false);

  const handleAutoClose = () => {
    callback();
    setAutoClose(true);
    setTimeout(() => {
      setAutoClose(false);
    }, 3000);
  };

  return (
    <>
      <div className=" w-full text-center flex justify-center gap-[20px]">
        <button
          className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex"
          onClick={handleAutoClose}
        >
          {btn}
        </button>
      </div>

      {/* auto close notification */}
      <div
        className={` ${
          autoClose ? "translate-y-0" : "translate-y-[100px]"
        } transition-all duration-300  rounded-md bg-blue-300 fixed bottom-[20px] right-[20px] z-30 text-text notificationShadow border border-gray-200 flex items-start justify-between px-5 py-4 gap-[10px]`}
      >
        <div className="flex items-start gap-[10px]">
          <MdOutlineDone className="text-green-500 text-[1.3rem] mt-0.5 border border-green-500 rounded-full p-0.5" />
          <div>
            <h3 className="text-[1rem] font-[600] text-bw">{title}</h3>
            <p className="text-[0.8rem] text-bw">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
