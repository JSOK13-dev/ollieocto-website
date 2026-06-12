import type { Metadata } from "next";
import { Award, Eye, Map, Palette, ScrollText, Star } from "lucide-react";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { activityPackItems, brandMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Ollie Ocean Adventure Activity Pack",
  description:
    "Get free Ollie the Octopus coloring pages, spot the difference, ocean maze, character pages, and printable certificate."
};

const icons = [Palette, Eye, Map, ScrollText, Star, Award];

export default function ActivityPackPage() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
            {brandMessage.setting}
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#17324d] md:text-6xl">
            {brandMessage.leadMagnet}
          </h1>
          <p className="mt-5 text-xl font-black text-[#2b6f85]">
            {brandMessage.core}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#44617a]">
            A parent and teacher-friendly printable pack that introduces the
            Sparkle Bay crew while building coloring, observation, problem
            solving, and confidence. Enter your email and the download opens
            right away.
          </p>
          <div className="mt-8">
            <EmailSignup
              buttonLabel="Get the Free Pack"
              source="activity-pack-landing"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {activityPackItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                className="rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                key={item}
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#ffd166] text-[#17324d]">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h2 className="mt-4 text-xl font-black text-[#17324d]">
                  {item}
                </h2>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
