import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { Article } from "@/data/news";
import { getLocale, translate } from "@/lib/i18n";

export default async function NewsCard({ item }: { item: Article }) {
  const locale = await getLocale();

  return (
    <article className="group flex flex-col bg-white transition-transform duration-300 hover:-translate-y-[5px]">
      <Link href={`/news/${item.id}`}>
        <div className="relative mb-[15px] h-[200px] w-full overflow-hidden rounded-xl sm:h-[220px]">
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            sizes="(min-width: 992px) 33vw, (min-width: 600px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-[15px] left-[15px] rounded-[20px] bg-black/60 px-3 py-[5px] text-sm font-semibold uppercase tracking-[1px] text-white">
            {translate(locale, "institute")}
          </div>
        </div>
        <h3 className="mb-2 w-fit border-b-2 border-transparent text-lg font-bold leading-[1.4] text-black transition-colors group-hover:border-brand-teal group-hover:text-brand-teal">
          {item.title}
        </h3>
        <time dateTime={item.publishedAt} className="mb-3 block font-mont text-[13px] font-medium text-[#8a8a8a]">
          {formatDate(item.publishedAt, locale)}
        </time>
        <p className="line-clamp-3 text-[15px] leading-normal text-[#555]">{item.content.slice(0, 180)}...</p>
      </Link>
    </article>
  );
}
