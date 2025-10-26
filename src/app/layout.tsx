import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const brandFont = Nunito({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "9nyanghea — Make Korean learning fun",
  description:
    "Pop-culture Korean lessons packed with comedy skits, K-pop lyric breakdowns, and K-drama or movie scripts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
