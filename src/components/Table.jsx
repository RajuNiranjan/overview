import React from "react";
import DownArrowSVG from "../svg/DownArrowSVG";
import MenuSVG from "../svg/MenuSVG";
import TableUI from "../ui/TableUI";

const Table = () => {
  return (
    <div className="px-14">
      <div className="flex items-center gap-1">
        <h1 className="text-[#5A5858] text-2xl font-normal">
          Contractor <span className="font-semibold">Overview</span>
        </h1>
        <div className="flex justify-center items-center border gap-2 border-[#5ADDBE] rounded-md px-1">
          <p className="text-[#3D3B3B] font-normal  text-[15px]">
            service type
          </p>
          <DownArrowSVG />
        </div>
        <div className="ml-5">
          <MenuSVG />
        </div>
      </div>
      <div>
        <TableUI />
      </div>
    </div>
  );
};

export default Table;
