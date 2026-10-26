export type SearchParams = Record<string, string | string[] | undefined>;

export function getCurrentPage(
  page: string | string[] | undefined,
  totalPages: number,
): number {
  const pageValue = Array.isArray(page) ? page[0] : page;
  const requestedPage = Number(pageValue);

  if (!Number.isInteger(requestedPage) || requestedPage < 1) return 1;
  return Math.min(requestedPage, Math.max(totalPages, 1));
}
