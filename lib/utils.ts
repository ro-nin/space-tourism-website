import { Category, CategoryMeta } from "./SharedData";

export type NavLinksType = {
  displayName: string;
  url: string;
};

/**
 * Get category from current URL path
 */
export function getCategoryPath(pathname: string | null) {
  if (!pathname) throw new Error("pathname is null");
  if (pathname === "/") return pathname;
  const splittedPNs = pathname?.split("/"); //get first level depth for section (ex: get crew from: "/crew/.../...")
  return splittedPNs[1];
}

/**
 * Get current URL path in array form
 */
export function getPath(pathname: string | null): string[] {
  if (!pathname) throw new Error("pathname is null");
  if (pathname === "/") return [pathname];
  const splittedPNs = pathname?.split("/");
  return splittedPNs.slice(1);
}

/**
 * Find associated category metadata from category slug
 */
export function getCategoryInfoFromSlug(
  categories: CategoryMeta[],
  categorySlug: string
) {
  return categories.find((cat) => cat.slug === categorySlug);
}

/**
 * extract all data associated to a given section of a category
 */
export function getSectionDataFromPathname(
  clientPathName: string | null,
  categoriesWithData: Category[]
) {
  const path = getPath(clientPathName);
  const categoryNameFromClient = path[0];
  const sectionNameFromClient = path[1];
  const category = categoriesWithData.find(
    (cat) => cat.meta?.slug === categoryNameFromClient
  );
  const section = category?.data?.find(
    (sec) =>
      //make a slug
      sec.name.toLocaleLowerCase().replace(" ", "-") ===
      sectionNameFromClient.toLocaleLowerCase().replace(" ", "-")
  );
  return section;
}
