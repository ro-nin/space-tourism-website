"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { CategoryMeta } from "../lib/SharedData";

type Props = {
  sections: CategoryMeta[];
  children: React.ReactNode;
};

const Container = ({ sections, children }: Props) => {
  const pathname = usePathname();
  const splittedPNs = pathname?.split("/");

  //TODO move to sections
  const bgHome = "lg:bg-home-desktop md:bg-home-tablet bg-home-mobile";
  const bgCrew = "lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile";
  const bgTechnology =
    "lg:bg-technology-desktop md:bg-technology-tablet bg-technology-mobile";
  const bgdestinations =
    "lg:bg-destination-desktop md:bg-destination-tablet bg-destination-mobile";

  const bgStyle =
    pathname === "/"
      ? bgHome
      : splittedPNs![1] === "crew"
      ? bgCrew
      : splittedPNs![1] === "technology"
      ? bgTechnology
      : splittedPNs![1] === "destinations"
      ? bgdestinations
      : "";
  return (
    <div
      className={`${bgStyle} relative flex h-screen w-screen flex-col  bg-cover transition-all overflow-y-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
