import React from "react";
import DestinationImagePanel from "./DestinationImagePanel";
import DestinationInfoPanel from "./DestinationInfoPanel";
import { GetCategoriesWithData } from "../../../../lib/SharedData";

type Props = {};

const Page = async (props: Props) => {
  const sectionsData = await GetCategoriesWithData();
  return (
    <div
      className=" mx-auto my-auto flex h-full w-[80%] flex-col items-center justify-center
         gap-6 py-8 transition-all  lg:h-[80%] lg:w-full lg:flex-row 
        lg:items-stretch lg:justify-center lg:gap-24"
    >
      <div className="relative h-[40%] min-h-[6em] w-[80%]  lg:h-full lg:w-[30%]">
        <DestinationImagePanel categoriesWithData={sectionsData} />
      </div>
      <div className="flex w-full items-center lg:w-[30%] ">
        <DestinationInfoPanel categoriesWithData={sectionsData} />
      </div>
    </div>
  );
};

export default Page;
