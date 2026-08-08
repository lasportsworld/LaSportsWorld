import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://lasportsworld.com"),
  title: "LA Sports World | Youth Sports Coaching Los Angeles",
  description:
    "Youth pods, groups, classes, camps, and private events in Los Angeles for ages 6 months to 17 years.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LA Sports World",
    title: "LA Sports World | Youth Sports Coaching Los Angeles",
    description:
      "Mobile pods, groups, private events, classes, camps, and school or business programs for children across Los Angeles.",
    images: [
      {
        url: "/images/hero-lasw.jpg",
        width: 1200,
        height: 630,
        alt: "LA Sports World coaches leading activities for children",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Sports World | Youth Sports Coaching Los Angeles",
    description:
      "Mobile pods, groups, private events, classes, camps, and school or business programs for children across Los Angeles.",
    images: ["/images/hero-lasw.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {/* GTM noscript: immediately after body open */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHL4RSTG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteChrome>{children}</SiteChrome>
        {/* GTM script */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PHL4RSTG');`,
          }}
        />
      </body>
    </html>
  );
}
