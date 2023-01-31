import Link from "next/link";
import React from "react";

type Props = {};

const LandingPageMainButton = (props: Props) => {
  return (
    <Link
      href={"/destinations/moon"}
      className=" relative  z-10 mx-auto inline-block rounded-full bg-neutral-light
         bg-opacity-0
        transition-colors duration-500 hover:bg-opacity-10
        md:h-64 md:w-64 lg:h-96 lg:w-96"
    >
      <div
        className="absolute bottom-1/2 right-1/2 z-20 mx-auto  flex h-36 w-36 translate-y-1/2
        translate-x-1/2 items-center justify-center rounded-full bg-neutral-light bg-opacity-100  md:h-48 md:w-48 lg:h-56 lg:w-56"
      >
        <h4 className=" uppercase text-dark">Explore</h4>
      </div>
    </Link>
  );
};

export default LandingPageMainButton;
