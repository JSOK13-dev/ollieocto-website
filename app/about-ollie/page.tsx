import type { Metadata } from "next";
import { Heart, Sparkles, Waves } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { CharacterGrid } from "@/components/character-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Ollie",
  description:
    "Meet Ollie the Octopus, a kind and curious picture book character for preschool ocean adventures."
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
            text="Ollie loves shiny shells, hide-and-seek in the kelp forest, and making new friends feel welcome. His adventures help young readers practice empathy, courage, and teamwork without feeling like a lesson."
          />
          <div className="mt-8 grid gap-4">
            {[
              {
                icon: Heart,
                title: "Kind",
                text: "Ollie notices when a friend feels left out and finds a gentle way to help."
              },
              {
                icon: Sparkles,
                title: "Brave",
                text: "He learns that brave can mean asking, trying, apologizing, or taking one small step."
              },
              {
                icon: Waves,
                title: "Wonder-filled",
                text: "Every story invites preschoolers into sea animals, colors, counting, and ocean facts."
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
        <SectionHeading
          centered
          eyebrow="Recurring friends"
          title="The world around Ollie"
          text="Use these characters across books, printable activities, and videos so children quickly recognize the emotional role each friend plays. The Rainbow Bubble becomes the familiar story starter for the whole universe."
        />
        <div className="mt-10">
          <CharacterGrid />
        </div>
      </div>
    </section>
  );
}
