import React from "react";

type Props = {};

const LandingPageMainButton = (props: Props) => {
  return (
    <button
      className=" z-10  mx-auto h-96 w-96
         rounded-full
        bg-neutral-light bg-opacity-0 transition-colors
        duration-500 hover:bg-opacity-10"
    >
      <div className=" relative z-20 mx-auto  h-56 w-56 rounded-full  bg-neutral-light  bg-opacity-100">
        <h4 className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 uppercase text-dark">
          Explore
        </h4>
      </div>
    </button>
  );
};

export default LandingPageMainButton;
