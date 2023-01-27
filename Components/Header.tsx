import React from "react";
import { CategoryMeta } from "../lib/SharedData";
import Link from "next/link";
import Navbar from "./Navbar";
import Logo from "../public/assets/shared/logo.svg";
type Props = {
  sections: CategoryMeta[];
};

const Header = ({ sections }: Props) => {
  const urls = sections.map((sec) => {
    return { displayName: sec.name, url: sec.slug };
  });

  return (
    <header
      className="  z-50 flex h-[15%] w-full
     items-start justify-between pl-6 md:relative md:items-center lg:pt-8 "
    >
      <Logo className="pt-8 md:pt-0"></Logo>
      <Navbar links={urls}></Navbar>
    </header>
  );
};

export default Header;
