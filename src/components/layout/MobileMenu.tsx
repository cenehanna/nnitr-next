import Link from "next/link";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "@/data/navigation";
import type { HeaderVariant } from "./Header";

const styles = {
  dark: {
    bg: "bg-header-dark",
    text: "text-white",
    sub: "text-[#e0e0e0]",
    line: "border-white/10",
    active: "peer-checked:text-brand-yellow",
  },
  light: {
    bg: "bg-header-light",
    text: "text-brand",
    sub: "text-brand",
    line: "border-brand/30",
    active: "peer-checked:text-brand-teal",
  },
};

/** Повноекранне меню без JS: відкривається через :target, підменю — через checkbox. */
export default function MobileMenu({ variant = "dark" }: { variant?: HeaderVariant }) {
  const s = styles[variant];

  return (
    <div
      id="mobile-menu-overlay"
      className={`fixed left-0 top-0 z-[9999] flex h-screen w-full translate-x-full justify-center overflow-y-auto transition-transform duration-[400ms] ease-in-out target:translate-x-0 ${s.bg} ${s.text}`}
    >
      <a href="#" aria-label="Закрити" className="absolute right-[25px] top-5">
        <XMarkIcon aria-hidden="true" className="size-9" />
      </a>

      <nav className="w-full px-[30px] pb-10 pt-20 font-exo">
        <ul>
          {variant === "light" && (
            <li className="mb-[5px]">
              <Link href="/" className={`block border-b py-[15px] text-xl font-semibold ${s.line}`}>
                ГОЛОВНА
              </Link>
            </li>
          )}
          {navItems.map((item) => (
            <li key={item.label} className="mb-[5px]">
              {item.children ? (
                <>
                  <input type="checkbox" id={`drop-${item.label}`} className="peer hidden" />
                  <label
                    htmlFor={`drop-${item.label}`}
                    className={`flex cursor-pointer select-none items-center justify-between border-b py-[15px] text-xl font-semibold peer-checked:[&>svg]:rotate-180 ${s.line} ${s.active}`}
                  >
                    {item.label}
                    <ChevronDownIcon aria-hidden="true" className="size-4 opacity-70 transition-transform" />
                  </label>
                  <ul className="max-h-0 overflow-hidden pl-[15px] transition-[max-height] duration-[350ms] ease-out peer-checked:max-h-[400px]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          {...(child.external && { target: "_blank", rel: "noreferrer" })}
                          className={`block border-b py-3 text-base ${s.line} ${s.sub}`}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={`block border-b py-[15px] text-xl font-semibold ${s.line}`}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
