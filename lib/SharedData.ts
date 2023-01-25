import { cache } from "react";
import path from "path";
import { promises as fs } from "fs";

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Section = {
  name: string;
  slug: string;
  sectionIndex: string;
};

export const getSectionsNames = cache((): Section[] => [
  { name: "HOME", slug: "", sectionIndex: "00" },
  { name: "DESTINATION", slug: "destinations", sectionIndex: "01" },
  { name: "CREW", slug: "CREW".toLocaleLowerCase(), sectionIndex: "02" },
  {
    name: "TECHNOLOGY",
    slug: "TECHNOLOGY".toLocaleLowerCase(),
    sectionIndex: "03",
  },
]);

export async function GetSectionsData() {
  // Assuming it always return expected categories
  const jsonDirectory = path.join(process.cwd(), "externalData");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  //Return the content of the data file in json format
  const parsed = JSON.parse(fileContents);
  return parsed;
}

export async function getSectionDataFromSlug(sectionSlug: string) {
  //TODO make enum to better type the args
  const sectionsData = await GetSectionsData();
  //TODO?
  return sectionsData;
}


