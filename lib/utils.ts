import { Category, CategoryMeta } from "./SharedData";

export function getCategoryPath(pathname: string | null) {
  if (!pathname) throw new Error("pathname is null");
  if (pathname === "/") return pathname;
  const splittedPNs = pathname?.split("/");
  return splittedPNs[1];
}

/*
 **
 */
export function getPath(pathname: string | null): string[] {
  if (!pathname) throw new Error("pathname is null");
  if (pathname === "/") return [pathname];
  const splittedPNs = pathname?.split("/");
  return splittedPNs.slice(1);
}

export function getSectionInfoFromSlug(
  sections: CategoryMeta[],
  sectionSlug: string
) {
  return sections.find((section) => section.slug === sectionSlug);
}

export function getSectionDataFromPathname(
  clientPathName: string | null,
  categoriesWithData: Category[]
) {
  const path = getPath(clientPathName);
  const categoryName = path[0];
  const sectionName = path[1];
  const category = categoriesWithData.find(
    (cat) => cat.meta?.slug === categoryName
  );
  const section = category?.data?.find(
    (sec) => sec.name.toLocaleLowerCase() === sectionName.toLocaleLowerCase()
  );
  return section;
}
