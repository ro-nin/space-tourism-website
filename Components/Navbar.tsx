"use client";
import Link from "next/link";
import React from "react";
import { CategoryMeta } from "../lib/SharedData";
import { usePathname } from "next/navigation";
import { NavLinksType } from "../lib/utils";

type Props = {
  links: NavLinksType[];
};

const Navbar = ({ links }: Props) => {
  const pathname = usePathname();
  const splittedPNs = pathname?.split("/");
  return (
    <nav
      className=" relative
            z-50 ml-auto flex h-screen grow-0  flex-col items-center gap-10
            bg-neutral-light bg-opacity-10 py-8 pl-28
            pr-36 backdrop-blur-lg md:h-auto md:flex-row "
    >
      <div
        className="absolute z-50 hidden h-[1px]
             bg-neutral-shade lg:inline 
             lg:w-[26rem] lg:-translate-x-[30rem] 
             xl:w-[30rem] xl:-translate-x-[35rem] 
               2xl:w-[37rem]   2xl:-translate-x-[40rem]"
      ></div>

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
            <span>0{index}</span> {sec.displayName}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
