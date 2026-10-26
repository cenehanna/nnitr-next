import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { LatestNewsProps } from "@/data/news";
import { getLocale, translate } from "@/lib/i18n";

const words = (text: string | null | undefined, max: number) => {
  if (!text) return "";
  const w = text.split(/\s+/);
  return w.length <= max ? text : w.slice(0, max).join(" ") + "...";
};

// Цей запис гарантує, що news — це саме масив ([]) об'єктів типу Article.
export default async function LatestNews({ news }: LatestNewsProps) {
  if (!news || news.length === 0) return null;

  const locale = await getLocale();
  const [main, ...rest] = news;
  const small = rest.slice(0, 3);

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-[60px] lg:px-[110px] lg:py-[60px]">
      <h2 className="mb-[30px] text-center font-mont text-[28px] font-bold text-black sm:text-[32px] lg:mb-[50px] lg:text-[50px]">
        {translate(locale, "latestNews")}
      </h2>

      <div className="flex flex-col gap-[30px] font-exo lg:flex-row lg:items-stretch lg:justify-between lg:gap-[50px]">
        {/* Featured story */}
        {main && (
          <Link href={`/news/${main.id}`} className="group w-full lg:w-1/2">
            <article className="flex flex-col border-b border-[#e0e0e0] pb-[25px] transition-opacity hover:opacity-90 sm:border-0 sm:pb-0">
              <div className="relative mb-[15px] aspect-[3/2] w-full overflow-hidden rounded-md sm:aspect-auto sm:h-[420px] bg-gray-100">
                {main.imagePath && (
                  <img 
                    src={main.imagePath} 
                    alt={main.title} 
                    loading="lazy" 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                )}
              </div>
              <time className="mb-2 block text-sm text-[#8a8a8a]">{formatDate(main.publishedAt, locale)}</time>
              <h3 className="mb-[15px] text-xl font-bold leading-[1.2] text-black transition-colors group-hover:text-brand-teal sm:text-[22px] lg:text-3xl">
                {main.title}
              </h3>
              <p className="text-[15px] leading-normal text-[#2b2b2b] lg:text-lg">
                {words(main.description || main.content, 40)}
              </p>
            </article>
          </Link>
        )}

        {/* Smaller stories */}
        <div className="w-full lg:w-1/2">
          {small.map((item, i) => (
            <Link key={item.id} href={`/news/${item.id}`} className="group block">
              <article
                className={`mb-5 pb-5 transition-opacity hover:opacity-90 ${
                  i < small.length - 1 ? "border-b border-[#e0e0e0]" : ""
                }`}
              >
                <time className="mb-2 block text-sm text-[#8a8a8a]">{formatDate(item.publishedAt, locale)}</time>
                <h3 className="mb-2.5 text-xl font-bold text-black transition-colors group-hover:text-brand-teal">
                  {item.title}
                </h3>
                <div className="flex flex-col items-start gap-[15px] sm:flex-row">
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-md sm:h-[90px] sm:w-[150px] lg:w-[140px] bg-gray-100">
                    {item.imagePath && (
                      <img 
                        src={item.imagePath} 
                        alt={item.title} 
                        loading="lazy" 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                      />
                    )}
                  </div>
                  <p className="text-[15px] leading-[1.4] text-[#2b2b2b] lg:text-base">
                    {words(item.description || item.content, 20)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center font-mont">
        <Link
          href="/news"
          className="border-b-2 border-transparent pb-1 text-[22px] font-bold text-brand transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          {translate(locale, "allNews")}
        </Link>
      </div>
    </section>
  );
}