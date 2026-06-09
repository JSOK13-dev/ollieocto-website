import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function CheckoutCancelPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <AlertCircle aria-hidden="true" className="mx-auto text-[#ff7c70]" size={64} />
      <h1 className="mt-5 text-4xl font-black text-[#17324d]">
        Checkout was canceled.
      </h1>
      <p className="mt-4 text-lg leading-8 text-[#44617a]">
        No worries. You can return to the book page or use one of the fallback
        retailer options.
      </p>
      <Link
        className="mt-8 inline-flex rounded-full bg-[#17324d] px-6 py-3 font-black text-white shadow-lg shadow-[#17324d]/18"
        href="/buy"
      >
        Back to buying options
      </Link>
    </section>
  );
}
