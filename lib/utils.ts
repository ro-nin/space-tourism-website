import { Section } from "./SharedData";

export function parsePathname(pathname: string | null) {
  if (!pathname) throw new Error("pathname is null");
  if (pathname === "/") return pathname;
  const splittedPNs = pathname?.split("/");
  return splittedPNs[1];
}

export function getSectionInfoFromSlug(
    sections: Section[],
    sectionSlug: string
  ) {
    return sections.find((section) => section.slug === sectionSlug);
  }