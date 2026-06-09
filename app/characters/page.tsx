import type { Metadata } from "next";
import { CharacterGrid } from "@/components/character-card";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";
import { characters } from "@/lib/site";

export const metadata: Metadata = {
  title: "Character Universe",
  description:
    "Meet Ollie the Octopus, Stella Starfish, Spike the Pufferfish, Zippy the Seahorse, Grumpy Gus, Lily, Keke, and the Rainbow Bubble."
};

export default function CharactersPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Character universe"
            title="Meet the Sparkle Bay crew"
            text="A premium character platform built around clear roles, repeatable catchphrases, and emotional learning families can recognize."
          />
          <div className="mt-10">
            <CharacterGrid />
          </div>
          <section className="mt-12 rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
            <h2 className="text-2xl font-black text-[#17324d]">
              Character FAQ
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {characters.map((character) => (
                <article className="rounded-xl bg-[#eefcf8] p-4" key={character.name}>
                  <h3 className="font-black text-[#17324d]">
                    What does {character.name} teach?
                  </h3>
                  <p className="mt-2 leading-7 text-[#44617a]">
                    {character.name} helps children explore {character.trait.toLowerCase()}.
                    Favorite activity: {character.favoriteActivity}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <StickySignup source="characters-page" />
    </>
  );
}
