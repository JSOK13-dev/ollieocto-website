import type { Metadata } from "next";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Ollie the Octopus, Sparkle Bay, character learning themes, and free resources."
};

export default function FAQPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            centered
            eyebrow="FAQ"
            title="Questions parents, teachers, and librarians may ask"
            text="Helpful answers for families, teachers, librarians, and little ocean explorers."
          />
          <div className="mt-10 grid gap-4">
            {faqItems.map((item) => (
              <article
                className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7"
                key={item.question}
              >
                <h2 className="text-xl font-black text-[#17324d]">
                  {item.question}
                </h2>
                <p className="mt-3 leading-7 text-[#44617a]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <StickySignup source="faq-page" />
    </>
  );
}
