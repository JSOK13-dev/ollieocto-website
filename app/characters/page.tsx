import type { Metadata } from "next";
import { CharacterGrid } from "@/components/character-card";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Ollie the Octopus Characters | Meet the Sparkle Bay Friends",
  description:
    "Meet Ollie the Octopus, Stella Starfish, Finn the Pufferfish, Zippy the Seahorse, Coral the Crab, Grumpy Gus, Keke, and the colorful friends of Sparkle Bay.",
  alternates: {
    canonical: "/characters"
  }
};

export default function CharactersPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Sparkle Bay"
            title="Meet the Friends of Sparkle Bay"
            text="Every friend brings something special to Ollie's bright underwater world."
          />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Meet Ollie"
              title="Ollie the Octopus"
              text="Curious, kind, and ready for a bright ocean adventure."
            />
            <div className="mt-6">
              <CharacterGrid group="book-one" />
            </div>
          </div>
          <div className="mt-14">
            <SectionHeading
              eyebrow="More friends"
              title="More Sparkle Bay Friends"
              text="Colorful ocean friends help make every Ollie adventure warmer, braver, and more fun."
            />
            <div className="mt-6">
              <CharacterGrid group="future" />
            </div>
          </div>
        </div>
      </section>
      <StickySignup source="characters-page" />
    </>
  );
}
