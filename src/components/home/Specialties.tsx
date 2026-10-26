"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { specialties, specialtiesMasters } from "@/data/home"; // Імпортуємо обидва списки
import { translate } from "@/lib/i18n-messages";
import type { Locale } from "@/lib/i18n-messages";

export default function Specialties({ locale }: { locale: Locale }) {
  // Стан для відстеження активної вкладки
  const [activeTab, setActiveTab] = useState<"bachelor" | "master">("bachelor");

  // Визначаємо, який список показувати зараз
  const currentList = activeTab === "bachelor" ? specialties : specialtiesMasters;

  return (
    <section
      id="specialties"
      className="relative z-[1] min-h-screen w-full pt-[30px] sm:pt-0"
    >
      <Image src="/images/_MG_2424.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-specialties-fade" />

      <div className="relative z-[2] flex min-h-screen flex-col justify-center px-5 py-10 sm:px-[50px] sm:py-[60px] lg:px-[150px]">
        <p className="mb-2.5 rounded-[30px] border-2 border-brand-yellow px-5 py-[15px] font-mont text-lg font-semibold leading-[1.4] text-white sm:text-center sm:text-[23px] lg:text-left lg:text-[22px]">
          {translate(locale, "specialtyIntro")}
        </p>

        {/* Навігація вкладок */}
        <div className="mt-8 flex gap-8 sm:mx-[50px] lg:ml-[70px]">
          <button
            onClick={() => setActiveTab("bachelor")}
            className={`border-b-2 pb-1 font-mont text-[20px] font-bold transition-colors ${
              activeTab === "bachelor"
                ? "border-brand-yellow text-brand-yellow"
                : "border-transparent text-white hover:border-brand-yellow hover:text-brand-yellow"
            }`}
          >
            {locale === "uk" ? "Бакалавр" : "Bachelor"}
          </button>
          <button
            onClick={() => setActiveTab("master")}
            className={`border-b-2 pb-1 font-mont text-[20px] font-bold transition-colors ${
              activeTab === "master"
                ? "border-brand-yellow text-brand-yellow"
                : "border-transparent text-white hover:border-brand-yellow hover:text-brand-yellow"
            }`}
          >
            {locale === "uk" ? "Магістр" : "Master"}
          </button>
        </div>

        {/* Список спеціальностей */}
        <ul className="my-5 ml-[15px] flex list-[circle] flex-col gap-3.5 text-brand-yellow sm:mx-[50px] lg:mb-10 lg:ml-[70px] lg:mr-10">
          {currentList.map(({ name, nameUk, href }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-transparent font-exo text-lg leading-normal text-white transition hover:translate-x-[5px] hover:border-brand-yellow hover:text-brand-yellow sm:text-[22px] lg:text-lg"
              >
                {locale === "uk" ? nameUk : name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full border-t border-brand-yellow/50 pt-[30px] text-center">
          <p className="font-mont text-[17px] font-semibold leading-normal text-white sm:text-[19px] lg:leading-[1.3]">
            {translate(locale, "specialtyPrompt")}
          </p>
        </div>
      </div>
    </section>
  );
}