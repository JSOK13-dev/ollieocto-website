# Ollie the Octopus Website

A polished, mobile-first Next.js website for the children's picture book brand **Ollie the Octopus**. It includes brand pages, SEO metadata, email capture placeholders, YouTube channel strategy, retailer fallbacks, and an Amazon Pay Checkout v2 scaffold.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- TypeScript
- lucide-react icons

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp .env.local.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:3000.

## Amazon Pay Checkout v2 Setup

The site includes a safe placeholder integration:

- Button: `components/amazon-pay-button.tsx`
- Backend route: `app/api/amazon-pay/create-checkout-session/route.ts`
- Success page: `app/checkout/success/page.tsx`
- Cancel page: `app/checkout/cancel/page.tsx`
- Error page: `app/checkout/error/page.tsx`

Copy `.env.local.example` to `.env.local` and paste your Amazon Pay credentials there:

```bash
AMAZON_PAY_SANDBOX=true
AMAZON_PAY_MERCHANT_ID=paste_your_merchant_id_here
AMAZON_PAY_PUBLIC_KEY_ID=paste_your_public_key_id_here
AMAZON_PAY_PRIVATE_KEY_PATH=./private/amazon-pay-private-key.pem
AMAZON_PAY_STORE_ID=paste_your_store_id_here
AMAZON_PAY_REGION=US
NEXT_PUBLIC_AMAZON_PAY_REGION=US
NEXT_PUBLIC_AMAZON_PAY_SANDBOX=true
NEXT_PUBLIC_SITE_URL=https://ollieocto.com
AMAZON_PAY_RETURN_URL=https://ollieocto.com/checkout/success
```

Do not commit `.env.local` or private keys. Keep the private key file outside git or in a private ignored folder.

The API route currently returns a sandbox placeholder response when all required values exist. To go live, replace the TODO block in `app/api/amazon-pay/create-checkout-session/route.ts` with the official Amazon Pay Checkout v2 request signing and Create Checkout Session call.

## Fallback Checkout Options

Configure these public links in `.env.local`:

```bash
NEXT_PUBLIC_AMAZON_BUY_URL=https://www.amazon.com/
NEXT_PUBLIC_INGRAMSPARK_RETAILER_URL=https://shop.ingramspark.com/
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=
```

The Stripe button appears only when `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` is set.

## Email, Search, and Analytics

MailerLite placeholders:

```bash
MAILERLITE_API_KEY=paste_mailerlite_api_key_here
MAILERLITE_GROUP_ID=paste_mailerlite_group_id_here
```

The placeholder endpoint lives at `app/api/mailer-lite/subscribe/route.ts`. Keep the API key server-side only.

Analytics placeholders:

```bash
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Google Search Console:

1. Add `https://ollieocto.com` in Google Search Console.
2. Verify using DNS or an HTML meta tag.
3. Submit `https://ollieocto.com/sitemap.xml`.
4. Check indexing after deployment and after publishing blog posts.

## SEO

The site includes:

- App-wide metadata in `app/layout.tsx`
- Per-page metadata
- `app/sitemap.ts`
- `app/robots.ts`
- Keyword targeting for Ollie the Octopus, octopus children's book, ocean adventure book for kids, sea animal picture book, bedtime story ages 3-5, preschool ocean book, friendship picture book, and social emotional learning children's book

Before launch, replace placeholder social links, email address, review quotes, product links, and privacy policy text.

## Vercel Deployment

1. Push the project to GitHub.
2. Create a new Vercel project and import the repository.
3. Add all `.env.local` values to Vercel Project Settings > Environment Variables.
4. Set `NEXT_PUBLIC_SITE_URL` to `https://ollieocto.com`.
5. Set `AMAZON_PAY_RETURN_URL` to `https://ollieocto.com/checkout/success`.
6. In Vercel Domains, add `ollieocto.com` and set it as the primary production domain.
7. Add `www.ollieocto.com` as a secondary domain. The app includes a permanent redirect from `www.ollieocto.com` to `https://ollieocto.com`.
8. Update DNS at the domain registrar using the records Vercel provides. Typical Vercel records are:
   - Apex `ollieocto.com`: `A` record to `76.76.21.21`
   - `www`: `CNAME` record to `cname.vercel-dns.com`
9. Wait for DNS propagation and Vercel SSL issuance.
10. Deploy.

Production verification checklist:

- `https://ollieocto.com` loads over HTTPS.
- `https://www.ollieocto.com` redirects to `https://ollieocto.com`.
- `https://ollieocto.com/sitemap.xml` lists the production URLs.
- `https://ollieocto.com/robots.txt` references the production sitemap.
- Mobile homepage, YouTube page, and footer are readable.
- Email signup reaches the welcome page or the configured MailerLite endpoint.
- Book fallback links and Amazon Pay scaffold behave as expected.

Recommended production checks:

- Test mobile navigation.
- Test fallback retailer links.
- Confirm email signup is connected to your email platform.
- Confirm Amazon Pay sandbox session creation before switching to live mode.
- Replace placeholder privacy policy with reviewed legal copy.
