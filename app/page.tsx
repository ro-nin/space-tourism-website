import React from "react";
import LandingPageMainButton from "../Components/LandingPageMainButton";

type Props = {};
//todo GET TEXT DATA STATICALLY FROM SHARED DATA?
const Page = (props: Props) => {
  return (
    <div
      className=" flex w-full flex-1 flex-col items-center justify-evenly   text-center 
      lg:flex-row  
       lg:items-end lg:justify-between lg:gap-0 lg:px-36 lg:pb-24 lg:text-left"
    >
      <div className=" mx-auto flex flex-col gap-2 lg:w-full lg:pb-12 ">
        <h5 className="text-accent">SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="mx-auto w-1/2 text-accent lg:mx-0 lg:w-[65%] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="z-10 lg:pt-28">
        <LandingPageMainButton></LandingPageMainButton>
      </div>
    </div>
  );
};

export default Page;
