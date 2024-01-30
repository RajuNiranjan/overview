import React from "react";
import GraphCard from "./GraphCard";
import Card from "../ui/CardUI";
import Add from "../ui/AddUI";

const CardSection = () => {
  return (
    <div>
      <div className="hidden  mt-5 mx-14  xl:flex xl:justify-between items-start gap-10 ">
        <div className="flex gap-2 mt-4">
          <GraphCard />
          <div className="flex gap-3">
            <Card />
          </div>
        </div>
        <div>
          <Add />
        </div>
      </div>

      <div className="flex mb-5 justify-center items-center">
        <div className=" mt-5 flex flex-col justify-between  items-start xl:hidden ">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-4">
            <div className="sm:flex md:flex justify-center items-center gap-5">
              <GraphCard />
              <div className="hidden sm:inline-block md:inline-block">
                <Add />
              </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5">
              <Card />
            </div>
          </div>
          <div className="sm:hidden md:hidden">
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
