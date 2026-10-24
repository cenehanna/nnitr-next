import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const pages: (number | "...")[] = [1, 2, 3, 4];

export default function Pagination() {
  const arrow =
    "flex items-center gap-2.5 font-mont text-[15px] font-medium text-[#888] transition-colors hover:text-brand";

  return (
    <div className="mt-[50px] flex w-full flex-col">
      <div className="mb-[50px] flex justify-center">
        <button
          type="button"
          className="w-full rounded-full bg-brand px-5 py-3 font-mont text-base font-semibold text-white transition hover:-translate-y-px hover:bg-brand-teal sm:w-auto sm:px-20 sm:py-4"
        >
          Більше новин
        </button>
      </div>

      <hr className="mb-[30px] w-full border-0 border-b-2 border-[#e0e0e0]" />

      <nav
        aria-label="Навігація сторінками новин"
        className="flex w-full flex-col items-center gap-5 pb-10 pt-2.5 md:flex-row md:justify-between"
      >
        <a href="#" className={`order-2 md:order-none ${arrow}`}>
          <ArrowLeftIcon aria-hidden="true" className="size-5" /> <span className="hidden sm:inline">Попередня</span>
        </a>

        <ul className="order-1 flex flex-wrap items-center justify-center gap-[5px] md:order-none md:gap-[15px]">
          {pages.map((p, i) =>
            p === "..." ? (
              <li key={i} className="font-mont font-medium text-[#54626f]">...</li>
            ) : (
              <li key={p}>
                <a
                  href="#"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border font-mont text-[15px] font-medium text-brand transition ${
                    p === 1 ? "border-brand" : "border-transparent hover:bg-[#f5f5f5]"
                  }`}
                >
                  {p}
                </a>
              </li>
            ),
          )}
        </ul>

        <a href="#" className={`order-3 md:order-none ${arrow}`}>
          <span className="hidden sm:inline">Наступна</span> <ArrowRightIcon aria-hidden="true" className="size-5" />
        </a>
      </nav>
    </div>
  );
}
