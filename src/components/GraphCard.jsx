import React from "react";
import "../index.css";
import graph from "../assets/graph.png";

const GraphCard = () => {
  return (
    <div>
      <div className="w-[251px] h-[157px] object-fill bg-[#E5F1FD] rounded-[10px] flex flex-col justify-between overflow-hidden">
        <div className="text-[11px] text-[#747070] font-normal roboto flex justify-between p-5 items-center">
          <div>
            <p>Click to expand for </p>
            <p>detailed reporting and</p>
            <p>analytics information</p>
          </div>
          <div>
            <button className="bg-[#5A5858] rounded-xl w-[78px] h-[24px] text-white font-normal text-[11px] roboto text-center">
              View Details
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={graph} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
