import type { Locale } from "@/lib/i18n";

export function formatDate(iso: string, locale: Locale = "uk"): string {
  return new Date(iso).toLocaleDateString(locale === "uk" ? "uk-UA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
