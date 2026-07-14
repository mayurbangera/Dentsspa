"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BookingCTA from "@/components/sections/BookingCTA";
import { blogPosts } from "@/lib/data/siteData";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Header */}
      <section className="bg-cream-light/30 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            DENTAL WELLNESS
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-primary">
            Blogs
          </h1>
          <p className="font-instrument text-base md:text-lg text-text-dark max-w-2xl leading-relaxed">
            Your trusted resource for dental wellness, smile transformations, and everyday oral care guidance.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visibleCount).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] border border-border-neutral shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/10 transition-all duration-300 group"
              >
                {/* Blog Image */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="flex flex-col space-y-3">
                    {/* Date */}
                    <div className="flex items-center space-x-2 text-text-muted font-instrument text-xs">
                      <CalendarDays className="w-4 h-4" />
                      <span>Posted on: {post.date}</span>
                    </div>
                    {/* Title */}
                    <h2 className="font-caudex font-bold text-lg text-primary leading-tight group-hover:text-primary-deep transition-colors">
                      {post.title}
                    </h2>
                    {/* Excerpt */}
                    <p className="font-instrument text-sm text-text-dark leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 font-instrument font-bold text-sm text-primary hover:text-primary-deep group/link pt-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < blogPosts.length && (
            <div className="text-center pt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="font-instrument text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-[11px] transition-all duration-300 hover:scale-[1.02]"
              >
                Load More...
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <BookingCTA />
    </div>
  );
}
