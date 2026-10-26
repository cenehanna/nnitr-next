import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { Article } from "@/data/news";
import { getLocale } from "@/lib/i18n";

export default async function SideNewsCard({ item }: { item: Article }) {
  const locale = await getLocale();

  return (
    <Link href={`/news/${item.id}`} className="group block">
      <article className="flex items-start gap-[15px]">
        <div className="relative h-[70px] w-[90px] min-w-[90px] overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <Image src={item.imagePath} alt={item.title} fill sizes="90px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <time dateTime={item.publishedAt} className="font-mont text-xs font-medium text-[#707070]">
            {formatDate(item.publishedAt, locale)}
          </time>
          <h3 className="line-clamp-3 font-exo text-[15px] font-semibold leading-[1.3] text-black transition-colors group-hover:text-brand-teal">
            {item.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
