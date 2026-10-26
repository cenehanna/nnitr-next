import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { formatDate } from "@/lib/date";
import { getLocale, translate } from "@/lib/i18n";
import { getNews } from "@/data/news";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Пошук: ${q}` : "Пошук по сайту",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const locale = await getLocale();
  const { q = "", page } = await searchParams;
  const searchQuery = q.trim();
  const currentPage = Number(page) || 1;
  const ITEMS_PER_PAGE = 6;

  // Отримання та фільтрація новин
  const allNews = await getNews();
  const filteredNews = searchQuery
    ? allNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Пагінація
  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs current={translate(locale, "search") || "Пошук"} />

      <main className="w-full border-b-2 border-[#e0e0e0] bg-white px-[15px] py-8 md:px-10 md:py-[50px] lg:px-[110px]">
        {/* 1. Поле пошуку і кнопка */}
        <section className="mb-10">
          <h1 className="mb-6 font-mont text-2xl font-bold text-black md:text-3xl">
            Пошук по сайту
          </h1>

          <form action="/search" method="GET" className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Введіть ключові слова..."
                className="w-full rounded-full border border-[#e0e0e0] bg-[#f9f9f9] py-3.5 pl-12 pr-5 font-mont text-base text-black outline-none transition focus:border-brand-teal focus:bg-white"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#888]" />
            </div>
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3.5 font-mont text-base font-semibold text-white transition hover:bg-brand-teal"
            >
              Знайти
            </button>
          </form>

          {searchQuery && (
            <p className="mt-4 font-mont text-base text-[#666]">
              За запитом <span className="font-semibold text-black">«{searchQuery}»</span> знайдено результатів:{" "}
              <span className="font-bold text-brand-teal">{totalItems}</span>
            </p>
          )}
        </section>

        <hr className="mb-10 border-0 border-b-2 border-[#e0e0e0]" />

        {/* 2. Знайдені новини в стовпчик */}
        <section id="search-results">
          {paginatedNews.length > 0 ? (
            <div className="flex flex-col gap-8">
              {paginatedNews.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col gap-5 border-b border-[#eee] pb-8 md:flex-row md:items-center md:gap-8"
                >
                  <Link
                    href={`/news/${item.id}`}
                    className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-xl bg-stone-100 md:w-[280px]"
                  >
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-center">
                    <time dateTime={item.publishedAt} className="mb-2 block font-mont text-sm font-medium text-brand-teal">
                      {formatDate(item.publishedAt, locale)}
                    </time>
                    <h2 className="mb-3 font-mont text-xl font-bold text-black transition-colors group-hover:text-brand-teal md:text-2xl">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className="line-clamp-3 font-exo text-base text-[#444] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="py-12 text-center">
              <p className="font-mont text-lg text-[#666]">
                На жаль, за вашим запитом нічого не знайдено. Спробуйте змінити пошукове слово.
              </p>
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="font-mont text-lg text-[#666]">
                Введіть пошуковий запит у поле вище, щоб знайти потрібні новини.
              </p>
            </div>
          )}
        </section>

        {/* 3. Пагінація */}
        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/search?q=${encodeURIComponent(searchQuery)}&page=${p}#search-results`}
                className={`flex h-10 w-10 items-center justify-center rounded-full border font-mont text-sm font-medium transition ${
                  p === currentPage
                    ? "border-brand-teal bg-brand-teal text-white"
                    : "border-[#e0e0e0] text-[#333] hover:border-brand-teal hover:text-brand-teal"
                }`}
              >
                {p}
              </Link>
            ))}
          </nav>
        )}
      </main>

      <Footer hoverClass="hover:text-brand-teal" />
      <MobileMenu variant="light" />
    </>
  );
}