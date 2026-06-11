import Image from "next/image";
import { bookOneCharacters, characters, futureCharacters } from "@/lib/site";

type Character = (typeof characters)[number];

export function CharacterGrid({
  group = "all"
}: {
  group?: "all" | "book-one" | "future";
}) {
  const selected =
    group === "book-one"
      ? bookOneCharacters
      : group === "future"
        ? futureCharacters
        : characters;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {selected.map((character, index) => (
        <CharacterIntro
          character={character}
          featured={index === 0 && group === "all"}
          key={`${character.name}-${index}`}
        />
      ))}
    </div>
  );
}

function CharacterIntro({
  character,
  featured = false
}: {
  character: Character;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl shadow-[#17324d]/10 ring-1 ring-[#17324d]/8 ${
        featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-6" : ""
      }`}
    >
      <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[#ffd166]/30 blur-2xl" />
      <div className="absolute -left-8 bottom-8 size-24 rounded-full bg-[#ff4fa3]/16 blur-2xl" />
      <div
        className={`relative mx-auto grid aspect-square place-items-center rounded-[1.5rem] bg-[linear-gradient(180deg,#eafcff,#fffaf0)] ${
          featured ? "max-w-[360px]" : "max-w-[285px]"
        }`}
      >
        <Image
          alt={`${character.name} artwork`}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          height={700}
          src={character.image}
          width={700}
        />
      </div>
      <div className={`relative mt-3 ${featured ? "lg:mt-0 lg:text-left" : "text-center"}`}>
        <p className={`mx-auto w-fit rounded-full bg-[#ff7c70]/14 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#5b2a86] ${
          featured ? "lg:mx-0" : ""
        }`}>
          {character.role}
        </p>
        <h3 className={`font-brand font-black leading-tight text-[#17324d] ${
          featured ? "mt-3 text-3xl md:text-4xl" : "mt-3 text-2xl"
        }`}>
          {character.name}
        </h3>
        <div className="mt-4 grid gap-3 text-left text-sm leading-6 text-[#44617a]">
          <p>
            <span className="font-black text-[#17324d]">Trait: </span>
            {character.trait}
          </p>
          <p>
            <span className="font-black text-[#17324d]">Superpower: </span>
            {character.superpower}
          </p>
          <p className="rounded-2xl bg-[#fff3d0] px-4 py-3 font-black text-[#17324d]">
            &quot;{character.catchphrase}&quot;
          </p>
          <p>{character.text}</p>
        </div>
      </div>
    </article>
  );
}
