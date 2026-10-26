import type { Metadata } from "next";
import { Exo_2, Montserrat_Alternates } from "next/font/google";
import { getLocale, translate } from "@/lib/i18n";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-exo",
  display: "swap",
});

const mont = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mont",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: translate(locale, "instituteName"),
    icons: {
      icon: "/images/favicon.png",
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${exo.variable} ${mont.variable}`}>
      <body className="bg-white font-exo">{children}</body>
    </html>
  );
}
