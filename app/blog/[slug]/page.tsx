import { blogPosts } from "@/lib/data/siteData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | DDS Dental Clinic Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-cream-light/30 py-16 border-b border-border-neutral">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            BLOG POST
          </span>
          <h1 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
            {post.title}
          </h1>
          <p className="font-instrument text-sm text-text-muted">
            Posted on: {post.date}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-[350px] md:h-[500px] w-full rounded-[24px] overflow-hidden shadow-xl border border-border-neutral">
            {/* Use next/image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col space-y-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="font-instrument text-base md:text-lg text-text-dark leading-loose"
            >
              {paragraph}
            </p>
          ))}

          {/* Share Row */}
          <div className="pt-8 border-t border-border-neutral flex items-center space-x-3 font-instrument font-bold text-sm text-primary uppercase tracking-widest">
            <span>Share This Post</span>
            <div className="flex items-center space-x-2">
              {["1", "2", "3", "4", "5"].map((n) => (
                <button
                  key={n}
                  className="w-8 h-8 bg-cream-light rounded-full flex items-center justify-center text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-cream-light/20 border-t border-border-neutral">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary mb-10 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-[20px] border border-border-neutral shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-primary/10 transition-all duration-300 group"
                >
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="font-instrument text-xs text-text-muted">
                      Posted on: {relatedPost.date}
                    </p>
                    <h3 className="font-caudex font-bold text-base text-primary leading-snug">
                      {relatedPost.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
