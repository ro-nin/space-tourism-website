"use client";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinksType } from "../../lib/utils";

type Props = {
  links: NavLinksType[];
  sideMenuIsOpen: boolean;
  setSideMenuIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ links, sideMenuIsOpen }: Props) => {
  const pathname = usePathname();
  const splittedPNs = pathname?.split("/");

  const linksElems = links.map((sec, index) => (
    <Link key={sec.url} href={"/" + sec.url}>
      <span
        className={`nav-underline  ${
          (pathname === "/" && sec.url === "/") ||
          (splittedPNs !== undefined && sec.url === splittedPNs[1])
            ? " nav-underline-active "
            : ""
        }`}
      >
        <span className="font-bold md:hidden">0{index} </span> {sec.displayName}
      </span>
    </Link>
  ));

  return (
    <>
      <nav //Tablet & desktop nav
        className=" hidden gap-10 bg-neutral-light bg-opacity-10  
        pl-12 pr-36 pt-28 text-left
          backdrop-blur-lg md:relative md:flex
           md:flex-row md:items-center md:py-10 md:px-12
          lg:pr-40 lg:pl-28 "
      >
        {/* grey line */}
        <div
          className="absolute z-50 hidden h-[1px]
          bg-neutral-shade lg:inline 
          lg:w-[22rem] lg:-translate-x-[25rem] 
          xl:w-[32rem] xl:-translate-x-[35rem] 
          2xl:w-[50rem]   2xl:-translate-x-[53rem]
          "
        />

        {linksElems}
      </nav>

      {sideMenuIsOpen && (
        <nav //mobile nav menu
          className=" absolute right-0 z-40 ml-auto 
          flex h-[100vh]  flex-col gap-10 bg-neutral-light bg-opacity-10  
          pl-12 pr-36 pt-28 text-left
          backdrop-blur-lg md:hidden"
        >
          {linksElems}
        </nav>
      )}
    </>
  );
};

export default Navbar;
