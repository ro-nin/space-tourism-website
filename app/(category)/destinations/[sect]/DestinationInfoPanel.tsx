"use client";

// TODO
//   Undesired layout shift in info text
import { usePathname } from "next/navigation";
import React from "react";
import { Category, Destination } from "../../../../lib/SharedData";
import {
  getCategoryPath,
  getSectionDataFromPathname,
  NavLinksType,
} from "../../../../lib/utils";
import NavlinksTitles from "../../../../Components/Navigation/NavlinksTitles";

type Props = {
  categoriesWithData: Category[];
};

const DestinationInfoPanel = ({ categoriesWithData }: Props) => {
  const clientPathName = usePathname();
  const currentCategory = getCategoryPath(clientPathName);
  const section = getSectionDataFromPathname(
    clientPathName,
    categoriesWithData
  ) as Destination;
  const navlinks: NavLinksType[] = categoriesWithData
    .find((cat) => cat.meta?.slug === currentCategory)!
    .data.map((sec) => {
      return {
        displayName: sec.name!,
        url: `${currentCategory}/${sec.name
          .toLocaleLowerCase()
          .replace(" ", "-")}`,
      };
    });
  const activeIndex = navlinks.findIndex(
    (sec) => sec.displayName.toLowerCase() === section?.name.toLowerCase()
  );
  return (
    <div className="flex flex-1  flex-col items-center gap-6 transition-all lg:items-start lg:pb-16">
      <NavlinksTitles
        small={true}
        withNumber={false}
        links={navlinks}
        activeIndex={activeIndex}
      ></NavlinksTitles>
      {section && (
        <>
          <h2 className="uppercase ">{section?.name}</h2>
          <p className="text-center lg:text-left">{section.description}</p>
          <div className="h-[2px] w-full border border-neutral-shade border-opacity-70"></div>
          <div className="grid w-[80%] grid-cols-2 justify-center gap-4 lg:justify-evenly ">
            <div className="text-center lg:text-left">
              <span className="subh2 block text-neutral-shade">
                AVG. DISTANCE
              </span>
              <span className="subh1">{section.distance}</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="subh2 block text-neutral-shade">
                EST. TRAVEL TIME
              </span>
              <span className="subh1">{section.travel}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DestinationInfoPanel;
