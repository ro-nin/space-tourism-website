"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Category, Crew } from "../lib/SharedData";
import { getSectionDataFromPathname } from "../lib/utils";

type Props = {
  categoriesWithData: Category[];
};

const CrewImagePanel = ({ categoriesWithData }: Props) => {
  const clientPathName = usePathname();
  const section = getSectionDataFromPathname(
    clientPathName,
    categoriesWithData
  ) as Crew;
  return (
    <Image
      className="z-10  object-contain "
      src={section?.images?.webp.replace("./assets/", "/assets/")}
      fill
      alt={""}
    />
  );
};

export default CrewImagePanel;
