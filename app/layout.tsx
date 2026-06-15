import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics";
import { SignupLayer } from "@/components/signup-layer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SchemaMarkup } from "@/components/schema-markup";
import { bookInfo, seoKeywords } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2ec4d6"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${bookInfo.title} | Ollie the Octopus`,
    template: "%s | Ollie the Octopus"
  },
  description:
    `${bookInfo.title} is a bright ocean adventure picture book about friendship, curiosity, courage, and kindness for young readers ages 3-5.`,
  keywords: seoKeywords,
  openGraph: {
    title: bookInfo.title,
    description:
      "A colorful octopus children's book and preschool ocean adventure from Sparkle Bay.",
    url: siteUrl,
    siteName: "Ollie the Octopus",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: bookInfo.title,
    description:
      "A bright ocean adventure picture book about friendship, curiosity, and courage for ages 3-5."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-16 md:pb-0">
        <AnalyticsScripts />
        <SchemaMarkup />
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2ec4d6]/40"
          href="#main"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SignupLayer />
      </body>
    </html>
  );
}
