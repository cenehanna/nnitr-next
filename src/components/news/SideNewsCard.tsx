import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { NewsItem } from "@/data/news";

export default function SideNewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="group block">
      <article className="flex items-start gap-[15px]">
        <div className="relative h-[70px] w-[90px] min-w-[90px] overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <Image src={item.imagePath} alt={item.title} fill sizes="90px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <time dateTime={item.createdAt} className="font-mont text-xs font-medium text-[#707070]">
            {formatDate(item.createdAt)}
          </time>
          <h3 className="line-clamp-3 font-exo text-[15px] font-semibold leading-[1.3] text-black transition-colors group-hover:text-brand-teal">
            {item.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
