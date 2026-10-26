import Image from "next/image";
import { mobilityCards } from "@/data/home";
import { getLocale, translate } from "@/lib/i18n";

export default async function AcademicMobility() {
  const locale = await getLocale();

  return (
    <section className="flex w-full flex-col items-center bg-brand-mist px-5 py-10 sm:px-[60px] lg:px-[110px] lg:pb-20 lg:pt-[60px]">
      <h2 className="mb-2.5 text-center font-mont text-[26px] font-bold text-black sm:text-[28px] lg:mb-[15px] lg:text-[40px]">
        {translate(locale, "academicMobility")}
      </h2>
      <p className="mb-[30px] max-w-[900px] text-center font-exo text-base font-medium leading-[1.4] text-[#333] lg:mb-[50px]">
        {translate(locale, "academicMobilityDescription")}
      </p>

      <div className="flex w-full flex-col gap-[30px] font-exo lg:flex-row lg:justify-between">
        {mobilityCards.map((card) => (
<a key={card.title} href={card.href} className="group flex flex-1 flex-col">
  <div className="relative isolate mb-5 h-[200px] w-full overflow-hidden rounded-2xl sm:h-[350px] lg:h-60">
    <Image
      src={card.image}
      alt={locale === "uk" ? card.altUk : card.alt}
      fill
      sizes="(min-width: 992px) 33vw, 100vw"
      className="transform-gpu object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
    />
  </div>
            <h3 className="mb-3 block w-fit border-b-2 border-transparent pb-1 text-lg font-bold leading-[1.3] text-black transition-colors group-hover:border-brand-blue group-hover:text-brand-blue lg:text-[22px]">
              {locale === "uk" ? card.titleUk : card.title}
            </h3>
            <p className="text-[15px] leading-normal text-[#2b2b2b]">{locale === "uk" ? card.textUk : card.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
