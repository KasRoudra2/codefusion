import React from "react";

const Button = ({ variant, color, children }) => {
  let classes =
    "px-6 py-2 border hover:text-primary transition duration-300 rounded";
  let cc = "";
  switch (color) {
    case "primary":
      cc = "#3B9DF8";
      break;
    case "secondary":
      cc = "#3E3939";
      break;
    default:
      cc = "#3B9DF8";
      break;
  }
  switch (variant) {
    case "filled":
      classes += `border-[${cc}] bg-[${cc}] text-[#ffffff] hover:bg-[#ffffff]`;
      break;
    case "outlined":
      classes += `border-[${cc}] hover:bg-[${cc}] text-[${cc}] hover:text-[#ffffff]`;
    default:
      classes += `border-[${cc}] bg-[${cc}] text-[#ffffff] hover:bg-[#ffffff]`;
      break;
  }
  return <button className={classes}>{children}</button>;
};

export default Button;
