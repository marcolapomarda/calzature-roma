import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calzature Roma",
  description:
    "Calzature, abbigliamento elegante e accessori selezionati a Roma.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[var(--color-bg-main)] text-[var(--color-text-main)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

