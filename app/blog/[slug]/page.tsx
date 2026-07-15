import { blogPosts } from "@/lib/data/siteData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";
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

  // Social share icons list
  const shareSocials = [
    { icon: "/images/facebook.svg", label: "Facebook" },
    { icon: "/images/linkedin.svg", label: "LinkedIn" },
    { icon: "/images/email_icon.svg", label: "Email" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE]">
      {/* Hero Banner Section matching overall structure */}
      <section className="relative w-full h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src="/images/about_us_banner.jpg"
          alt="DDS Blog Details"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-cream mb-2">
            BLOG ARTICLE
          </span>
          <h1 className="font-caudex font-bold text-3xl md:text-5xl text-white max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Article Body */}
        <article className="lg:col-span-8 bg-white border border-border-neutral rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 text-text-muted font-instrument text-xs">
            <span>Published on:</span>
            <span className="font-semibold text-primary">{post.date}</span>
          </div>

          <div className="relative h-[250px] sm:h-[350px] w-full rounded-2xl overflow-hidden bg-card-bg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 pt-4 font-instrument text-base text-text-dark leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Social Share bar */}
          <div className="pt-6 border-t border-border-neutral flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-primary">
              Share this article
            </span>
            <div className="flex items-center space-x-2">
              {shareSocials.map((social, i) => (
                <button
                  key={i}
                  className="bg-cream-light hover:bg-[#62826B]/10 p-2.5 rounded-full border border-border-neutral transition-colors cursor-pointer"
                  aria-label={`Share on ${social.label}`}
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src={social.icon}
                      alt={social.label}
                      fill
                      className="object-contain filter-accent-green"
                      style={{
                        filter: "invert(13%) sepia(21%) saturate(3015%) hue-rotate(317deg) brightness(85%) contrast(85%)" // #411928 brand color
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column: Sidebar (Recent/Related Posts) */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-border-neutral rounded-[24px] p-6 shadow-sm space-y-6">
            <h3 className="font-caudex font-bold text-lg text-primary border-b border-border-neutral pb-2">
              Recent Articles
            </h3>
            <div className="space-y-6">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="flex gap-4 group items-start"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-card-bg">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-caudex font-bold text-sm text-primary group-hover:text-[#62826B] transition-colors leading-snug line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="font-instrument text-[10px] text-text-muted">
                      {relatedPost.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Bottom CTA Banner (matches about/contact pages) */}
      <SmallBookingCTA />
    </div>
  );
}
