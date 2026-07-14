"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data/siteData";
import { Activity, Smile, Heart, Sparkles, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "general-dentistry":    <Activity  className="w-9 h-9" />,
  "cosmetic-dentistry":   <Smile     className="w-9 h-9" />,
  "restorative-dentistry":<Heart     className="w-9 h-9" />,
  "orthodontic-treatment":<Sparkles  className="w-9 h-9" />,
  "laser-dentistry":      <Zap       className="w-9 h-9" />,
};

export default function ServicesGrid() {
  const ref    = useRef(null);
  const scroll = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pan = (dir: "left" | "right") => {
    scroll.current?.scrollBy({ left: dir === "right" ? 240 : -240, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-caudex font-bold text-2xl md:text-3xl text-center text-primary mb-12 max-w-3xl mx-auto leading-snug"
        >
          Complete Dental Care for Your Family –{" "}
          <span className="block">Expert Dentists, Comprehensive Services</span>
        </motion.h2>

        {/* Carousel row */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Prev */}
          <button
            onClick={() => pan("left")}
            aria-label="Previous services"
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-primary/20 bg-white hover:bg-primary hover:border-primary text-primary hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scroll}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex-1 py-2"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="snap-start flex-shrink-0"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="flex flex-col items-center gap-4 w-[155px] md:w-[175px] bg-card-bg rounded-2xl px-5 py-7 border border-border-neutral shadow-sm hover:shadow-md hover:border-primary/25 hover:bg-cream-light/40 transition-all duration-300 group"
                >
                  {/* Icon circle */}
                  <div className="bg-cream-light group-hover:bg-primary transition-colors duration-300 p-4 rounded-full text-primary group-hover:text-white">
                    {iconMap[service.id] ?? <Activity className="w-9 h-9" />}
                  </div>

                  {/* Title */}
                  <span className="font-caudex font-bold text-sm text-center text-primary leading-snug">
                    {service.title}
                  </span>

                  {/* Sub-label */}
                  <span className="font-montserrat font-semibold text-[10px] uppercase tracking-widest text-text-muted">
                    Services
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => pan("right")}
            aria-label="Next services"
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-primary/20 bg-white hover:bg-primary hover:border-primary text-primary hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
