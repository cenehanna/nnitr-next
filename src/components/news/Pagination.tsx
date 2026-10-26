import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { getLocale, translate } from "@/lib/i18n";

export default async function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
  const locale = await getLocale();
  
  if (totalPages <= 1) return null;

  const generatePagination = (current: number, total: number) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, "...", total];
    if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const pages = generatePagination(currentPage, totalPages);

  const arrowBase = "flex items-center gap-1.5 sm:gap-2.5 font-mont text-[15px] font-medium transition-colors shrink-0";
  const arrowActive = "text-[#888] hover:text-brand";
  const arrowDisabled = "text-gray-300 pointer-events-none"; 

  return (
    <div className="mt-[50px] flex w-full flex-col">
      <div className="mb-[50px] flex justify-center">
       
      </div>

      <hr className="mb-[30px] w-full border-0 border-b-2 border-[#e0e0e0]" />

      <nav
        aria-label={translate(locale, "newsPagination")}
        className="flex w-full flex-row items-center justify-between gap-2 pb-10 pt-2.5"
      >
        {/* Кнопка "Назад" */}
        <Link 
          href={`?page=${currentPage - 1}#news-list`}
          className={`${arrowBase} ${currentPage === 1 ? arrowDisabled : arrowActive}`}
        >
          <ArrowLeftIcon aria-hidden="true" className="size-5" /> 
          <span className="hidden sm:inline">{translate(locale, "previous")}</span>
        </Link>

        {/* Номери сторінок */}
        <ul className="flex flex-wrap items-center justify-center gap-[3px] sm:gap-[15px]">
          {pages.map((p, i) =>
            p === "..." ? (
              <li key={`ellipsis-${i}`} className="px-1 font-mont font-medium text-[#54626f]">...</li>
            ) : (
              <li key={p}>
                <Link
                  href={`?page=${p}#news-list`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border font-mont text-sm sm:h-9 sm:w-9 sm:text-[15px] font-medium text-brand transition ${
                    p === currentPage 
                      ? "border-brand bg-brand/5" 
                      : "border-transparent hover:bg-[#f5f5f5]"
                  }`}
                >
                  {p}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Кнопка "Вперед" */}
        <Link 
          href={`?page=${currentPage + 1}#news-list`}
          className={`${arrowBase} ${currentPage === totalPages ? arrowDisabled : arrowActive}`}
        >
          <span className="hidden sm:inline">{translate(locale, "next")}</span> 
          <ArrowRightIcon aria-hidden="true" className="size-5" />
        </Link>
      </nav>
    </div>
  );
}