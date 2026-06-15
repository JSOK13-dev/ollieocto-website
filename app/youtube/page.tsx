import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BarChart3, Clock, Film, Hash, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { StickySignup } from "@/components/sticky-signup";
import {
  latestVideos,
  firstShortUrl,
  longFormIdeas,
  shortsIdeas,
  videoAssets,
  youtubeChannelUrl,
  youtubePlaylists
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Ollie the Octopus Videos | Storytime, Shorts, and Ocean Fun",
  description:
    "Watch Ollie the Octopus videos, storytime moments, bubbly Shorts, ocean facts, and preschool-friendly Sparkle Bay adventures for families.",
  alternates: {
    canonical: "/youtube"
  }
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
            eyebrow="Ollie Videos"
            title="More Sparkle Bay Fun"
            text="Join Ollie for gentle storytime videos, ocean facts, and preschool-friendly Sparkle Bay adventures."
          />
          <div className="mt-8 flex justify-center">
            <ButtonLink
              className="w-full max-w-sm sm:w-auto"
              href={youtubeChannelUrl}
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
              <div className="rounded-xl bg-white/10 p-3" key="ollie-short">
                <video
                  aria-label="Ollie the Octopus short video"
                  className="aspect-video w-full rounded-lg bg-[#10283e] object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  src={videoAssets.firstShort}
                />
                <p className="mt-3 text-center font-black">
                  Meet Ollie the Octopus
                </p>
                <a
                  className="mt-2 block text-center text-sm font-bold text-[#ffd166] underline-offset-4 hover:underline"
                  href={firstShortUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube Shorts
                </a>
              </div>
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
            <article className="w-36 shrink-0 rounded-2xl bg-[#17324d] p-2 shadow-md sm:w-44">
              <video
                aria-label="Ollie the Octopus short video preview"
                className="aspect-[9/16] w-full rounded-xl bg-[#10283e] object-cover"
                controls
                playsInline
                preload="metadata"
                src={videoAssets.firstShort}
              />
              <h3 className="px-2 py-3 text-base font-black leading-tight text-white sm:text-lg">
                Ollie&apos;s first short
              </h3>
            </article>
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
              title: "Storytime with Ollie",
              text: "Gentle read-aloud moments and cozy Sparkle Bay scenes for families."
            },
            {
              icon: Film,
              title: "Bubbly Shorts",
              text: "Quick, bright moments where a bubble starts a tiny adventure."
            },
            {
              icon: ShieldCheck,
              title: "Parent-friendly videos",
              text: "Warm, safe, preschool-friendly ocean stories for ages 3-5."
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
          <VideoInfoCard
            icon={<Sparkles aria-hidden="true" />}
            title="Thumbnail Style Guide"
            items={[
              "Bright aqua or sunny yellow background with one expressive character face.",
              "One readable phrase max: Brave Choice, Kindness Quest, Guess Who?",
              "Use coral accents, big eyes, clear emotion, and high contrast.",
              "Keep screenshots simple enough to read on a parent's phone."
            ]}
          />
          <VideoInfoCard
            icon={<Clock aria-hidden="true" />}
            title="Upload Schedule"
            items={[
              "3 Shorts per week: Monday, Wednesday, Friday.",
              "1 long-form video every two weeks until production rhythm is steady.",
              "Batch scripts by theme: kindness, courage, bedtime, ocean facts.",
              "Repurpose every long-form episode into 3-5 Shorts."
            ]}
          />
          <VideoInfoCard
            icon={<Hash aria-hidden="true" />}
            title="Title Formulas and SEO Tags"
            items={[...titleFormulas, ...tags]}
          />
          <VideoInfoCard
            icon={<BarChart3 aria-hidden="true" />}
            title="Story Shape"
            items={[
              "Begin with one bright, simple moment.",
              "Give Ollie and his friends one simple problem to solve.",
              "Keep the story warm, bright, and easy for preschoolers to follow.",
              "End with a kind choice or a helpful friend moment.",
              "Invite parents to keep reading, watching, or printing activities."
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

function VideoInfoCard({
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
