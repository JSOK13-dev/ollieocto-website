import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StickySignup } from "@/components/sticky-signup";
import { blogPosts } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  return {
    title: post ? `${post.title} | Ollie the Octopus Blog` : "Blog",
    description: post?.excerpt,
    alternates: {
      canonical: post ? `/blog/${post.slug}` : "/blog"
    },
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      url: post ? `/blog/${post.slug}` : "/blog",
      type: "article"
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7c70]">
          {post.category}
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-[#17324d] md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#44617a]">{post.excerpt}</p>
        <div className="mt-8 space-y-6 leading-8 text-[#31546f]">
          <p>
            Ollie&apos;s world gives families a gentle way to talk about
            friendship, curiosity, helping, and the small brave choices children
            practice every day.
          </p>
          <p>
            Try pairing the idea with a cozy read-aloud moment, a simple
            question, and one printable activity from Sparkle Bay.
          </p>
          <p>
            Ollie and the world of Sparkle Bay can help little readers
            remember that friends help friends.
          </p>
        </div>
      </article>
      <StickySignup source={`blog-${post.slug}`} />
    </>
  );
}
