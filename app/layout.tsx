import type { Metadata } from "next";
import type { ReactNode } from "react";
import { EB_Garamond, Noto_Serif_JP, Sawarabi_Mincho } from "next/font/google";
import MenuButton from "@/components/parts/MenuButton";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const sawarabiMincho = Sawarabi_Mincho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sawarabi-mincho",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const title = "Yuka -engineer-";

export const metadata: Metadata = {
  title,
  description: title,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${sawarabiMincho.variable} ${ebGaramond.variable}`}>
      <body>
        <MenuButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
