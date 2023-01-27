import React from "react";

import TechnologyImagePanel from "../../../../Components/TechnologyImagePanel";
import TechnologyInfoPanel from "../../../../Components/TechnologyInfoPanel";
import { GetCategoriesWithData } from "../../../../lib/SharedData";

type Props = {};

const Page = async (props: Props) => {
  const categoriesData = await GetCategoriesWithData();
  return (
    <div
      className="relative flex h-full w-full
        flex-1  flex-col items-center   gap-4 pt-12  md:pt-6 lg:flex-row
         lg:items-end lg:justify-between lg:gap-0 lg:py-8 lg:pl-28 "
    >
      <div
        className="order-last flex w-[50%] flex-col justify-center  gap-4 text-center 
      lg:order-first lg:h-full lg:w-[50%]  lg:flex-row  lg:justify-start lg:gap-12    lg:text-left  "
      >
        <TechnologyInfoPanel categoriesWithData={categoriesData} />
      </div>
      <div className=" relative h-[35%]  w-full md:h-[50%] lg:h-full lg:w-[40%] ">
        <TechnologyImagePanel categoriesWithData={categoriesData} />
      </div>
    </div>
  );
};

export default Page;
