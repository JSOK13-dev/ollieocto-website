import type { Metadata } from "next";
import { ExternalLink, Package, ShieldCheck } from "lucide-react";
import { AmazonPayButton } from "@/components/amazon-pay-button";
import { BookCover } from "@/components/book-cover";
import { ButtonLink } from "@/components/button-link";
import { amazonBookUrl, bookInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buy the Book",
  description:
    `Buy ${bookInfo.title} by ${bookInfo.author} directly, use Amazon Pay checkout, or choose retailer fallback options.`
};

const amazonUrl = process.env.NEXT_PUBLIC_AMAZON_BUY_URL || amazonBookUrl;
const ingramUrl =
  process.env.NEXT_PUBLIC_INGRAMSPARK_RETAILER_URL || "https://shop.ingramspark.com/";
const stripeUrl = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

export default function BuyPage() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <BookCover />
          <p className="mt-4 text-center text-sm font-black uppercase tracking-[0.14em] text-[#5b2a86]">
            Available on Amazon
          </p>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
            Buy the book
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#17324d] md:text-6xl">
            Bring {bookInfo.title} home for your next cozy storytime.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#44617a]">
            {bookInfo.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {bookInfo.themes.map((theme) => (
              <span
                className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#17324d] shadow-sm ring-1 ring-[#17324d]/8"
                key={theme}
              >
                {theme}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm font-bold leading-6 text-[#44617a]">
            Written and illustrated by {bookInfo.author}. {bookInfo.pages} pages.
            First edition, {bookInfo.copyrightYear}.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#44617a]">
            Choose direct checkout or one of the retailer options below. Secure
            payment setup is prepared for launch and can be connected when the
            store account is ready.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-xl shadow-[#17324d]/8 ring-1 ring-[#17324d]/8">
            <div className="flex items-start gap-3">
              <ShieldCheck
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#2ec4d6]"
              />
              <div>
                <h2 className="text-xl font-black text-[#17324d]">
                  Secure direct checkout
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#44617a]">
                  Amazon Pay is prepared for secure direct purchasing once
                  store credentials are connected. Fallback retailer links are
                  available below.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <AmazonPayButton />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={amazonUrl} variant="sun" target="_blank">
              Buy on Amazon <ExternalLink aria-hidden="true" size={16} />
            </ButtonLink>
            <ButtonLink href={ingramUrl} variant="secondary" target="_blank">
              IngramSpark / Retailer <Package aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          {stripeUrl ? (
            <div className="mt-3">
              <ButtonLink href={stripeUrl} variant="primary" target="_blank">
                Stripe Payment Link <ExternalLink aria-hidden="true" size={16} />
              </ButtonLink>
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-[#eefcf8] px-4 py-3 text-sm font-bold text-[#31546f]">
              A Stripe Payment Link can be added later as an additional buying
              option.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
