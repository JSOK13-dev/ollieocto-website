import {
  ActivityPackSection,
  BookSection,
  BrandClosingSection,
  CharactersSection,
  HomeHero,
  ReviewsSection
} from "@/components/home-sections";

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
