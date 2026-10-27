import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NewsGrid from "@/components/news/NewsGrid";
import { formatDate } from "@/lib/date";
import { getNews } from "@/data/news";
import { getLocale, translate } from "@/lib/i18n";
import { getCurrentPage, type SearchParams } from "@/lib/pagination";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: translate(locale, "newsTitle") };
}

//searchParams — це спеціальний об'єкт, який Next.js автоматично передає у кожен файл page.tsx. 
// Він зчитує всі параметри безпосередньо з адресного рядка вашого браузера (URL), а саме — все, що йде після знака питання ?
export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; sort?: string }>;
}) {
  const { page, sort = "desc" } = await searchParams; // "desc" за замовчуванням
  const locale = await getLocale();
  const news = await getNews();
  const params = await searchParams;

  // Деструктуризація масиву: змінна main отримує перший елемент (індекс 0).
  // Rest-оператор (...rest): автоматично збирає всі наступні елементи (від індексу 1) у новий масив.
  const [main, ...rest] = news;
  if (!main) return null;


  const sortedRest = [...rest].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();

    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });


const ITEMS_PER_PAGE = 12;
const totalItems = sortedRest.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const currentPage = Number(page) || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const grid = sortedRest.slice(startIndex, endIndex);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs current={translate(locale, "news")} />

      <main className="w-full border-b-2 border-[#e0e0e0] bg-white px-[15px] py-5 md:px-10 md:py-[30px] lg:px-[110px]">
        {/* Featured story */}
        <Link href={`/news/${main.id}`} className="mb-10 block border-b-2 border-[#e0e0e0] pb-[30px]">
          <article className="mb-[30px] flex flex-col items-start gap-5 font-exo lg:flex-row md:gap-[30px] lg:gap-[50px]">
            <div className="relative aspect-[3/2] w-full min-w-[250px] overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:flex-[1.7] ">
              <Image src={main.imagePath} alt={main.title} fill priority sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
            </div>
            <div className="w-full min-w-[250px] md:flex-1">
              <time dateTime={main.publishedAt} className="mb-[15px] block font-mont text-base font-medium text-brand-teal">
                {formatDate(main.publishedAt, locale)}
              </time>
              <h1 className="mb-[15px] font-mont text-2xl font-bold text-black md:text-[28px] lg:mb-5 lg:text-[32px]">
                {main.title}
              </h1>
              <p className="text-[15px] leading-[1.6] text-[#333] md:text-lg">{main.content.slice(0, 350)}...</p>
            </div>
          </article>
        </Link>

<NewsGrid
  news={grid}
  totalPages={totalPages}
  currentPage={currentPage}
  locale={locale}
  searchParams={params}
  currentSort={sort}
/>

      </main>

      <Footer hoverClass="hover:text-brand-teal" />
      <MobileMenu variant="light" />
    </>
  );
}
