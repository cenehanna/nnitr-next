import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { translate, type Locale } from "@/lib/i18n-messages";
import type { SearchParams } from "@/lib/pagination";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  locale: Locale;
  searchParams?: SearchParams;
  anchor?: string;
  ariaLabel?: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  locale,
  searchParams = {},
  anchor,
  ariaLabel,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // 1. Генерація масиву сторінок із трикрапками
  const generatePagination = (current: number, total: number): (number | "...")[] => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, "...", total];
    if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const pages = generatePagination(currentPage, totalPages);

  // 2. Формування URL із збереженням існуючих параметрів (наприклад, q=query)
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && key !== "page") {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.set(key, value);
        }
      }
    });

    params.set("page", pageNumber.toString());
    const hash = anchor ? `#${anchor}` : "";
    return `?${params.toString()}${hash}`;
  };

  const arrowBase = "flex items-center gap-1.5 sm:gap-2.5 font-mont text-[15px] font-medium transition-colors shrink-0";
  const arrowActive = "text-[#888] hover:text-brand";
  const arrowDisabled = "text-gray-300 pointer-events-none";

  return (
    <div className="mt-[50px] flex w-full flex-col">
      <hr className="mb-[30px] w-full border-0 border-b-2 border-[#e0e0e0]" />

      <nav
        aria-label={ariaLabel || translate(locale, "pagination")}
        className="flex w-full flex-row items-center justify-between gap-2 pb-10 pt-2.5"
      >
        {currentPage === 1 ? (
          <span className={`${arrowBase} ${arrowDisabled}`} aria-disabled="true">
            <ArrowLeftIcon aria-hidden="true" className="size-5" />
            <span className="hidden sm:inline">{translate(locale, "previous")}</span>
          </span>
        ) : (
          <Link href={createPageUrl(currentPage - 1)} className={`${arrowBase} ${arrowActive}`}>
            <ArrowLeftIcon aria-hidden="true" className="size-5" />
            <span className="hidden sm:inline">{translate(locale, "previous")}</span>
          </Link>
        )}

        {/* Номери сторінок */}
        <ul className="flex flex-wrap items-center justify-center gap-[3px] sm:gap-[15px]">
          {pages.map((p, i) =>
            p === "..." ? (
              <li key={`ellipsis-${i}`} className="px-1 font-mont font-medium text-[#54626f]">
                ...
              </li>
            ) : (
              <li key={p}>
                <Link
                  href={createPageUrl(p)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border font-mont text-sm font-medium transition sm:h-9 sm:w-9 sm:text-[15px] ${
                    p === currentPage
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-transparent text-brand hover:bg-[#f5f5f5]"
                  }`}
                >
                  {p}
                </Link>
              </li>
            )
          )}
        </ul>

        {currentPage === totalPages ? (
          <span className={`${arrowBase} ${arrowDisabled}`} aria-disabled="true">
            <span className="hidden sm:inline">{translate(locale, "next")}</span>
            <ArrowRightIcon aria-hidden="true" className="size-5" />
          </span>
        ) : (
          <Link href={createPageUrl(currentPage + 1)} className={`${arrowBase} ${arrowActive}`}>
            <span className="hidden sm:inline">{translate(locale, "next")}</span>
            <ArrowRightIcon aria-hidden="true" className="size-5" />
          </Link>
        )}
      </nav>
    </div>
  );
}