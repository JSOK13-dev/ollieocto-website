import type { Metadata } from "next";
import {
  ActivityPackSection,
  BookSection,
  BrandClosingSection,
  CharactersSection,
  HomeHero,
  ReviewsSection
} from "@/components/home-sections";
import { bookInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: `${bookInfo.title} | Ocean Picture Book for Ages 3-5`,
  description:
    "Official site for Ollie the Octopus and the Great Bubble Chase, a colorful ocean adventure picture book about friendship, kindness, curiosity, and courage for ages 3-5.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${bookInfo.title} | Ollie the Octopus`,
    description:
      "A bright preschool ocean adventure picture book about friendship, courage, and kindness.",
    url: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BookSection />
      <CharactersSection />
      <ActivityPackSection />
      <ReviewsSection />
      <BrandClosingSection />
    </>
  );
}
