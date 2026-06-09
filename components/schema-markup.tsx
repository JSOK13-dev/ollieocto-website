import { bookInfo, faqItems } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com";

export function SchemaMarkup() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ollie the Octopus",
      url: siteUrl,
      slogan: "Kind Hearts. Big Adventures.",
      sameAs: ["https://www.youtube.com/"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: bookInfo.author,
      url: siteUrl,
      worksFor: {
        "@type": "Organization",
        name: "Ollie the Octopus"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: bookInfo.title,
      description: bookInfo.description,
      genre: "Children's picture book",
      numberOfPages: bookInfo.pages,
      copyrightYear: bookInfo.copyrightYear,
      audience: {
        "@type": "Audience",
        audienceType: "Children ages 3-5"
      },
      author: {
        "@type": "Person",
        name: bookInfo.author
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
