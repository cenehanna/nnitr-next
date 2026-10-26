import Image from "next/image";
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import type { Person } from "@/data/administration";
import { getLocale, translate } from "@/lib/i18n";

export default async function AdminCard({ person }: { person: Person }) {
  const locale = await getLocale();
  const details = locale === "uk" ? person.uk : person;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#eef0f2] bg-[#fdfdfd] shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      <div className="relative h-[350px] w-full overflow-hidden bg-[#f4f4f4]">
        <Image
          src={person.image}
          alt={`${person.surname} ${person.name}`}
          fill
          sizes="(min-width: 992px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex grow flex-col p-[25px]">
        <span className="mb-[15px] self-start rounded-[20px] bg-[#e3f2fd] px-3 py-1 text-[0.8rem] font-semibold uppercase text-[#0d47a1]">
          {details.badge}
        </span>
        <h2 className="mb-2.5 text-[1.4rem] font-bold leading-[1.3] text-[#111]">
          {details.surname}
          <br />
          {details.name}
        </h2>
        <p className="mb-[15px] text-[0.95rem] italic leading-[1.4] text-[#555]">{details.role}</p>

        <div className="mb-5 space-y-[5px] border-t border-[#f0f0f0] pt-[15px] text-[0.9rem] text-[#666]">
          {details.degrees.map((d) => (
            <p key={d}>{d}</p>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 pb-5 text-[0.95rem]">
          <a href={`tel:${person.phoneHref}`} className="inline-flex items-center text-[#333] transition-colors hover:text-[#0d47a1]">
            <PhoneIcon aria-hidden="true" className="mr-2.5 size-4 shrink-0 text-[#0d47a1]" /> {person.phone}
          </a>
          <a href={`mailto:${person.email}`} className="inline-flex items-center text-[#333] transition-colors hover:text-[#0d47a1]">
            <EnvelopeIcon aria-hidden="true" className="mr-2.5 size-4 shrink-0 text-[#0d47a1]" /> {person.email}
          </a>
        </div>

        <button
          type="button"
          className="w-full rounded-md border-2 border-[#0d47a1] p-2.5 font-semibold text-[#0d47a1] transition-colors hover:bg-[#0d47a1] hover:text-white"
        >
          {translate(locale, "readMore")} <ArrowRightIcon aria-hidden="true" className="ml-1 inline size-4" />
        </button>
      </div>
    </article>
  );
}
