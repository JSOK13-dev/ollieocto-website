import type { Metadata } from "next";
import { Gift } from "lucide-react";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeading } from "@/components/section-heading";
import { merchWaitlistItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ollie the Octopus Merch Waitlist | Plush, Stickers, Activity Book",
  description:
    "Join the Ollie the Octopus merch waitlist for future plush toys, Sparkle Bay stickers, and Ollie activity books.",
  alternates: {
    canonical: "/merch-waitlist"
  }
};

export default function MerchWaitlistPage() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Merch waitlist"
          title="Be first in line for Sparkle Bay merch"
          text="Collect interest only for now. No ecommerce is needed until the products are ready."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {merchWaitlistItems.map((item) => (
            <article
              className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
              key={item.title}
            >
              <div className="grid size-12 place-items-center rounded-full bg-[#b89cff]/35 text-[#17324d]">
                <Gift aria-hidden="true" size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-black text-[#17324d]">
                {item.title}
              </h2>
              <p className="mt-2 leading-7 text-[#44617a]">{item.text}</p>
              <div className="mt-5">
                <EmailSignup
                  buttonLabel="Join Waitlist"
                  compact
                  placeholder="Parent email"
                  source={`merch-${item.title}`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
