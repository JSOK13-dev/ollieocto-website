import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact Joshua Sokolow | Ollie the Octopus Author Visits",
  description:
    "Contact Joshua Sokolow about Ollie the Octopus author visits, school and library storytime, book questions, partnerships, and media.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Questions, school visits, partnerships, and press"
          text="Reach out about Ollie, author visits, school or library storytime, partnerships, or media questions."
        />
        <form className="grid gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-[#17324d]/8 ring-1 ring-[#17324d]/8">
          <label className="grid gap-2 font-bold text-[#17324d]">
            Name
            <input
              className="min-h-12 rounded-xl border border-[#17324d]/12 bg-[#fffaf0] px-4 outline-none focus:border-[#2ec4d6] focus:ring-4 focus:ring-[#2ec4d6]/20"
              name="name"
            />
          </label>
          <label className="grid gap-2 font-bold text-[#17324d]">
            Email
            <input
              className="min-h-12 rounded-xl border border-[#17324d]/12 bg-[#fffaf0] px-4 outline-none focus:border-[#2ec4d6] focus:ring-4 focus:ring-[#2ec4d6]/20"
              name="email"
              type="email"
            />
          </label>
          <label className="grid gap-2 font-bold text-[#17324d]">
            Message
            <textarea
              className="min-h-36 rounded-xl border border-[#17324d]/12 bg-[#fffaf0] px-4 py-3 outline-none focus:border-[#2ec4d6] focus:ring-4 focus:ring-[#2ec4d6]/20"
              name="message"
            />
          </label>
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17324d] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#17324d]/18 transition hover:-translate-y-0.5 hover:bg-[#214563] focus-visible:focus-ring"
            type="submit"
          >
            <MessageCircle aria-hidden="true" size={18} />
            Send Message
          </button>
          <p className="flex items-center gap-2 text-sm font-bold text-[#44617a]">
            <Mail aria-hidden="true" size={18} />
            Or email hello@example.com
          </p>
        </form>
      </div>
    </section>
  );
}
