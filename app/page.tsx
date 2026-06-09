import {
  Benefits,
  CharacterPreview,
  Hero,
  SignupBand,
  StoryPreview,
  Testimonials,
  VideoPreview
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <CharacterPreview />
      <StoryPreview />
      <Testimonials />
      <SignupBand />
      <VideoPreview />
    </>
  );
}
