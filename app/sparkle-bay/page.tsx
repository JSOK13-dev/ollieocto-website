import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";
import { sparkleBayLocations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sparkle Bay Map",
  description:
    "Explore Sparkle Bay, the ocean world of Ollie the Octopus, with Ollie's Clam House, Coral Garden, Rainbow Bubble Lagoon, and more."
};

export default function SparkleBayPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Sparkle Bay"
            title="Every adventure begins with a bubble"
            text="Sparkle Bay gives the brand a repeatable world for books, videos, activity packs, merch, and classroom resources."
          />
          <div className="relative mt-10 min-h-[560px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#a7efd2] via-[#2ec4d6] to-[#b89cff] p-5 shadow-2xl shadow-[#17324d]/14">
            <div className="absolute inset-0 ocean-grid opacity-50" />
            <div className="absolute bottom-0 left-0 h-40 w-full rounded-t-[60%] bg-[#ffd166]/55" />
            {sparkleBayLocations.map((location) => (
              <article
                className={`absolute ${location.position} z-10 w-44 -translate-x-1/2 rounded-2xl bg-white/92 p-4 shadow-lg ring-1 ring-[#17324d]/10 backdrop-blur`}
                key={location.name}
              >
                <div className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="text-[#ff7c70]" size={18} />
                  <h2 className="text-sm font-black text-[#17324d]">
                    {location.name}
                  </h2>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#44617a]">
                  {location.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <StickySignup source="sparkle-bay-page" />
    </>
  );
}
