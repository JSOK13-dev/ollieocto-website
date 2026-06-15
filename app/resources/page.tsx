import type { Metadata } from "next";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { StickySignup } from "@/components/sticky-signup";
import { resourceCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Ollie Coloring Pages and Preschool Ocean Resources",
  description:
    "Free Ollie the Octopus coloring pages, parent resources, teacher prompts, read-aloud questions, ocean facts, and preschool friendship activities.",
  alternates: {
    canonical: "/resources"
  }
};

export default function ResourcesPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Parent and teacher resources"
            title="Lesson plans, SEL sheets, coloring pages, and ocean facts"
            text="Printable activities and read-aloud ideas inspired by Ollie, colorful ocean scenes, coral, bubbles, and Sparkle Bay."
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <EmailSignup source="resources-page" />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resourceCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                  key={card.title}
                >
                  <div className="grid size-12 place-items-center rounded-full bg-[#b89cff]/35 text-[#17324d]">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-[#17324d]">
                    {card.title}
                  </h2>
                  <p className="mt-2 leading-7 text-[#44617a]">{card.text}</p>
                </article>
              );
            })}
          </div>
          <section className="mt-12 rounded-2xl bg-[#17324d] p-6 text-white shadow-xl shadow-[#17324d]/18">
            <h2 className="text-2xl font-black">Inside the Activity Pack</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Ollie coloring pages",
                "Ollie character activity sheets",
                "Bubble maze",
                "Kelp Forest kindness prompts",
                "Sparkle Bay certificate",
                "Read-aloud questions for parents and teachers"
              ].map((item) => (
                <p className="rounded-xl bg-white/10 p-4 leading-7" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
      <StickySignup source="resources-sticky" />
    </>
  );
}
