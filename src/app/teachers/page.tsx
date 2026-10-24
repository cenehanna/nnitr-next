import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import AdminCard from "@/components/home/AdminCard";
import { administration } from "@/data/administration";

export const metadata: Metadata = { title: "Адміністрація — ННІ ІТ та робототехніки" };

export default function TeachersPage() {
  return (
    <>
      <Header variant="dark" />

      <section className="mx-auto max-w-[1200px] bg-white px-5 py-[60px] font-exo">
        <h1 className="mb-10 text-center font-mont text-[2.5rem] font-bold uppercase text-[#1a1a1a]">
          Адміністрація інституту
        </h1>
        <div className="mb-[30px] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[30px]">
          {administration.map((person) => (
            <AdminCard key={person.surname} person={person} />
          ))}
        </div>
      </section>

      <Footer />
      <MobileMenu variant="dark" />
    </>
  );
}
