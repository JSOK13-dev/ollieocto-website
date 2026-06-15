import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ollie the Octopus",
  description:
    "Privacy policy for the Ollie the Octopus website, activity pack signup, analytics, checkout, and parent or teacher contact information.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
        Privacy
      </p>
      <h1 className="mt-3 text-4xl font-black text-[#17324d]">Privacy Policy</h1>
      <div className="mt-6 space-y-5 leading-8 text-[#44617a]">
        <p>
          This policy explains how the Ollie the Octopus website is intended to
          handle parent and teacher contact information, activity pack signup,
          analytics, and checkout-related services.
        </p>
        <p>
          Do not collect personal information from children. Email signup forms
          should be directed to parents, guardians, teachers, and caregivers.
        </p>
      </div>
    </section>
  );
}
