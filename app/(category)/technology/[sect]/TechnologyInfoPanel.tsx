"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Category, Technology } from "../../../../lib/SharedData";
import {
  getCategoryPath,
  getSectionDataFromPathname,
  NavLinksType,
} from "../../../../lib/utils";
import NavLinksNumbers from "../../../../Components/Navigation/NavLinksNumbers";

type Props = {
  categoriesWithData: Category[];
};

const TechnologyInfoPanel = ({ categoriesWithData }: Props) => {
  const clientPathName = usePathname();
  const currentCategory = getCategoryPath(clientPathName);
  const section = getSectionDataFromPathname(
    clientPathName,
    categoriesWithData
  ) as Technology;
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-center lg:flex-row lg:gap-12   lg:text-left  ">
      <div className="lg:my-auto">
        <NavLinksNumbers links={navlinks} activeIndex={activeIndex} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="nav mt-auto uppercase text-neutral-shade ">
          {"The Terminology..."}
        </span>
        <h3 className="uppercase xl:whitespace-nowrap">
          {section && section.name}
        </h3>
        <p className=" ">{section && section.description}</p>
      </div>
    </div>
  );
};

export default TechnologyInfoPanel;
