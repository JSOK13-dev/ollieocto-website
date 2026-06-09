import { EmailSignup } from "@/components/email-signup";

export function StickySignup({ source = "page-sticky" }: { source?: string }) {
  return (
    <section className="bg-[#fff3d0] px-5 py-6">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ff7c70]">
            Free for parents and teachers
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#17324d]">
            Get the Free Ollie Ocean Adventure Pack
          </h2>
        </div>
        <EmailSignup compact source={source} />
      </div>
    </section>
  );
}
