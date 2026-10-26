"use server";

import { cookies } from "next/headers";
import { getLocaleFromFormData } from "@/lib/i18n";

export async function setLanguage(formData: FormData) {
  const locale = getLocaleFromFormData(formData);
  if (!locale) throw new Error("Unsupported language selection");

  const cookieStore = await cookies();
  cookieStore.set("locale", locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
