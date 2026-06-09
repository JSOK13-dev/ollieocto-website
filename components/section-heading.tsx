type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#17324d] md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-[#44617a] md:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
