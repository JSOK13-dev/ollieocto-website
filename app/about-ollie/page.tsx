import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Sparkles, Waves } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { SectionHeading } from "@/components/section-heading";
import { artwork } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ollie the Octopus | Main Character and Story World",
  description:
    "Meet Ollie the Octopus, a curious and kind children's picture book character from Sparkle Bay with eight helping arms and a love of ocean adventures.",
  alternates: {
    canonical: "/about-ollie"
  }
};

export default function AboutOlliePage() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <BookCover />
        <div>
          <SectionHeading
            eyebrow="Meet Ollie"
            title="A curious octopus with eight helping arms"
            text="Ollie is a curious little octopus who loves bright surprises, kind choices, and bubbly ocean adventures."
          />
          <div className="mt-8 grid gap-4">
            {[
              {
                icon: Heart,
                title: "Kind",
                text: "When everyone gets stuck in the Kelp Forest, Ollie gently helps his friends get free."
              },
              {
                icon: Sparkles,
                title: "Curious",
                text: "A mysterious bubble catches Ollie's eye and turns an ordinary moment into an adventure."
              },
              {
                icon: Waves,
                title: "Helpful",
                text: "Ollie's eight arms are perfect for solving problems with care."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                  key={item.title}
                >
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#ffd166] text-[#17324d]">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#17324d]">
                      {item.title}
                    </h2>
                    <p className="mt-1 leading-7 text-[#44617a]">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7 md:grid-cols-2 md:items-center">
          <Image
            alt="Ollie in a bright Sparkle Bay ocean scene"
            className="aspect-square w-full rounded-[1.5rem] bg-[#eafcff] object-contain p-4"
            height={900}
            src={artwork.ollieCutout}
            width={900}
          />
          <SectionHeading
            eyebrow="Book 1"
            title="The Great Bubble Chase"
            text="Ollie's first story follows one magical bubble, one tangled forest, and one warm lesson: friends help friends."
          />
        </div>
      </div>
    </section>
  );
}
