import React from "react";

type Props = {};

const LandingPageMainButton = (props: Props) => {
  return (
    <button
      className="flex h-96 w-96 items-center
        justify-center rounded-full
        bg-neutral-light bg-opacity-0 transition-colors
        duration-500 hover:bg-opacity-10"
    >
      <div
        className=" flex h-56 w-56 items-center justify-center
              rounded-full  bg-neutral-light  bg-opacity-100"
      >
        <h4 className="uppercase text-dark">Explore</h4>
      </div>
    </button>
  );
};

export default LandingPageMainButton;
