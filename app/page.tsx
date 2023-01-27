import React from "react";
import LandingPageMainButton from "../Components/LandingPageMainButton";

type Props = {};
//todo GET DATA DYNAMICALLY FOR sections
const Page = (props: Props) => {
  return (
    <div className=" flex h-full w-full  flex-col items-center justify-evenly  gap-4 lg:flex-row lg:items-end">
      <div className="flex w-auto max-w-[50%] flex-col gap-4 pb-24">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          "Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience!"
        </p>
      </div>
      <div className="flex flex-col items-end justify-end">
        <LandingPageMainButton></LandingPageMainButton>
      </div>
    </div>
  );
};

export default Page;
