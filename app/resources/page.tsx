import type { Metadata } from "next";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { StickySignup } from "@/components/sticky-signup";
import { resourceCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Coloring Pages and Parent Resources",
  description:
    "Download free Ollie the Octopus coloring pages, parent resources, teacher prompts, and preschool friendship activities."
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
            text="Build the Sparkle Bay brand into something parents, teachers, librarians, and preschool programs can use again and again."
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
            <h2 className="text-2xl font-black">Resource roadmap</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Weekly kindness activity tied to a character catchphrase",
                "Keke reef care facts for libraries and classrooms",
                "Spike courage sheets for trying new things",
                "Lily calm-down prompts for circle time",
                "Sparkle Bay certificate after children finish the activity pack",
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
