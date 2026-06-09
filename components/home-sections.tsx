import { CheckCircle2, PlayCircle, Quote } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { ButtonLink } from "@/components/button-link";
import { CharacterGrid } from "@/components/character-card";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { bookBenefits, bookInfo, brandMessage, testimonials } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eefcf8]">
      <div className="wave-mask absolute inset-x-0 top-0 h-24 bg-[#2ec4d6]/18" />
      <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[1.08fr_0.92fr] md:py-16">
        <div className="relative z-10">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#ff7c70] shadow-sm">
            {brandMessage.setting} | Picture book for ages 3-5
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[0.95] text-[#17324d] sm:text-5xl md:text-7xl">
            Ollie the Octopus and the Great Bubble Chase
          </h1>
          <p className="mt-4 text-2xl font-black text-[#2b6f85]">
            {brandMessage.core}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#31546f] md:text-xl">
            A heartwarming Sparkle Bay adventure about friendship, teamwork,
            and kindness for ages 3–5.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <ButtonLink className="w-full" href="/buy" variant="sun">
              Buy Now
            </ButtonLink>
            <ButtonLink
              className="w-full"
              href="/activity-pack"
              variant="secondary"
            >
              Get Free Activity Pack
            </ButtonLink>
            <ButtonLink
              className="w-full bg-white/65"
              href="/youtube"
              variant="ghost"
            >
              Watch Videos
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-bold text-[#31546f] sm:grid-cols-3">
            {["Parent-friendly", "Teacher-ready", brandMessage.tagline].map(
              (item) => (
                <div className="flex items-center gap-2" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="shrink-0 text-[#2ec4d6]"
                    size={18}
                  />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <div className="relative z-10 pb-8 md:pb-0">
          <BookCover />
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Why families love Ollie"
          text="Built for the moments parents, teachers, and caregivers care about: connection, language, empathy, and joyful rereading."
          title="A colorful story with a calm, useful heart"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bookBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                className="rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                key={benefit.title}
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#a7efd2] text-[#17324d]">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#17324d]">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-7 text-[#44617a]">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StoryPreview() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <BookCover compact />
        <div>
          <SectionHeading
            eyebrow="The story"
            title="A giant Rainbow Bubble, a fast chase, and one tangled forest"
            text={bookInfo.description}
          />
          <p className="mt-5 leading-8 text-[#44617a]">
            Based on the current {bookInfo.pages}-page manuscript by{" "}
            {bookInfo.author}, this first story introduces the rhythm of the
            brand: wonder, friends joining in, a gentle problem, and a kind
            solution children can understand.
          </p>
          <div className="mt-7">
            <ButtonLink href="/about-ollie">Meet Ollie</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CharacterPreview() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Meet the crew"
          title="Ollie leads a colorful cast of ocean friends"
          text="Each recurring character carries a clear emotional role, a superpower, and a catchphrase children can repeat. Every adventure begins when the Rainbow Bubble appears."
        />
        <div className="mt-10">
          <CharacterGrid />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Reviews"
          title="Coming Soon: Reviews from parents, teachers, and early readers."
        />
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-6 text-center shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7">
          <Quote aria-hidden="true" className="mx-auto text-[#ff7c70]" size={28} />
          <p className="mt-4 text-lg font-bold leading-8 text-[#31546f]">
            {testimonials[0].quote}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SignupBand() {
  return (
    <section className="bg-[#17324d] px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd166]">
            Free parent resources
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            Get the Free Ollie Ocean Adventure Pack
          </h2>
          <ul className="mt-5 grid gap-3 text-sm font-bold text-white/82 sm:grid-cols-2">
            {[
              "Coloring pages",
              "Ocean maze",
              "Character activities",
              "Kindness certificate"
            ].map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-[#ffd166]"
                  size={18}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <EmailSignup />
      </div>
    </section>
  );
}

export function VideoPreview() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <SectionHeading
            eyebrow="Coming to YouTube"
            title="Short ocean stories with a familiar, comforting structure"
            text="Build a future channel around quick hooks, expressive thumbnails, simple emotional payoffs, and parent-safe made-for-kids packaging."
          />
          <div className="rounded-2xl bg-[#17324d] p-4 shadow-xl shadow-[#17324d]/16">
            <div className="grid aspect-video place-items-center rounded-xl bg-gradient-to-br from-[#2ec4d6] via-[#a7efd2] to-[#ffd166] text-center text-[#17324d]">
              <div>
                <PlayCircle aria-hidden="true" className="mx-auto" size={54} />
                <p className="mt-3 text-lg font-black">YouTube embed area</p>
                <p className="mt-1 text-sm font-bold">
                  Sparkle Bay videos are coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
