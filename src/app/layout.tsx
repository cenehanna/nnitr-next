import type { Metadata } from "next";
import { Exo_2, Montserrat_Alternates } from "next/font/google";
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

export const metadata: Metadata = {
  title: "ННІ інформаційних технологій та робототехніки",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${exo.variable} ${mont.variable}`}>
      <body className="bg-white font-exo">{children}</body>
    </html>
  );
}
