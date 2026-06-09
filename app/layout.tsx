import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnalyticsPlaceholders } from "@/components/analytics";
import { ConversionLayer } from "@/components/conversion-layer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SchemaMarkup } from "@/components/schema-markup";
import { bookInfo } from "@/lib/site";

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
    `${bookInfo.title} is a warm, colorful Sparkle Bay picture book about a Rainbow Bubble chase, friendship, teamwork, and gentle problem-solving for ages 3-5.`,
  keywords: [
    "Ollie the Octopus",
    "octopus children's book",
    "ocean adventure book for kids",
    "sea animal picture book",
    "bedtime story ages 3-5",
    "preschool ocean book",
    "friendship picture book",
    "social emotional learning children's book",
    "Sparkle Bay",
    "children's character brand",
    "free ocean activity pack",
    "kindness stories for preschool"
  ],
  openGraph: {
    title: "Ollie the Octopus",
    description: bookInfo.description,
    url: siteUrl,
    siteName: "Ollie the Octopus",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ollie the Octopus",
    description:
      "Ocean adventures, friendship, courage, and gentle SEL for ages 3-5."
  },
  alternates: {
    canonical: "/"
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
        <AnalyticsPlaceholders />
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
        <ConversionLayer />
      </body>
    </html>
  );
}
