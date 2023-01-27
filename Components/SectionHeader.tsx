"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { CategoryMeta } from "../lib/SharedData";
import { getSectionInfoFromSlug, getCategoryPath } from "../lib/utils";

type Props = {
  sections: CategoryMeta[];
};

const SectionHeader = (props: Props) => {
  const pathname = getCategoryPath(usePathname());
  const sectionInfo = getSectionInfoFromSlug(props.sections, pathname!);

  return (
    <div className="flex gap-4 text-center mx-auto md:mx-0 md:pl-12 md:text-left   lg:pl-28">
      <h5 className="text-neutral-shade">
        {sectionInfo && sectionInfo?.sectionIndex}
      </h5>
      <h5>{sectionInfo && sectionInfo?.name}</h5>
    </div>
  );
};

export default SectionHeader;
