import { CheckCircle2, Download, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { BookCover } from "@/components/book-cover";
import { ButtonLink } from "@/components/button-link";
import { CharacterGrid } from "@/components/character-card";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { amazonBookUrl, artwork, bookInfo, testimonials, videoAssets } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="brand-hero overflow-hidden px-5 py-12 md:py-16">
      <BubbleField />
      <CoralAccent side="left" />
      <CoralAccent side="right" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
        <div className="max-w-2xl">
          <p className="storybook-eyebrow">Ollie the Octopus</p>
          <h1 className="brand-display mt-4 max-w-[11ch] text-3xl font-black leading-tight text-[#17324d] min-[390px]:text-4xl sm:max-w-2xl sm:text-5xl md:text-6xl">
            <span className="title-ocean">Ollie the Octopus</span>
            <span className="mt-1 block text-[#5b2a86]">and the</span>
            <span className="title-bubble mt-1 block">Great Bubble Chase</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#31546f] sm:text-lg md:text-xl">
            A bright, bubbly ocean adventure about friendship, curiosity, and
            courage for young readers.
          </p>
          <div className="relative z-30 mt-7 grid w-full max-w-md gap-3 sm:flex sm:max-w-none sm:flex-row sm:items-center">
            <ButtonLink
              aria-label="Buy on Amazon"
              className="w-full sm:w-auto"
              href={amazonBookUrl}
              target="_blank"
              variant="coral"
            >
              <ShoppingBag aria-hidden="true" size={18} />
              <span>Buy on Amazon</span>
            </ButtonLink>
            <ButtonLink
              aria-label="Get the Free Activity Pack"
              className="w-full sm:w-auto"
              href="#free-pack"
              variant="bubble"
            >
              <Download aria-hidden="true" size={18} />
              <span>Get the Free Activity Pack</span>
            </ButtonLink>
          </div>
          <div className="mt-7 grid gap-3 text-sm font-bold text-[#31546f] sm:grid-cols-3">
            {["Ages 3-5", "Parent-friendly", "Read-aloud ready"].map((item) => (
              <span className="flex items-center gap-2" key={item}>
                <CheckCircle2 aria-hidden="true" className="text-[#2ec4d6]" size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <Image
            alt=""
            aria-hidden="true"
            className="bubble-float absolute -right-4 -top-10 z-10 size-24 rotate-12 drop-shadow-2xl sm:size-32"
            height={320}
            src={artwork.rainbowBubbleCutout}
            width={320}
          />
          <div className="absolute -right-5 -top-5 size-28 rounded-full bg-[#ffd166]/45 blur-2xl" />
          <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#17324d]/16 ring-1 ring-[#17324d]/8">
            <span className="absolute -left-4 top-8 size-10 rounded-full border-4 border-white/90 bg-[#2ec4d6]/25 shadow-lg" />
            <span className="absolute -bottom-4 right-10 size-14 rounded-full border-4 border-white/90 bg-[#ff4fa3]/20 shadow-lg" />
            <Image
              alt="Ollie the Octopus book artwork"
              className="aspect-[1.1/1] w-full rounded-[1.5rem] object-cover"
              height={900}
              priority
              src={artwork.cover}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookSection() {
  return (
    <section className="storybook-band bg-[#fffaf0] px-5 py-16" id="book">
      <BubbleField subtle />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <BookCover />
          <p className="mt-4 text-center text-sm font-black uppercase tracking-[0.14em] text-[#5b2a86]">
            Available on Amazon
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="The Book"
            title="Meet Ollie, a curious little octopus"
            text="Meet Ollie, a curious little octopus who follows a mysterious bubble through an unforgettable ocean adventure."
          />
          <div className="mt-6 grid gap-3 text-sm font-bold text-[#31546f] sm:grid-cols-2">
            {bookInfo.themes.map((theme) => (
              <span className="flex items-center gap-2" key={theme}>
                <CheckCircle2 aria-hidden="true" className="text-[#2ec4d6]" size={18} />
                {theme}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink href={amazonBookUrl} target="_blank" variant="sun">
              Buy on Amazon
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CharactersSection() {
  return (
    <section className="underwater-band px-5 py-16">
      <BubbleField subtle />
      <CoralAccent side="left" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          centered
          eyebrow="Meet Ollie"
          title="Meet Ollie & Friends"
          text="Every great adventure is better with friends. Meet the colorful ocean crew that helps Ollie discover courage, kindness, teamwork, and curiosity."
        />
        <div className="mt-10">
          <CharacterGrid />
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-5 rounded-[2rem] bg-white p-5 text-center shadow-xl shadow-[#17324d]/10 ring-1 ring-[#17324d]/8 sm:grid-cols-[auto_1fr] sm:text-left">
          <div className="mx-auto grid size-24 place-items-center rounded-full bg-[#eafcff] shadow-inner">
            <Image
              alt=""
              aria-hidden="true"
              className="bubble-float size-20 object-contain"
              height={220}
              src={artwork.rainbowBubbleCutout}
              width={220}
            />
          </div>
          <div className="self-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ff7c70]">
              The Rainbow Bubble
            </p>
            <h3 className="mt-2 font-brand text-2xl font-black text-[#17324d]">
              The magical mystery that starts every adventure.
            </h3>
            <p className="mt-2 text-lg font-black text-[#5b2a86]">
              &quot;Look! The Rainbow Bubble!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ActivityPackSection() {
  return (
    <section className="deep-sea-band px-5 py-16 text-[#17324d]" id="free-pack">
      <BubbleField subtle />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="rounded-[2rem] bg-white/92 p-5 shadow-xl shadow-[#17324d]/10 ring-1 ring-[#17324d]/8 md:p-7">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff9f1c]">
            Free Parent & Teacher Resource
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">
            Free Ollie Ocean Adventure Activity Pack
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-8 text-[#31546f]">
            Get coloring pages, an ocean maze, character pages, and a printable
            certificate for home, classrooms, and storytime.
          </p>
          <ul className="mt-6 grid gap-3 text-sm font-black text-[#31546f] sm:grid-cols-2">
            {[
              "Coloring pages",
              "Ocean maze",
              "Character pages",
              "Printable certificate"
            ].map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <CheckCircle2 aria-hidden="true" className="text-[#ffd166]" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#17324d]">
          <EmailSignup
            buttonLabel="Send My Pack"
            placeholder="Parent or teacher email"
            source="homepage-activity-pack"
          />
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="storybook-band bg-[#fffaf0] px-5 py-16">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="storybook-eyebrow mx-auto">Reviews</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">
          {testimonials[0].quote}
        </h2>
      </div>
    </section>
  );
}

export function BrandClosingSection() {
  return (
    <section className="underwater-band px-5 py-16">
      <BubbleField subtle />
      <CoralAccent side="right" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="storybook-eyebrow">Sparkle Bay</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">
            Kind hearts. Big adventures.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#44617a]">
            Ollie the Octopus is built for cozy read-aloud moments, preschool
            curiosity, ocean appreciation, and gentle conversations about
            friendship.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/characters" variant="secondary">
              Meet Ollie
            </ButtonLink>
            <ButtonLink href="/about-ollie" variant="ghost">
              About Ollie
            </ButtonLink>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[460px] gap-4">
          <Image
            alt="Ollie the Octopus smiling in Sparkle Bay"
            className="mx-auto aspect-square w-full object-contain drop-shadow-2xl"
            height={900}
            src={artwork.ollieCutout}
            width={900}
          />
          <div className="rounded-[1.5rem] bg-white p-3 shadow-xl shadow-[#17324d]/10 ring-1 ring-[#17324d]/8">
            <video
              aria-label="Ollie the Octopus short video preview"
              className="aspect-[9/16] max-h-[520px] w-full rounded-[1.1rem] bg-[#17324d] object-cover"
              controls
              playsInline
              poster={artwork.cover}
              preload="metadata"
              src={videoAssets.firstShort}
            />
            <p className="mt-3 text-center text-sm font-black uppercase tracking-[0.12em] text-[#5b2a86]">
              Watch the first Ollie short
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backward-compatible exports are intentionally omitted from the homepage.
// The public homepage is a brand/book landing page, not a page-by-page preview.

function BubbleField({ subtle = false }: { subtle?: boolean }) {
  const opacity = subtle ? "opacity-35" : "opacity-60";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${opacity}`}>
      <span className="bubble-dot left-[7%] top-[18%] size-5" />
      <span className="bubble-dot left-[18%] top-[70%] size-3 animation-delay-2" />
      <span className="bubble-dot right-[12%] top-[18%] size-6 animation-delay-3" />
      <span className="bubble-dot right-[23%] top-[64%] size-4 animation-delay-1" />
      <span className="bubble-dot left-[48%] top-[10%] size-3 animation-delay-4" />
    </div>
  );
}

function CoralAccent({ side }: { side: "left" | "right" }) {
  const position = side === "left" ? "left-0" : "right-0 scale-x-[-1]";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 hidden h-40 w-32 ${position} md:block`}
    >
      <span className="absolute bottom-0 left-6 h-28 w-4 rounded-t-full bg-[#ff4fa3]/55" />
      <span className="absolute bottom-0 left-12 h-36 w-4 rounded-t-full bg-[#6fc34a]/55" />
      <span className="absolute bottom-0 left-20 h-24 w-4 rounded-t-full bg-[#ffc43d]/65" />
      <span className="absolute bottom-8 left-9 h-4 w-12 rotate-[-35deg] rounded-full bg-[#ff4fa3]/45" />
      <span className="absolute bottom-16 left-14 h-4 w-12 rotate-[35deg] rounded-full bg-[#6fc34a]/45" />
    </div>
  );
}
