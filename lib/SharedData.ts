import { cache } from "react";
import path, { parse } from "path";
import { promises as fs } from "fs";

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Section = {
  name: string;
  slug: string;
};

export const getSectionsNames = cache((): Section[] => [
  { name: "HOME", slug: "" },
  { name: "DESTINATION", slug: "destinations" },
  { name: "CREW", slug: "CREW".toLocaleLowerCase() },
  { name: "TECHNOLOGY", slug: "TECHNOLOGY".toLocaleLowerCase() },
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

export async function getSectionData(sectionSlug: string) {
  //TODO make enum to better type the args
  const sectionsData = await GetSectionsData();
  //TODO?
  return sectionsData.sectionSlug;
}
