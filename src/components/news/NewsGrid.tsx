import Pagination from "@/components/news/Pagination";
import NewsCard from "@/components/news/NewsCard";
import type { Article } from "@/data/news";
import { translate, type Locale } from "@/lib/i18n-messages";
import type { SearchParams } from "@/lib/pagination";
import NewsSortSelect from "./NewsSortSelect";

const newsListAnchor = "news-list";

interface NewsGridProps {
  news: Article[];
  totalPages: number;
  currentPage: number;
  locale: Locale;
  searchParams: SearchParams;
  currentSort: string;
}

export default function NewsGrid({
  news,
  totalPages,
  currentPage,
  locale,
  searchParams,
  currentSort,
}: NewsGridProps) {
  return (
    <>

    <div className="mb-[30px] flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
      <h2
        id={newsListAnchor}
        className="mb-[30px] mt-10 inline-block border-b-2 border-brand-teal pb-[15px] font-mont text-2xl font-bold text-black md:text-[28px]"
      >
        {translate(locale, "moreNews")}
      </h2>
      <NewsSortSelect currentSort={currentSort} anchor={newsListAnchor} />
</div>

      <section className="mb-[50px] grid grid-cols-1 gap-[25px] font-exo md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-10">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </section>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        locale={locale}
        searchParams={searchParams}
        anchor={newsListAnchor}
      />
    </>
  );
}