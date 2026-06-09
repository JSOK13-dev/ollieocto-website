import { Waves } from "lucide-react";
import { bookInfo } from "@/lib/site";

export function BookCover({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-label="Ollie the Octopus book cover artwork"
      className={`relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[1.5rem] bg-[#2ec4d6] p-5 shadow-2xl shadow-[#17324d]/22 ring-8 ring-white ${
        compact ? "max-w-[260px]" : ""
      }`}
      role="img"
    >
      <div className="absolute inset-0 ocean-grid opacity-70" />
      <div className="absolute -right-14 -top-10 size-40 rounded-full bg-[#ffd166]" />
      <div className="absolute -bottom-16 left-0 h-36 w-full rounded-[50%] bg-[#a7efd2]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#17324d]">
            Sparkle Bay Adventure
          </p>
          <h2 className="mt-3 text-center text-[1.7rem] font-black leading-[0.96] text-white drop-shadow-sm">
            Ollie the Octopus
            <span className="mt-1 block text-xl text-[#17324d]">
              and the Great Bubble Chase
            </span>
          </h2>
          <p className="mt-2 text-center text-xs font-black text-[#17324d]">
            By {bookInfo.author}
          </p>
        </div>

        <div className="relative mx-auto h-44 w-48">
          <div className="absolute left-1/2 top-3 size-32 -translate-x-1/2 rounded-full bg-[#f9fbff] shadow-xl shadow-[#17324d]/18 ring-4 ring-[#17324d]/80" />
          <div className="absolute left-[3.9rem] top-3 h-16 w-10 -rotate-12 rounded-full bg-[#f47eb8] ring-4 ring-[#17324d]" />
          <div className="absolute right-[3.9rem] top-3 h-16 w-10 rotate-12 rounded-full bg-[#f47eb8] ring-4 ring-[#17324d]" />
          <div className="absolute left-[4.35rem] top-9 size-4 rounded-full bg-[#111]" />
          <div className="absolute right-[4.35rem] top-9 size-4 rounded-full bg-[#111]" />
          <div className="absolute left-1/2 top-[4.9rem] h-8 w-16 -translate-x-1/2 rounded-b-full border-b-4 border-[#6b3fa0]" />
          <div className="absolute left-1/2 top-[5.9rem] h-4 w-9 -translate-x-1/2 rounded-b-full border-b-4 border-[#17324d]" />
          {[0, 1, 2, 3].map((item) => (
            <div
              className="absolute bottom-2 h-20 w-9 origin-top rounded-full bg-[#dff6ff] ring-4 ring-[#1e7fab]"
              key={item}
              style={{
                left: `${item * 42 + 8}px`,
                transform: `rotate(${[-24, -8, 8, 24][item]}deg)`
              }}
            />
          ))}
        </div>

        <div className="rounded-2xl bg-white/88 px-4 py-3 text-center text-sm font-black text-[#17324d]">
          A Rainbow Bubble chase through Sparkle Bay.
        </div>
      </div>
      <Waves
        aria-hidden="true"
        className="absolute bottom-5 right-5 text-[#17324d]/35"
        size={40}
      />
    </div>
  );
}
