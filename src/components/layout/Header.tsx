import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { getNavItems } from "@/data/navigation";
import { getLocale, translate } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import HeaderSearch from "./HeaderSearch";

export type HeaderVariant = "dark" | "light";

const styles = {
  dark: {
    bar: "bg-header-dark text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] z-[100]",
    link: "text-white group-hover:text-brand-lime hover:text-brand-lime group-hover:border-brand-lime",
    search: "text-white hover:text-brand-lime",
  },
  light: {
    bar: "bg-header-light text-brand shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-10",
    link: "text-brand group-hover:text-brand-teal hover:text-brand-teal group-hover:border-brand-teal",
    search: "text-brand hover:text-brand-teal",
  },
};

export default async function Header({ variant = "dark" }: { variant?: HeaderVariant }) {
  const s = styles[variant];
  const locale = await getLocale();
  const navItems = getNavItems(locale);

  return (
    <header
      className={`sticky top-0 flex h-[70px] items-center justify-between whitespace-nowrap px-5 lg:px-8 xl:px-[110px] ${s.bar}`}
    >
      <Link href="/" className="flex w-[280px] items-center gap-[5px] font-mont text-[13px] font-bold leading-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={variant === "light" ? "/images/logo-5.svg" : "/images/logo-3.svg"} alt={translate(locale, "instituteName")} className="h-[50px] w-[50px]" />
        <span>
          {locale === "uk" ? (
            <>ННІ інформаційних<br />технологій та<br />робототехніки</>
          ) : (
            <>Institute of<br />Information Technologies<br />and Robotics</>
          )}
        </span>
      </Link>

      <div className="flex items-center gap-3 xl:hidden">
 <HeaderSearch
              ariaLabel={translate(locale, "search")}
              locale={locale}
              className={`transition-colors ${s.search}`}
            />
                    <a href="#mobile-menu-overlay" aria-label={translate(locale, "openMenu")}>
          <Bars3Icon aria-hidden="true" className="size-8" />
        </a>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden xl:block">
        <ul className="flex items-center font-exo text-base font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="group relative flex h-[70px] items-center px-[15px]">
              <Link
                href={item.href}
                className={`border-b border-transparent transition-colors ${s.link}`}
              >
                {item.label}
              </Link>

              {item.children && (
                <ul className="invisible absolute left-0 top-[70px] w-full min-w-max rounded-b-md bg-white py-[5px] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        {...(child.external && { target: "_blank", rel: "noreferrer" })}
                        className="block px-5 py-[15px] text-[15px] text-brand transition-all hover:bg-brand/5 hover:pl-6 hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="flex h-[70px] items-center px-[10px]">
            <LanguageSwitcher locale={locale} variant={variant} />
          </li>
          <li className="flex h-[70px] items-center px-[15px]">
            <HeaderSearch
              ariaLabel={translate(locale, "search")}
              locale={locale}
              className={`transition-colors ${s.search}`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}