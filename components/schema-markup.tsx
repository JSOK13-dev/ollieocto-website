import {
  activityPackDownloadUrl,
  amazonBookUrl,
  artwork,
  bookInfo,
  seoKeywords,
  testimonials
} from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ollieocto.com";

export function SchemaMarkup() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ollie the Octopus",
      url: siteUrl,
      logo: `${siteUrl}${artwork.ollieCutout}`,
      slogan: "Kind Hearts. Big Adventures.",
      sameAs: [amazonBookUrl]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Ollie the Octopus",
      url: siteUrl,
      description:
        "Official website for Ollie the Octopus and the Great Bubble Chase, a preschool ocean adventure picture book.",
      publisher: {
        "@id": `${siteUrl}/#organization`
      },
      inLanguage: "en-US"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: bookInfo.author,
      url: `${siteUrl}/about-ollie`,
      worksFor: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": `${siteUrl}/#book`,
      name: bookInfo.title,
      description: bookInfo.description,
      url: `${siteUrl}/buy`,
      image: `${siteUrl}${artwork.cover}`,
      genre: [
        "Children's picture book",
        "Ocean adventure",
        "Friendship story",
        "Preschool read-aloud"
      ],
      keywords: seoKeywords.join(", "),
      bookFormat: "https://schema.org/Paperback",
      inLanguage: bookInfo.language,
      numberOfPages: bookInfo.pages,
      copyrightYear: bookInfo.copyrightYear,
      audience: {
        "@type": "Audience",
        audienceType: "Children ages 3-5, parents, teachers, librarians"
      },
      author: {
        "@id": `${siteUrl}/#author`
      },
      offers: {
        "@type": "Offer",
        url: amazonBookUrl,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition"
      },
      review: testimonials.map((review) => ({
        "@type": "Review",
        name: review.title,
        reviewBody: review.quote,
        author: {
          "@type": "Person",
          name: review.name
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        }
      })),
      isBasedOn: {
        "@type": "CreativeWork",
        name: "Sparkle Bay"
      },
      workExample: {
        "@type": "DigitalDocument",
        name: "Free Ollie Ocean Adventure Activity Pack",
        url: `${siteUrl}${activityPackDownloadUrl}`
      }
    }
  ];

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
