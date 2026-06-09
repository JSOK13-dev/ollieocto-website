import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BarChart3, Clock, Film, Hash, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { StickySignup } from "@/components/sticky-signup";
import {
  latestVideos,
  longFormIdeas,
  shortsIdeas,
  youtubePlaylists
} from "@/lib/site";

export const metadata: Metadata = {
  title: "YouTube Videos and Growth Plan",
  description:
    "A made-for-kids YouTube content plan for Ollie the Octopus, including Shorts ideas, long-form ideas, thumbnail guidance, SEO tags, and safe growth tactics."
};

const titleFormulas = [
  "Ollie Learns to [Kindness Skill]",
  "Can Ollie Help the [Sea Animal]?",
  "A Brave Little Octopus Story for Kids",
  "Guess the Ocean Animal with Ollie",
  "Bedtime in Sparkle Bay: A Calm Ocean Story"
];

const tags = [
  "Ollie the Octopus",
  "octopus kids story",
  "ocean animals for preschool",
  "children's book read aloud",
  "bedtime story ages 3-5",
  "friendship story for kids",
  "social emotional learning",
  "#OllieTheOctopus",
  "#KidsBooks",
  "#OceanAnimals",
  "#BedtimeStory",
  "#PreschoolLearning"
];

export default function YouTubePage() {
  return (
    <>
      <section className="overflow-hidden px-4 py-14 sm:px-5 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="YouTube growth hub"
            title="Subscribe for Sparkle Bay stories, Shorts, and ocean learning"
            text="Ollie remains the main character, while recurring friends create familiar episode roles. Use ethical high-retention principles: quick hooks, emotional payoff, clear packaging, repeated structure, and consistent character moments."
          />
          <div className="mt-8 flex justify-center">
            <ButtonLink
              className="w-full max-w-sm sm:w-auto"
              href="https://www.youtube.com/"
              target="_blank"
              variant="sun"
            >
              Subscribe on YouTube
            </ButtonLink>
          </div>

        <div className="mt-10 grid min-w-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl bg-[#17324d] p-5 text-white shadow-xl shadow-[#17324d]/18">
            <h2 className="text-2xl font-black">Latest videos</h2>
            <div className="mt-4 grid gap-3">
              {latestVideos.map((video) => (
                <div
                  className="grid aspect-video place-items-center rounded-xl bg-gradient-to-br from-[#2ec4d6] via-[#a7efd2] to-[#ffd166] p-5 text-center text-[#17324d]"
                  key={video}
                >
                  <div>
                    <Film aria-hidden="true" className="mx-auto" size={36} />
                    <p className="mt-3 font-black">{video}</p>
                    <p className="mt-1 text-sm font-bold">Video coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
            <h2 className="text-2xl font-black text-[#17324d]">
              Featured playlists
            </h2>
            <div className="mt-4 grid gap-3">
              {youtubePlaylists.map((playlist) => (
                <div
                  className="rounded-xl bg-[#eefcf8] px-4 py-3 font-black text-[#17324d]"
                  key={playlist}
                >
                  {playlist}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
          <h2 className="text-2xl font-black text-[#17324d]">
            Shorts carousel
          </h2>
          <div className="mt-4 flex max-w-full gap-4 overflow-x-auto pb-3">
            {shortsIdeas.slice(0, 10).map((short) => (
              <article
                className="grid aspect-[9/16] w-36 shrink-0 place-items-end rounded-2xl bg-gradient-to-br from-[#ff7c70] via-[#ffd166] to-[#2ec4d6] p-4 shadow-md sm:w-44"
                key={short}
              >
                <h3 className="text-base font-black leading-tight text-[#17324d] sm:text-lg">
                  {short}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Channel names",
              text: "Ollie the Octopus, Ollie's Ocean Adventures, Storytime with Ollie, Sparkle Bay Kids."
            },
            {
              icon: Film,
              title: "Channel description",
              text: "Warm ocean stories, read-alouds, gentle SEL, sea animal facts, and Rainbow Bubble adventures for ages 3-5."
            },
            {
              icon: ShieldCheck,
              title: "Banner copy",
              text: "Look! The Rainbow Bubble! Ocean stories for kind hearts. New Shorts weekly. Parent-friendly adventures for preschoolers."
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article
                className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                key={item.title}
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#a7efd2] text-[#17324d]">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h2 className="mt-5 text-xl font-black text-[#17324d]">
                  {item.title}
                </h2>
                <p className="mt-2 leading-7 text-[#44617a]">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ContentList title="First 30 Shorts Ideas" items={shortsIdeas} />
          <ContentList title="First 10 Long-Form Ideas" items={longFormIdeas} />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <StrategyCard
            icon={<Sparkles aria-hidden="true" />}
            title="Thumbnail Style Guide"
            items={[
              "Bright aqua or sunny yellow background with one expressive character face.",
              "One readable phrase max: Brave Choice, Kindness Quest, Guess Who?",
              "Use coral accents, big eyes, clear emotion, and high contrast.",
              "Keep screenshots simple enough to read on a parent's phone."
            ]}
          />
          <StrategyCard
            icon={<Clock aria-hidden="true" />}
            title="Upload Schedule"
            items={[
              "3 Shorts per week: Monday, Wednesday, Friday.",
              "1 long-form video every two weeks until production rhythm is steady.",
              "Batch scripts by theme: kindness, courage, bedtime, ocean facts.",
              "Repurpose every long-form episode into 3-5 Shorts."
            ]}
          />
          <StrategyCard
            icon={<Hash aria-hidden="true" />}
            title="Title Formulas and SEO Tags"
            items={[...titleFormulas, ...tags]}
          />
          <StrategyCard
            icon={<BarChart3 aria-hidden="true" />}
            title="Growth and Retention System"
            items={[
              "Open every Short with a 1-2 second hook: a question, surprise, or emotional problem.",
              "Use a familiar structure: Rainbow Bubble trigger, tiny problem, attempt, kind choice, payoff, parent subscribe prompt.",
              "Give Ollie repeatable catchphrases like 'Eight arms, one kind heart!'",
              "Create playlists by kindness, courage, bedtime, ocean facts, and read-alouds.",
              "Manually A/B-test titles and thumbnails; track retention, CTR, rewatches, and subscriber conversion."
            ]}
          />
        </div>

        <div className="mt-12 rounded-2xl bg-[#17324d] p-6 text-white shadow-xl shadow-[#17324d]/18">
          <h2 className="text-2xl font-black">Made-for-kids safety notes</h2>
          <div className="mt-4 grid gap-3 text-white/82 md:grid-cols-2">
            {[
              "Follow YouTube's made-for-kids settings and avoid collecting personal information from children.",
              "Avoid direct calls for children to comment, share personal details, or make purchases.",
              "Aim end screens at parents and caregivers, not children.",
              "Use calm, age-appropriate pacing and avoid fear-based hooks.",
              "Keep claims educational and gentle; do not present medical or therapeutic promises.",
              "Review all music, sound effects, and visuals for proper licensing."
            ].map((item) => (
              <p className="rounded-xl bg-white/10 p-4 leading-7" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
        </div>
      </section>
      <StickySignup source="youtube-page" />
    </>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
      <h2 className="text-2xl font-black text-[#17324d]">{title}</h2>
      <ol className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <li className="flex gap-3 leading-7 text-[#44617a]" key={item}>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ffd166] text-sm font-black text-[#17324d]">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

function StrategyCard({
  icon,
  title,
  items
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
      <div className="flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-full bg-[#b89cff]/35 text-[#17324d]">
          {icon}
        </div>
        <h2 className="text-2xl font-black text-[#17324d]">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="leading-7 text-[#44617a]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
