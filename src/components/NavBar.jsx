import React, { useState } from "react";
import logo from "../assets/interics logo 1.jpg";
import user from "../assets/Vector.png";
import "../index.css";
const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full hidden  xl:inline-block sticky top-0 bg-white">
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

      <div className="w-full flex justify-between p-5 border border-b-[#5D4CE6] xl:hidden sticky top-0 bg-white">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div
            className=" w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#8CD5F8] relative cursor-pointer"
            onClick={() => setShow(!show)}>
            <img className="" src={user} alt="" />
          </div>
          {show && (
            <ul className="absolute  w-full left-0 top-20 text-center bg-blue-100 m-auto transition ease-out ">
              <li
                onClick={() => setShow(false)}
                className="flex justify-end items-end mr-5 cursor-pointer">
                X
              </li>
              <li className="hover:bg-blue-200 w-full p-2">Project Tracking</li>
              <li className="hover:bg-blue-200 w-full p-2">
                Financial Management
              </li>
              <li className="hover:bg-blue-200 w-full p-2">
                 Client Management
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
