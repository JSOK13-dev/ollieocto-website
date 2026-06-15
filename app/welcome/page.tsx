import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download } from "lucide-react";
import { activityPackDownloadUrl, amazonBookUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Activity Pack Download",
  description: "Download the Ollie Ocean Adventure Activity Pack.",
  robots: {
    index: false,
    follow: false
  }
};

export default function WelcomePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <CheckCircle2 aria-hidden="true" className="mx-auto text-[#2ec4d6]" size={64} />
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
        Welcome to Sparkle Bay
      </p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-[#17324d]">
        Your Activity Pack Is Ready
      </h1>
      <p className="mt-4 text-lg leading-8 text-[#44617a]">
        Download the final Ollie Ocean Adventure Pack with coloring pages,
        activities, and printable fun from Sparkle Bay.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7c70] px-6 py-3 font-black text-white shadow-lg shadow-[#ff7c70]/25"
          download
          href={activityPackDownloadUrl}
          style={{ color: "#ffffff" }}
        >
          <Download aria-hidden="true" size={18} />
          <span>Download Activity Pack</span>
        </a>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-[#ffd166] px-6 py-3 font-black text-[#17324d]"
          href="/youtube"
          style={{ color: "#17324d" }}
        >
          <span>Watch Ollie Videos</span>
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-[#17324d] px-6 py-3 font-black text-white"
          href={amazonBookUrl}
          style={{ color: "#ffffff" }}
          target="_blank"
        >
          <span>Buy on Amazon</span>
        </Link>
      </div>
    </section>
  );
}
