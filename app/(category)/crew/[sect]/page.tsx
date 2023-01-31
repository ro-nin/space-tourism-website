import React from "react";
import CrewImagePanel from "./CrewImagePanel";
import CrewInfoPanel from "./CrewInfoPanel";
import DestinationInfoPanel from "../../destinations/[sect]/DestinationInfoPanel";
import { GetCategoriesWithData } from "../../../../lib/SharedData";

type Props = {};

const Page = async (props: Props) => {
  const categoriesData = await GetCategoriesWithData();
  return (
    <div
      className="relative flex h-full 
        w-full  flex-1 flex-col items-center  justify-center gap-8  pt-8 
        md:pt-6
         lg:flex-row lg:items-end lg:justify-start lg:gap-0 lg:pl-28"
    >
      <div className="order-last w-[80%]   md:order-first lg:h-full lg:w-[40%] ">
        <CrewInfoPanel categoriesWithData={categoriesData} />
      </div>
      <div className=" relative h-[55%] w-full flex-1 md:h-full lg:w-auto ">
        <CrewImagePanel categoriesWithData={categoriesData} />
      </div>
    </div>
  );
};

export default Page;
