import Image from "next/image";
import { artwork, bookInfo } from "@/lib/site";

export function BookCover({ compact = false }: { compact?: boolean }) {
  return (
    <figure
      aria-label={`${bookInfo.title} book cover artwork`}
      className={`relative mx-auto w-full ${compact ? "max-w-[280px]" : "max-w-[420px]"}`}
    >
      <div className="rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#17324d]/18 ring-1 ring-[#17324d]/8">
        <Image
          alt={`${bookInfo.title} cover art`}
          className="aspect-square w-full rounded-[1.4rem] object-cover"
          height={900}
          priority={!compact}
          src={artwork.cover}
          width={900}
        />
      </div>
      <Image
        alt=""
        aria-hidden="true"
        className="absolute -right-5 -top-5 size-20 rotate-12 drop-shadow-xl sm:size-28"
        height={280}
        src={artwork.rainbowBubbleCutout}
        width={280}
      />
      <figcaption className="sr-only">
        {bookInfo.title} by {bookInfo.author}
      </figcaption>
    </figure>
  );
}
