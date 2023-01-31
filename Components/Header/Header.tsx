"use client";
import React, { useState } from "react";
import { CategoryMeta } from "../../lib/SharedData";
import Navbar from "./Navbar";
import Logo from "../../public/assets/shared/logo.svg";
import Hamburger from "../../public/assets/shared/icon-hamburger.svg";
import IconClose from "../../public/assets/shared/icon-close.svg";
type Props = {
  sections: CategoryMeta[];
};

const Header = ({ sections }: Props) => {
  const urls = sections.map((sec) => {
    return { displayName: sec.name, url: sec.slug };
  });

  const [sideMenuIsOpen, setSideMenuIsOpen] = useState<boolean>(false);

  return (
    <header
      className="  z-50 flex  w-full justify-between
      pl-4  md:relative md:h-28 lg:items-start  "
    >
      <Logo className="h-20 w-20 pt-8  md:pl-4 "></Logo>
      <Navbar
        links={urls}
        sideMenuIsOpen={sideMenuIsOpen}
        setSideMenuIsOpen={setSideMenuIsOpen}
      ></Navbar>
      <button
        onClick={() => {
          setSideMenuIsOpen(!sideMenuIsOpen);
        }}
        className="z-50 ml-auto  h-24 w-24 pt-8 md:hidden md:pt-0"
      >
        {sideMenuIsOpen ? (
          <IconClose className="  "></IconClose>
        ) : (
          <Hamburger className=" "></Hamburger>
        )}
      </button>
    </header>
  );
};

export default Header;
