import React from "react";
import CrewImagePanel from "../../../../Components/CrewImagePanel";
import CrewInfoPanel from "../../../../Components/CrewInfoPanel";
import DestinationInfoPanel from "../../../../Components/DestinationInfoPanel";
import { GetCategoriesWithData } from "../../../../lib/SharedData";

type Props = {};

const Page = async (props: Props) => {
  const categoriesData = await GetCategoriesWithData();
  return (
    <div
      className="relative flex h-full 
        w-full  flex-1 flex-col items-center  justify-end gap-4  pt-12 md:pt-6
         lg:flex-row lg:items-end lg:justify-around lg:gap-0 "
    >
      <div className="order-last w-[80%]   md:order-first lg:h-full lg:w-[45%] ">
        <CrewInfoPanel categoriesWithData={categoriesData} />
      </div>
      <div className=" relative aspect-auto h-[55%] w-full md:h-full lg:w-[55%] ">
        <CrewImagePanel categoriesWithData={categoriesData} />
      </div>
    </div>
  );
};

export default Page;
