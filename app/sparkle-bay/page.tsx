import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";
import { artwork, futureAdventureIdeas, sparkleBayLocations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sparkle Bay | Ollie the Octopus Ocean Adventure World",
  description:
    "Explore Sparkle Bay, the underwater world of Ollie the Octopus with coral paths, the Kelp Forest, friendship moments, and preschool ocean adventure settings.",
  alternates: {
    canonical: "/sparkle-bay"
  }
};

const placeNames = ["Sparkle Bay", "The Coral Path", "The Kelp Forest"];

export default function SparkleBayPage() {
  return (
    <>
      <section className="storybook-scene bg-[#eafcff] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Sparkle Bay"
            title="Swim through Ollie's story world"
            text="The Great Bubble Chase begins in bright Sparkle Bay, glides through coral, and turns into a gentle rescue in the Kelp Forest."
          />
          <div className="mt-10 grid gap-8">
            {sparkleBayLocations.map((location, index) => (
              <article
                className="storybook-scene min-h-[460px] rounded-[2rem] shadow-2xl shadow-[#17324d]/12 ring-1 ring-[#17324d]/8"
                key={location.name}
              >
                <Image
                  alt={`${placeNames[index]} from Ollie the Octopus`}
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(min-width: 768px) 1100px, 100vw"
                  src={location.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17324d]/62 via-[#17324d]/12 to-transparent" />
                <Image
                  alt=""
                  aria-hidden="true"
                  className="absolute right-4 top-4 w-20 rotate-12 drop-shadow-xl sm:w-28"
                  height={280}
                  src={artwork.rainbowBubbleCutout}
                  width={280}
                />
                <div className="relative z-10 flex min-h-[460px] items-end p-5 md:p-8">
                  <div className="max-w-xl rounded-[1.75rem] bg-[#fffaf0]/86 p-5 shadow-xl shadow-[#17324d]/12 backdrop-blur">
                    <p className="storybook-eyebrow">{index === 0 ? "Where it begins" : "Story place"}</p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">
                      {placeNames[index]}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-[#44617a]">
                      {location.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <section className="mt-12 rounded-[2rem] bg-[#17324d] p-6 text-white shadow-xl shadow-[#17324d]/18">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd166]">
              More Sparkle Bay Fun
            </p>
            <h2 className="mt-3 text-3xl font-black">
              More gentle ocean moments are waiting
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-white/82">
              Book 1 stays rooted in Sparkle Bay, the coral areas, and the
              Kelp Forest. Future adventures can keep following the Rainbow
              Bubble into new wonders.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {futureAdventureIdeas.map((idea) => (
                <div
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold"
                  key={idea}
                >
                  <Sparkles aria-hidden="true" className="text-[#ffd166]" size={20} />
                  {idea}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <StickySignup source="sparkle-bay-page" />
    </>
  );
}
