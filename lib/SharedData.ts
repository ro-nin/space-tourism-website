import { cache } from "react";
import path from "path";
import { promises as fs } from "fs";

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type CategoryMeta = {
  name: string;
  slug: string;
  sectionIndex: string;
};

export interface ExternalData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

export interface SectionData {
  name: string;
  images: any;
}

export interface Crew extends SectionData {
  images: CrewOrDestinationImages;
  role: string;
  bio: string;
}

export interface CrewOrDestinationImages {
  png: string;
  webp: string;
}

export interface Destination extends SectionData {
  images: CrewOrDestinationImages;
  description: string;
  distance: string;
  travel: string;
}

export interface Technology extends SectionData {
  images: TechnologyImages;
  description: string;
}

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}

export interface Category {
  data: Array<Destination | Technology | Crew>;
  meta?: CategoryMeta;
}

export const getCategoryMeta = cache((): CategoryMeta[] => [
  { name: "HOME", slug: "", sectionIndex: "00" },
  { name: "DESTINATION", slug: "destinations", sectionIndex: "01" },
  { name: "CREW", slug: "CREW".toLocaleLowerCase(), sectionIndex: "02" },
  {
    name: "TECHNOLOGY",
    slug: "TECHNOLOGY".toLocaleLowerCase(),
    sectionIndex: "03",
  },
]);

export async function GetCategoriesWithData(): Promise<Category[]> {
  const jsonDirectory = path.join(process.cwd(), "externalData");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const parsed: ExternalData = await JSON.parse(fileContents);
  const sections = [
    {
      data: parsed.crew,
      meta: getCategoryMeta().find((meta) => meta.slug === "crew"),
    },
    {
      data: parsed.destinations,
      meta: getCategoryMeta().find((meta) => meta.slug === "destinations"),
    },
    {
      data: parsed.technology,
      meta: getCategoryMeta().find((meta) => meta.slug === "technology"),
    },
  ];
  return sections;
}
