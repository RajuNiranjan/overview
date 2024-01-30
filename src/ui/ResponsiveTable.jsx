import React from "react";

const HeadData = [
  {
    head1: "Contractor",
    head2: "Services Type",
    head3: "Contact Info",
    head4: "Active Projects",
    head5: "Preformance Rating",
  },
];

const BodyData = [
  {
    data1: "GreenScape Designers",
    data2: "Landscape Design",
    data3: "contact@greenscape.com, +91 123-555-0102",
    data4: 3,
    data5: "4.5/5",
  },
  {
    data1: "BrightWatt Electricals",
    data2: "Electrical Installation and Maintenance",
    data3: "support@brightwatt.com, +91 456-555-0234",
    data4: 5,
    data5: "4.7/5",
  },
  {
    data1: "StoneWorks Inc.",
    data2: "Masonry and Stone Supply",
    data3: "sales@stoneworks.com, +91 789-555-0345",
    data4: 4,
    data5: "4.6/5",
  },
  {
    data1: "AquaFlow Plumbing",
    data2: "Plumbing Services",
    data3: "service@aquaflow.com, +91 098-555-0467",
    data4: 5,
    data5: "4.8/5",
  },
  {
    data1: "GreenScape Designers",
    data2: "Landscape Design",
    data3: "contact@greenscape.com, +91 123-555-0102",
    data4: 3,
    data5: "4.5/5",
  },
  {
    data1: "BrightWatt Electricals",
    data2: "Electrical Installation and Maintenance",
    data3: "support@brightwatt.com, +91 987-555-0234",
    data4: 5,
    data5: "4.7/5",
  },
  {
    data1: "StoneWorks Inc.",
    data2: "Masonry and Stone Supply",
    data3: "sales@stoneworks.com, +91 456555-0345",
    data4: 4,
    data5: "4.6/5",
  },
  {
    data1: "AquaFlow Plumbing",
    data2: "Plumbing Services",
    data3: "service@aquaflow.com, +91 127555-0467",
    data4: 5,
    data5: "4.8/5",
  },
];

const ResponsiveTable = () => {
  return (
    <div className=" mx-5  xl:hidden ">
      <div className=" my-10 w-[380px] lg:w-[1000px] sm:w-[650px] md:w-[730px]">
        {HeadData?.map((item, index) => (
          <ul
            className="grid grid-cols-6 md:grid-cols-9 sm:col-span-8 text-center text-[#373737] font-normal text-[16px]"
            key={index}>
            <li className=" text-[12px] col-span-2 md:col-span-3">
              {item?.head1}
            </li>
            <li className=" text-[12px] col-span-2 md:col-span-3">
              {item?.head2}
            </li>
            <li className=" text-[12px] col-span-2 md:col-span-3">
              {item?.head3}
            </li>
            <li className="text-[12px] hidden sm:col-span-2">{item?.head4}</li>
            <li className="text-[12px] hidden sm:col-span-2">{item?.head5}</li>
          </ul>
        ))}
        <div className="flex flex-col gap-2 my-2">
          {BodyData?.map((item, index) => (
            <ul
              key={index}
              className="grid grid-cols-6 md:grid-cols-9 sm:col-span-8  border text-center h-[54px] py-1 rounded-[6px] border-[#90E0EE] text-[#3D3B3B] text-[15px] font-light">
              <li className="text-[10px] col-span-2  md:col-span-3 text-ellipsis overflow-hidden">
                {item?.data1}
              </li>
              <li className="text-[10px] col-span-2 md:col-span-3  text-ellipsis overflow-hidden text-left">
                {item?.data2}
              </li>
              <li className="text-[10px] col-span-2  md:col-span-3 text-ellipsis overflow-hidden text-left">
                {item?.data3}
              </li>
              <li className="text-[10px] hidden sm:col-span-2 text-ellipsis overflow-hidden text-left">
                {item?.data4}
              </li>
              <li className="text-[10px] hidden sm:col-span-2 text-ellipsis overflow-hidden text-left">
                {item?.data5}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
