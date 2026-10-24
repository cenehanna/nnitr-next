import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NewsCard from "@/components/news/NewsCard";
import Pagination from "@/components/news/Pagination";
import { formatDate } from "@/lib/date";
import { news } from "@/data/news";

export const metadata: Metadata = { title: "Новини — ННІ ІТ та робототехніки" };

export default function NewsPage() {
  const [main, ...rest] = news;
  const grid = rest.slice(0, 9);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs current="Новини" />

      <main className="w-full border-b-2 border-[#e0e0e0] bg-white px-[15px] py-5 md:px-10 md:py-[30px] lg:px-[110px]">
        {/* Головна новина */}
        <Link href={`/news/${main.id}`} className="mb-10 block border-b-2 border-[#e0e0e0] pb-[30px]">
          <article className="mb-[30px] flex flex-col items-start gap-5 font-exo md:flex-row md:gap-[30px] lg:gap-[50px]">
            <div className="relative aspect-[3/2] w-full min-w-[250px] overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:flex-[1.7]">
              <Image src={main.imagePath} alt={main.title} fill priority sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
            </div>
            <div className="w-full min-w-[250px] md:flex-1">
              <time dateTime={main.createdAt} className="mb-[15px] block font-mont text-base font-medium text-brand-teal">
                {formatDate(main.createdAt)}
              </time>
              <h1 className="mb-[15px] font-mont text-2xl font-bold text-black md:text-[28px] lg:mb-5 lg:text-[32px]">
                {main.title}
              </h1>
              <p className="text-[15px] leading-[1.6] text-[#333] md:text-lg">{main.content.slice(0, 350)}...</p>
            </div>
          </article>
        </Link>

        <h2 className="mb-[30px] mt-10 inline-block border-b-2 border-brand-teal pb-[15px] font-mont text-2xl font-bold text-black md:text-[28px]">
          Інші новини
        </h2>

        <section className="mb-[50px] grid grid-cols-1 gap-[25px] font-exo md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-10">
          {grid.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </section>

        <Pagination />
      </main>

      <Footer hoverClass="hover:text-brand-teal" />
      <MobileMenu variant="light" />
    </>
  );
}
