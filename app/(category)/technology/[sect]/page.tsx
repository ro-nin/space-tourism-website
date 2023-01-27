import React from "react";
import DestinationInfoPanel from "../../../../Components/DestinationInfoPanel";
import TechnologyImagePanel from "../../../../Components/TechnologyImagePanel";
import { GetCategoriesWithData } from "../../../../lib/SharedData";

type Props = {};

const Page = async (props: Props) => {
  const categoriesData = await GetCategoriesWithData();
  return (
    <div
      className="relative flex h-full w-full
        flex-1  flex-col items-center   gap-4 pt-12  md:pt-6 lg:flex-row
         lg:items-end lg:justify-around lg:gap-0 lg:py-6 "
    >
      <div className="order-last flex w-[80%] flex-col justify-center  gap-4 text-center lg:order-first lg:h-full lg:w-[55%]  lg:flex-row  lg:justify-start lg:gap-12 lg:pl-28   lg:text-left ">
        <div>nav</div>
        <div>content</div>
      </div>
      <div className=" relative aspect-auto h-[55%] w-full md:h-full lg:w-[45%] ">
        <TechnologyImagePanel categoriesWithData={categoriesData} />
      </div>
    </div>
  );
};

export default Page;
