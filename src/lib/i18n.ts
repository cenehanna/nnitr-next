import { cookies } from "next/headers";
import type { Locale } from "@/lib/i18n-messages";

export { messages, translate } from "@/lib/i18n-messages";
export type { Locale, MessageKey } from "@/lib/i18n-messages";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return cookieStore.get("locale")?.value === "en" ? "en" : "uk";
}

export function getLocaleFromFormData(formData: FormData): Locale | undefined {
  const locale = formData.get("locale");
  return locale === "uk" || locale === "en" ? locale : undefined;
}
