import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff7c70]">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-black text-[#17324d]">
        This tide pool is empty.
      </h1>
      <p className="mt-4 text-lg text-[#44617a]">
        Let&apos;s swim back to Ollie&apos;s homepage.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-[#17324d] px-6 py-3 font-bold text-white shadow-lg shadow-[#17324d]/15"
        href="/"
      >
        Go home
      </Link>
    </section>
  );
}
