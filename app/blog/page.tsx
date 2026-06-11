import type { Metadata } from "next";
import Link from "next/link";
import { StickySignup } from "@/components/sticky-signup";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Ollie the Octopus articles about read-aloud time, ocean animals, kindness, and preschool social-emotional learning."
};

export default function BlogPage() {
  return (
    <>
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Blog"
            title="Sparkle Bay notes for parents and teachers"
            text="Warm read-aloud notes, ocean learning ideas, and simple kindness activities for families and classrooms."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                className="rounded-2xl bg-white p-6 shadow-lg shadow-[#17324d]/7 ring-1 ring-[#17324d]/7 transition hover:-translate-y-1"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff7c70]">
                  {post.category}
                </p>
                <h2 className="mt-3 text-2xl font-black text-[#17324d]">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-[#44617a]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <StickySignup source="blog-page" />
    </>
  );
}
