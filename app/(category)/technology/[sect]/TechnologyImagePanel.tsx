"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Category, Crew, Technology } from "../../../../lib/SharedData";
import { getSectionDataFromPathname } from "../../../../lib/utils";

type Props = {
  categoriesWithData: Category[];
};

const TechnologyImagePanel = ({ categoriesWithData }: Props) => {
  const clientPathName = usePathname();
  const section = getSectionDataFromPathname(
    clientPathName,
    categoriesWithData
  ) as Technology;

  //Useless separation but keep it to respect the data source separation in two files
  //could just style the bigger image
  return (
    <>
      <Image
        className="z-10  hidden object-cover lg:block "
        src={section?.images?.portrait.replace("./assets/", "/assets/")}
        fill
        alt={""}
      />
      <Image
        className="z-10  block object-cover lg:hidden "
        src={section?.images?.landscape.replace("./assets/", "/assets/")}
        fill
        alt={""}
      />
    </>
  );
};

export default TechnologyImagePanel;
