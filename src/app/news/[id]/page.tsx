import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SideNewsCard from "@/components/news/SideNewsCard";
import { formatDate } from "@/lib/date";
import { getNewsById, news } from "@/data/news";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getNewsById((await params).id);
  return { title: item ? `${item.title} — ННІ ІТ та робототехніки` : "Новину не знайдено" };
}

export default async function NewsArticlePage({ params }: Props) {
  const item = getNewsById((await params).id);
  if (!item) notFound();

  const side = news.filter((n) => n.id !== item.id).slice(0, 12);

  return (
    <>
      <Header variant="light" />
      <Breadcrumbs current="Новини" article={item.title} />

      <main className="flex w-full flex-col items-start gap-10 border-b-2 border-[#e0e0e0] bg-white px-[15px] pb-5 pt-5 md:px-10 md:py-[30px] lg:flex-row lg:gap-[50px] lg:px-[110px] lg:pt-5">
        <section className="w-full min-w-0 lg:flex-[2.5]">
          <article>
            <time dateTime={item.createdAt} className="mb-[15px] block font-mont text-base font-medium text-brand-teal">
              {formatDate(item.createdAt)}
            </time>
            <h1 className="mb-5 font-mont text-2xl font-bold leading-[1.25] text-black md:text-[28px] lg:text-4xl">
              {item.title}
            </h1>

            <div className="relative mb-[30px] aspect-[16/9] max-h-[480px] w-full overflow-hidden rounded-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image src={item.imagePath} alt={item.title} fill priority sizes="(min-width: 992px) 65vw, 100vw" className="object-cover" />
            </div>

            <div className="space-y-[15px] font-exo text-[15px] leading-[1.6] text-[#333] md:text-lg lg:px-5">
              {item.content.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Link
              href="/news"
              className="mt-[30px] inline-flex items-center rounded-full bg-brand px-10 py-4 font-mont text-base font-semibold text-white transition hover:-translate-y-px hover:bg-brand-teal"
            >
              <ArrowLeftIcon aria-hidden="true" className="mr-2.5 size-5" /> Повернутися до новин
            </Link>
          </article>
        </section>

        <aside className="w-full border-t border-[#e0e0e0] bg-white pt-[30px] lg:sticky lg:top-[90px] lg:flex-1 lg:border-0 lg:pl-[30px] lg:pt-0">
          <h2 className="mb-[25px] w-full border-b-2 border-brand-teal pb-2.5 font-mont text-[22px] font-bold text-black">
            Інші новини
          </h2>
          <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:flex lg:flex-col">
            {side.map((n) => (
              <SideNewsCard key={n.id} item={n} />
            ))}
          </div>
        </aside>
      </main>

      <Footer hoverClass="hover:text-brand-teal" />
      <MobileMenu variant="light" />
    </>
  );
}
