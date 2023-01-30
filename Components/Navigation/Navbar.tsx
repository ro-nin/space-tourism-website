"use client";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import { CategoryMeta } from "../../lib/SharedData";
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

  return (
    <>
      {sideMenuIsOpen && (
        <nav
          className=" absolute right-0 z-40 ml-auto 
          flex h-[100vh]  flex-col gap-10 bg-neutral-light bg-opacity-10  
          pl-12 pr-36 pt-28 text-left
          backdrop-blur-lg md:relative
          md:h-full md:flex-row md:items-center md:py-10 md:px-12
          lg:pr-40 lg:pl-28 "
        >
          {/* hamburgerExit */}
          {/* hamburger */}

          {/* grey line */}
          <div
            className="absolute z-50 hidden h-[1px]
          bg-neutral-shade lg:inline 
          lg:w-[22rem] lg:-translate-x-[25rem] 
          xl:w-[32rem] xl:-translate-x-[35rem] 
          2xl:w-[50rem]   2xl:-translate-x-[53rem]
          "
          />

          {links.map((sec, index) => (
            <Link key={sec.url} href={"/" + sec.url}>
              <span
                className={`nav-underline  ${
                  (pathname === "/" && sec.url === "/") ||
                  (splittedPNs !== undefined && sec.url === splittedPNs[1])
                    ? " nav-underline-active "
                    : ""
                }`}
              >
                <span className="md:hidden font-bold">0{index}      </span> {sec.displayName}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
