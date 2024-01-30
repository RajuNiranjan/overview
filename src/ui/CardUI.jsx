import React from "react";
import UserSVG from "../svg/UserSVG";
import ClipBoardSVG from "../svg/ClipBoardSVG";
import SettingsSVG from "../svg/SettingsSVG";

const CardData = [
  {
    id: 1,
    headingOne: "Contractor",
    headingTwo: "Onboarding",
    icon: <UserSVG />,
    bgColor: "#E5DEF0",
    infoOne: "Click to expand for",
    infoTwo: "detailed steps and",
    infoThree: "guidelines",
  },
  {
    id: 2,
    headingOne: "Compliance",
    headingTwo: "Checks",
    icon: <ClipBoardSVG />,
    bgColor: "#FFF7D6",
    infoOne: "Ckick fro expand for",
    infoTwo: "detailed compliance",
    infoThree: "checks and standards",
  },
  {
    id: 3,
    headingOne: "Intefration",
    headingTwo: "with Other",
    headingThree: "System",
    icon: <SettingsSVG />,
    bgColor: "#D4F4D8",
    infoOne: "Click ro expand for",
    infoTwo: "detailed steps and",
    infoThree: "guidelines",
  },
  {
    id: 4,
    headingOne: "Access",
    headingTwo: "Control",
    icon: <UserSVG />,
    bgColor: "#F0DEEB",
    infoOne: "Ckick ro expand for",
    infoTwo: "detiled access control",
    infoThree: "mechanisms and",
    infour: "settings",
  },
];

const Card = () => {
  return (
    <>
      {CardData.map((item, index) => (
        <div
          key={index}
          className="w-[133px] h-[157px] rounded-[10px] py-2 px-2 flex flex-col justify-between"
          style={{ background: item?.bgColor }}>
          <div className="flex  justify-center gap-3">
            <div>
              <ul className="text-[#3D3B3B] text-[12px] font-medium">
                <li>{item?.headingOne}</li>
                <li>{item?.headingTwo}</li>
                <li>{item?.headingThree}</li>
              </ul>
            </div>
            <div className="flex justify-center items-center rounded-full  text-white bg-white h-[37px] w-[37px]">
              {item?.icon}
            </div>
          </div>
          <ul className="text-[#747070] font-normal text-[11px] ">
            <li>{item?.infoOne}</li>
            <li>{item?.infoTwo}</li>
            <li>{item?.infoThree}</li>
            <li>{item?.infour}</li>
          </ul>
          <div>
            <button className="text-[11px] font-normal w-[78px] h-[24px] bg-[#5A5858] rounded-[26px] text-white flex items-center justify-center ml-[38px]">
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
