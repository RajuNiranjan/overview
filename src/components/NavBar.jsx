import React from "react";
import logo from "../assets/interics logo 1.jpg";
import user from "../assets/Vector.png";
import "../index.css";
const NavBar = () => {
  return (
    <div className="w-full">
      <div className="h-[78px]  flex items-center justify-between border-2 border-b-[#5D4CE6] px-10">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-20">
          <div className="h-[21px] w-[298px] border-[1px] border-[#ADBFEE] rounded-2xl"></div>
          <ul className="flex items-center justify-center gap-20 text-[#373737] text-[16px] font-normal roboto">
            <li>Project Tracking</li>
            <li>Financial Management</li>
            <li> Client Management</li>
          </ul>
        </div>
        <div>
          <div className=" w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#8CD5F8]">
            <img className="" src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
