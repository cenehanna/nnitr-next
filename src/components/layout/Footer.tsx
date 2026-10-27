import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { getLocale, translate } from "@/lib/i18n";

const socials = [
  { href: "https://www.instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.facebook.com", label: "Facebook", Icon: FaFacebookF },
];

export default async function Footer({ hoverClass = "hover:text-brand-yellow" }: { hoverClass?: string }) {
  const locale = await getLocale();
  const link = `transition-colors ${hoverClass}`;

  return (
    <footer className="w-full border-t border-white/10 bg-brand-footer px-5 py-10 font-exo text-[15px] leading-[1.4] text-white lg:px-[110px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[30px] text-center lg:flex-row lg:justify-between lg:gap-[30px] lg:text-left">
        <div className="shrink-0">
          <Image
            src="/images/nupp_logo.webp"
            alt={translate(locale, "coatOfArms")}
            width={110}
            height={110}
            className="w-[110px]"
            style={{ height: "auto" }}
          />
        </div>

        <div className="flex w-full min-w-[200px] flex-col gap-1.5 lg:flex-1">
          <p>{translate(locale, "admissionsOffice")}</p>
          <a href="tel:+380532561604" className={link}>+38 (0532) 56-16-04</a>
          <a href="tel:+380990576517" className={link}>+38 (099) 057-65-17</a>
        </div>

        <div className="flex w-full min-w-[200px] flex-col gap-1.5 lg:flex-1">
          <p>E-mail: <a href="mailto:kanc@nupp.edu.ua" className={`underline underline-offset-[3px] ${link}`}>kanc@nupp.edu.ua</a></p>
          <p>E-mail: <a href="mailto:vstup@nupp.edu.ua" className={`underline underline-offset-[3px] ${link}`}>vstup@nupp.edu.ua</a></p>
        </div>

        <div className="flex w-full flex-col items-center gap-[15px] lg:w-auto lg:min-w-[250px] lg:items-end">
          <address className="not-italic lg:text-right">
            {locale === "uk"
              ? "36011, Україна, м. Полтава, проспект Віталія Грицаєнка, 24"
              : "24 Vitalii Hrytsaienko Avenue, Poltava, 36011, Ukraine"}
          </address>
          <div className="flex gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`inline-block text-2xl transition hover:-translate-y-[3px] ${hoverClass}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
