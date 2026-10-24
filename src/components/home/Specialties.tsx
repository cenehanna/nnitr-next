import Image from "next/image";
import Link from "next/link";
import { specialties } from "@/data/home";

export default function Specialties() {
  return (
    <section className="relative z-[1] min-h-screen w-full pt-[30px] sm:pt-0">
      <Image src="/images/_MG_2424.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-specialties-fade" />

      <div className="relative z-[2] flex min-h-screen flex-col justify-center px-5 py-10 sm:px-[50px] sm:py-[60px] lg:px-[150px]">
        <p className="mb-2.5 rounded-[30px] border-2 border-brand-yellow px-5 py-[15px] font-mont text-lg font-semibold leading-[1.4] text-white sm:text-center sm:text-[23px] lg:text-left lg:text-[22px]">
          Навчально-науковий інститут інформаційних технологій та робототехніки
          готує висококваліфікованих фахівців для сучасних галузей IT, автоматизації,
          енергетики та транспорту.
        </p>

        <ul className="my-5 ml-[15px] flex list-[circle] flex-col gap-3.5 text-brand-yellow sm:mx-[50px] lg:mb-10 lg:ml-[70px] lg:mr-10">
          {specialties.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-transparent font-exo text-lg leading-normal text-white transition hover:translate-x-[5px] hover:border-brand-yellow hover:text-brand-yellow sm:text-[22px] lg:text-lg"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full border-t border-brand-yellow/50 pt-[30px] text-center">
          <p className="font-mont text-[17px] font-semibold leading-normal text-white sm:text-[19px] lg:leading-[1.3]">
            Натисніть на спеціальність, щоб дізнатися більше про програму навчання,
            кар&apos;єрні перспективи та умови вступу.
          </p>
        </div>
      </div>
    </section>
  );
}
