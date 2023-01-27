import Link from "next/link";
import React from "react";
import { NavLinksProps } from "./NavlinksTitles";

const NavLinksNumbers = ({
  links,
  activeIndex,
  vertical = false,
}: NavLinksProps & { vertical?: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${
        vertical ? "flex-col" : " flex-row lg:flex-col"
      }`}
    >
      {links.map((sec, index) => (
        <Link key={sec.url} href={"/" + sec.url}>
          <button
            className={`nav-circle ${
              index === activeIndex ? " nav-circle-active " : ""
            }`}
          >
            <span>{index + 1}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavLinksNumbers;
