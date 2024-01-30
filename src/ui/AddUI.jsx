import React from "react";
import AppSVG from "../svg/AppSVG";
import AppSVGGreen from "../svg/AppSVGGreen";
import AppSVGO from "../svg/AppSVGO";

const AddData = [
  {
    id: 1,
    name: "Add New Contractor",
    icon: <AppSVG />,
    color: "#9EABDD",
    bgColor: "#EBF2FF",
  },
  {
    id: 1,
    name: "Recent Updates",
    icon: <AppSVGGreen />,
    color: "#5ADDBE",
    bgColor: "#E7FFFB",
  },
  {
    id: 1,
    name: "Notifications",
    icon: <AppSVGO />,
    color: "#ED9E97",
    bgColor: "#FEECE8",
  },
];

const Add = () => {
  return (
    <>
      {AddData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-10 w-[296px] h-[73px]">
          <div className="flex items-center justify-center gap-2">
            {item?.icon}
            <div>
              <p className="text-[#3D3B3B] text-[12px] font-medium">
                {item?.name}
              </p>
            </div>
          </div>
          <div>
            <button
              className="font-normal text-[11px] bg-[#EBF2FF] w-[61px] h-[24px] rounded-full text-[#9EABDD]"
              style={{ color: item?.color, background: item?.bgColor }}>
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Add;
