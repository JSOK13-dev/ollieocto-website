import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <CheckCircle2 aria-hidden="true" className="mx-auto text-[#2ec4d6]" size={64} />
      <h1 className="mt-5 text-4xl font-black text-[#17324d]">
        Thank you for bringing Ollie home.
      </h1>
      <p className="mt-4 text-lg leading-8 text-[#44617a]">
        This is the Amazon Pay success page. Connect order fulfillment,
        confirmation email, and analytics once live checkout is enabled.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-[#ffd166] px-6 py-3 font-black text-[#17324d] shadow-lg shadow-[#ffd166]/30"
        href="/resources"
      >
        Get free coloring pages
      </Link>
    </section>
  );
}
