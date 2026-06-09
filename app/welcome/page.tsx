import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function WelcomePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <CheckCircle2 aria-hidden="true" className="mx-auto text-[#2ec4d6]" size={64} />
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
        Welcome to Sparkle Bay
      </p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-[#17324d]">
        Your Ollie Ocean Adventure Activity Pack is on the way.
      </h1>
      <p className="mt-4 text-lg leading-8 text-[#44617a]">
        Connect the form to MailerLite before launch so this page follows a
        real signup. For now, it confirms the funnel and gives families a next
        step.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          className="rounded-full bg-[#ffd166] px-6 py-3 font-black text-[#17324d]"
          href="/youtube"
        >
          Watch Ollie Videos
        </Link>
        <Link
          className="rounded-full bg-[#17324d] px-6 py-3 font-black text-white"
          href="/buy"
        >
          Buy the Book
        </Link>
      </div>
    </section>
  );
}
