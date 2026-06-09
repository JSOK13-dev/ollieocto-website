import { characters } from "@/lib/site";

const paletteClasses = {
  blue: "from-[#dff6ff] to-[#a7efd2]",
  gold: "from-[#fff4ba] to-[#ffd166]",
  pink: "from-[#ffd8ef] to-[#b89cff]/45",
  green: "from-[#e5ffe9] to-[#a7efd2]",
  seafoam: "from-[#dffdf0] to-[#89dfc1]",
  coral: "from-[#ffe1d8] to-[#ff9f91]",
  rainbow: "from-[#ffd166] via-[#a7efd2] to-[#b89cff]",
  yellow: "from-[#fff4ba] to-[#ffdc85]",
  red: "from-[#ffe5df] to-[#ffb3a9]"
};

export function CharacterGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {characters.map((character) => (
        <article
          className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
          key={character.name}
        >
          <div
            className={`grid aspect-[5/4] place-items-center overflow-hidden rounded-xl bg-gradient-to-br p-2 ${
              paletteClasses[character.palette as keyof typeof paletteClasses]
            }`}
          >
            <CharacterMark name={character.name} />
          </div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#ff7c70]">
            {character.role}
          </p>
          <h3 className="mt-2 text-2xl font-black text-[#17324d]">
            {character.name}
          </h3>
          <dl className="mt-5 grid gap-4 text-sm">
            <div className="border-t border-[#17324d]/8 pt-4">
              <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#2b6f85]">
                Trait
              </dt>
              <dd className="mt-1 leading-6 text-[#44617a]">
                {character.trait}
              </dd>
            </div>
            <div className="border-t border-[#17324d]/8 pt-4">
              <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#2b6f85]">
                Superpower
              </dt>
              <dd className="mt-1 leading-6 text-[#44617a]">
                {character.superpower}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#2b6f85]">
            Catchphrase
          </p>
          <blockquote className="mt-2 rounded-xl bg-[#fffaf0] px-4 py-3 text-sm font-black leading-6 text-[#17324d]">
            &quot;{character.catchphrase}&quot;
          </blockquote>
          <p className="mt-4 leading-7 text-[#44617a]">{character.text}</p>
        </article>
      ))}
    </div>
  );
}

function CharacterMark({ name }: { name: string }) {
  if (name.includes("Octopus")) return <OllieMark />;
  if (name.includes("Claws")) return <LobsterMark />;
  if (name.includes("Crab")) return <CrabMark />;
  if (name.includes("Puffer")) return <PufferMark />;
  if (name.includes("Starfish")) return <StarfishMark />;
  if (name.includes("Seahorse")) return <SeahorseMark />;
  if (name.includes("Turtle")) return <TurtleMark />;
  if (name.includes("Coral")) return <CoralMark />;
  return <RainbowBubbleMark />;
}

function OllieMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <path d="M65 93C39 72 24 64 12 83" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="8" />
      <path d="M195 93c26-21 41-29 53-10" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="8" />
      <path d="M76 104C40 118 24 135 16 167" fill="none" stroke="#1e7fab" strokeLinecap="round" strokeWidth="13" />
      <path d="M184 104c36 14 52 31 60 63" fill="none" stroke="#1e7fab" strokeLinecap="round" strokeWidth="13" />
      <path d="M58 126c-23 18-31 29-33 48" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="7" />
      <path d="M202 126c23 18 31 29 33 48" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="7" />
      <ellipse cx="130" cy="95" fill="#f9fbff" rx="70" ry="60" stroke="#17324d" strokeWidth="7" />
      <ellipse cx="91" cy="42" fill="#f47eb8" rx="27" ry="34" stroke="#17324d" strokeWidth="6" transform="rotate(-12 91 42)" />
      <ellipse cx="169" cy="42" fill="#f47eb8" rx="27" ry="34" stroke="#17324d" strokeWidth="6" transform="rotate(12 169 42)" />
      <circle cx="82" cy="40" r="10" fill="#111" />
      <circle cx="178" cy="40" r="10" fill="#111" />
      <path d="M112 89c10-16 26-16 36 0M105 98c14 13 37 13 50 0" fill="none" stroke="#6b3fa0" strokeLinecap="round" strokeWidth="5" />
      <path d="M119 121c9 8 18 8 26 0" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="5" />
      {[86, 110, 151, 176, 124, 139].map((x, i) => (
        <circle cx={x} cy={70 + (i % 3) * 16} fill="#6b3fa0" key={x} r="3" />
      ))}
    </svg>
  );
}

function LobsterMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <path d="M75 89 31 61l-18 34 53 20M185 89l44-28 18 34-53 20" fill="#fff8d8" stroke="#b71c1c" strokeWidth="7" />
      <ellipse cx="130" cy="95" fill="#fff" rx="42" ry="60" stroke="#b71c1c" strokeWidth="7" />
      <path d="M90 108c26 28 54 32 85 0" fill="#ffd166" />
      <path d="M92 114c28 22 53 24 78 0" fill="none" stroke="#d89c00" strokeWidth="8" />
      <path d="M112 45c-14-22-30-15-23 5M148 45c14-22 30-15 23 5" fill="#fff8d8" stroke="#b71c1c" strokeWidth="7" />
      <circle cx="114" cy="48" r="6" fill="#b71c1c" />
      <circle cx="146" cy="48" r="6" fill="#b71c1c" />
    </svg>
  );
}

function CrabMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <ellipse cx="130" cy="108" fill="#f35ba1" rx="73" ry="42" stroke="#17324d" strokeWidth="8" />
      <path d="M75 99 44 70M185 99l31-29" stroke="#17324d" strokeLinecap="round" strokeWidth="8" />
      <path d="M47 64c-15 0-20-25-1-35 15 9 19 23 1 35ZM213 64c15 0 20-25 1-35-15 9-19 23-1 35Z" fill="#e93691" stroke="#17324d" strokeWidth="8" />
      <path d="M105 71V43M155 71V43" stroke="#17324d" strokeLinecap="round" strokeWidth="8" />
      <circle cx="105" cy="42" r="17" fill="#fff" stroke="#17324d" strokeWidth="7" />
      <circle cx="155" cy="42" r="17" fill="#fff" stroke="#17324d" strokeWidth="7" />
      <circle cx="105" cy="42" r="5" fill="#e93691" />
      <circle cx="155" cy="42" r="5" fill="#e93691" />
      <path d="M104 109c13 16 37 16 52 0" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
    </svg>
  );
}

function PufferMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <path d="M53 94 18 65v58ZM207 94l35-29v58Z" fill="#f9fbff" stroke="#39206c" strokeWidth="7" />
      <ellipse cx="130" cy="95" fill="#f9fbff" rx="82" ry="60" stroke="#39206c" strokeWidth="8" />
      {[65, 82, 99, 116, 133, 150, 167, 184].map((x) => (
        <path d={`M${x} 37l10-23 10 23`} fill="#fff" key={x} stroke="#22b455" strokeWidth="5" />
      ))}
      <ellipse cx="130" cy="108" fill="#3ed16b" rx="45" ry="28" stroke="#39206c" strokeWidth="6" />
      <circle cx="112" cy="75" r="14" fill="#fff" stroke="#39206c" strokeWidth="7" />
      <circle cx="148" cy="75" r="14" fill="#fff" stroke="#39206c" strokeWidth="7" />
      <circle cx="112" cy="75" r="5" fill="#22b455" />
      <circle cx="148" cy="75" r="5" fill="#22b455" />
      <path d="M112 119c11 8 25 8 36 0" fill="none" stroke="#17324d" strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}

function StarfishMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <path d="M130 14 154 73l65-23-34 57 50 43-67 2-38 53-38-53-67-2 50-43-34-57 65 23Z" fill="#ffd21f" stroke="#aa2b17" strokeLinejoin="round" strokeWidth="7" />
      <circle cx="111" cy="86" r="12" fill="#fff" stroke="#17324d" strokeWidth="5" />
      <circle cx="149" cy="86" r="12" fill="#fff" stroke="#17324d" strokeWidth="5" />
      <circle cx="113" cy="89" r="4" fill="#d47b00" />
      <circle cx="151" cy="89" r="4" fill="#d47b00" />
      <path d="M105 116c17 18 35 18 52 0" fill="none" stroke="#7a170d" strokeLinecap="round" strokeWidth="6" />
    </svg>
  );
}

function SeahorseMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <path d="M145 30c-36-11-55 16-36 43 15 21 13 39-1 57-13 17 2 34 24 24 26-12 14-37-11-28" fill="none" stroke="#b31313" strokeLinecap="round" strokeWidth="13" />
      <path d="M135 58h51" stroke="#b31313" strokeLinecap="round" strokeWidth="14" />
      <path d="M157 58h29" stroke="#fff" strokeLinecap="round" strokeWidth="9" />
      <circle cx="126" cy="36" r="14" fill="#fff" stroke="#b31313" strokeWidth="7" />
      <circle cx="151" cy="41" r="13" fill="#fff" stroke="#b31313" strokeWidth="7" />
      <circle cx="129" cy="38" r="5" fill="#7a170d" />
      <circle cx="153" cy="43" r="5" fill="#7a170d" />
      <path d="M118 71c13 12 28 11 41-1" fill="none" stroke="#7a170d" strokeLinecap="round" strokeWidth="6" />
    </svg>
  );
}

function TurtleMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <ellipse
        cx="130"
        cy="105"
        fill="#63cfa9"
        rx="70"
        ry="46"
        stroke="#17324d"
        strokeWidth="8"
      />
      <ellipse
        cx="130"
        cy="105"
        fill="none"
        rx="42"
        ry="26"
        stroke="#1f8f74"
        strokeWidth="5"
      />
      <circle
        cx="130"
        cy="48"
        r="28"
        fill="#a7efd2"
        stroke="#17324d"
        strokeWidth="7"
      />
      <circle cx="119" cy="43" r="5" fill="#17324d" />
      <circle cx="141" cy="43" r="5" fill="#17324d" />
      <path
        d="M116 58c9 8 20 8 29 0"
        fill="none"
        stroke="#17324d"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M68 92 30 76M192 92l38-16M70 124l-36 17M190 124l36 17"
        stroke="#17324d"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M94 103h72M130 76v58"
        stroke="#1f8f74"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

function CoralMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <circle cx="31" cy="48" r="13" fill="none" stroke="#18b65a" strokeWidth="6" />
      <circle cx="220" cy="45" r="10" fill="none" stroke="#18b65a" strokeWidth="5" />
      <circle cx="226" cy="112" r="11" fill="none" stroke="#18b65a" strokeWidth="5" />
      <path
        d="M55 166c1-32-2-59-17-82 17 0 32 21 36 43M83 166c0-50 3-88-27-116 36 1 60 36 65 78M119 166c-2-61 2-112 16-142 21 31 15 83 5 119M146 166c-6-57 6-119 37-143 18 38 0 81-23 118M178 166c7-50 23-85 58-101-2 33-26 57-50 76M204 166c7-27 26-44 47-38-13 26-33 37-47 38"
        fill="none"
        stroke="#250059"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="17"
      />
      <path
        d="M55 166c1-32-2-59-17-82 17 0 32 21 36 43M83 166c0-50 3-88-27-116 36 1 60 36 65 78M119 166c-2-61 2-112 16-142 21 31 15 83 5 119M146 166c-6-57 6-119 37-143 18 38 0 81-23 118M178 166c7-50 23-85 58-101-2 33-26 57-50 76M204 166c7-27 26-44 47-38-13 26-33 37-47 38"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="11"
      />
      <path
        d="M61 55c7 5 15 7 24 7M127 31c10 8 21 10 34 3M181 31c12 6 22 8 33 6M215 73c8 1 16 5 22 11"
        fill="none"
        stroke="#ff4fa0"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <g fill="#ff4fa0" stroke="#250059" strokeWidth="2">
        {[62, 76, 92, 111, 132, 151, 169, 188, 207, 224, 49, 82, 117, 159, 198].map((x, index) => (
          <circle cx={x} cy={72 + ((index * 19) % 78)} key={`${x}-${index}`} r="4" />
        ))}
      </g>
      <path
        d="M88 166V128c0-17 14-31 31-31h22c17 0 31 14 31 31v38"
        fill="#fff"
        stroke="#250059"
        strokeWidth="7"
      />
      <ellipse cx="113" cy="124" fill="#fff" rx="16" ry="29" stroke="#f5a623" strokeWidth="8" />
      <ellipse cx="149" cy="124" fill="#fff" rx="16" ry="29" stroke="#f5a623" strokeWidth="8" />
      <circle cx="113" cy="126" r="6" fill="#ff4fa0" stroke="#250059" strokeWidth="4" />
      <circle cx="149" cy="126" r="6" fill="#ff4fa0" stroke="#250059" strokeWidth="4" />
      <path d="M126 147c3 3 6 3 9 0" fill="none" stroke="#250059" strokeLinecap="round" strokeWidth="4" />
      <path
        d="M110 160c12 12 31 12 43 0"
        fill="none"
        stroke="#f5a623"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path d="M63 171h134" stroke="#250059" strokeLinecap="round" strokeWidth="10" />
    </svg>
  );
}

function RainbowBubbleMark() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 260 190">
      <circle
        cx="130"
        cy="93"
        r="58"
        fill="#ffffff99"
        stroke="#17324d"
        strokeWidth="7"
      />
      <path
        d="M84 96c16-40 75-46 94-4"
        fill="none"
        stroke="#ff7c70"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M92 111c17-30 59-35 78-3"
        fill="none"
        stroke="#ffd166"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M104 126c16-17 39-19 54 0"
        fill="none"
        stroke="#2ec4d6"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <circle cx="98" cy="58" r="11" fill="#fff" opacity=".75" />
      <circle cx="168" cy="134" r="7" fill="#fff" opacity=".75" />
      <path
        d="M61 46c-12 12-18 27-18 45M199 46c12 12 18 27 18 45"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="7"
        opacity=".85"
      />
    </svg>
  );
}
