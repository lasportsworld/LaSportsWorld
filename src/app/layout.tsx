import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LA Sports World | Youth Sports Coaching Los Angeles",
  description:
    "Elite youth sports coaching in Los Angeles. Private lessons, camps, clinics & parties for ages 4–18. Basketball, soccer, football and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
