import { setLanguage } from "@/app/actions";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  variant: "dark" | "light";
};

export default function LanguageSwitcher({ locale, variant }: Props) {
  const active = variant === "dark" ? "text-brand-yellow" : "text-brand-teal";

  return (
    <form action={setLanguage} aria-label={locale === "uk" ? "Мова" : "Language"}>
      <div className={`flex items-center gap-1 font-exo text-sm font-semibold ${variant === "dark" ? "text-white" : "text-brand"}`}>
        <button
          type="submit"
          name="locale"
          value="uk"
          aria-label="Українська"
          aria-pressed={locale === "uk"}
          className={`rounded px-1 py-2 transition-colors hover:underline ${locale === "uk" ? active : ""}`}
        >
          UA
        </button>
        <span aria-hidden="true">/</span>
        <button
          type="submit"
          name="locale"
          value="en"
          aria-label="English"
          aria-pressed={locale === "en"}
          className={`rounded px-1 py-2 transition-colors hover:underline ${locale === "en" ? active : ""}`}
        >
          EN
        </button>
      </div>
    </form>
  );
}
