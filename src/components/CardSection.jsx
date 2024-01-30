import React from "react";
import GraphCard from "./GraphCard";
import Card from "../ui/CardUI";
import Add from "../ui/AddUI";

const CardSection = () => {
  return (
    <div className="mt-5 mx-14  flex justify-between items-start">
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
  );
};

export default CardSection;
