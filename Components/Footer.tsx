import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="absolute bottom-0 right-0 flex gap-4 py-2 pr-8 text-accent  ">
      <a
        href="https://emkorp.vercel.app"
        className="opacity-40 hover:opacity-90"
      >
        emkorp.
      </a>
      <a
        href="https://github.com/ro-nin/space-tourism-website"
        className="opacity-40 hover:opacity-90"
      >
        Source
      </a>
    </div>
  );
};

export default Footer;
