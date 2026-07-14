"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BookingCTA from "@/components/sections/BookingCTA";
import { galleryImages } from "@/lib/data/siteData";

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "facilities" | "services">("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredImages = galleryImages.filter((img) => {
    if (filter === "all") return true;
    if (filter === "facilities") return img.src.includes("carousel_");
    if (filter === "services") return img.src.includes("before_after_") || img.src.includes("service_");
    return true;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Gallery Header */}
      <section className="bg-cream-light/30 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            CLINICAL PORTFOLIO
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-primary">
            Gallery
          </h1>
          <p className="font-instrument text-base md:text-lg text-text-dark max-w-xl leading-relaxed">
            Your natural beauty begins with a confident smile. Take a visual walkthrough of our high-end dental rooms, sophisticated lounge, and clinical treatment transformations.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              setFilter("all");
              setVisibleCount(6);
            }}
            className={`font-instrument text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 ${
              filter === "all"
                ? "bg-primary text-white border-primary"
                : "bg-white text-text-dark border-border-neutral hover:bg-cream-light/30"
            }`}
          >
            View all
          </button>
          <button
            onClick={() => {
              setFilter("facilities");
              setVisibleCount(6);
            }}
            className={`font-instrument text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 ${
              filter === "facilities"
                ? "bg-primary text-white border-primary"
                : "bg-white text-text-dark border-border-neutral hover:bg-cream-light/30"
            }`}
          >
            Facilities
          </button>
          <button
            onClick={() => {
              setFilter("services");
              setVisibleCount(6);
            }}
            className={`font-instrument text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 ${
              filter === "services"
                ? "bg-primary text-white border-primary"
                : "bg-white text-text-dark border-border-neutral hover:bg-cream-light/30"
            }`}
          >
            Services
          </button>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.slice(0, visibleCount).map((img, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={img.src}
                  className="relative h-[300px] w-full rounded-[20px] overflow-hidden shadow-sm border border-border-neutral hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-instrument font-bold text-white text-base">
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="text-center pt-12">
              <button
                onClick={loadMore}
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
