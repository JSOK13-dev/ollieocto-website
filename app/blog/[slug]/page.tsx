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
    title: post?.title || "Blog",
    description: post?.excerpt
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
            This starter draft is ready to expand with your voice, examples from
            Ollie&apos;s world, and links to the book, YouTube videos, and free
            activity pack.
          </p>
          <p>
            Use a simple structure: parent-friendly opening, practical benefit,
            short activity idea, character tie-in, and a gentle call to action.
          </p>
          <p>
            Sparkle Bay can make each article feel branded by tying the topic to
            Ollie, Stella, Spike, Zippy, Grumpy Gus, Lily, Keke, or the Rainbow
            Bubble.
          </p>
        </div>
      </article>
      <StickySignup source={`blog-${post.slug}`} />
    </>
  );
}
