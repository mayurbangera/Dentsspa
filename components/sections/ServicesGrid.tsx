"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data/siteData";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mappings to SVG icon files in public/images
const iconMap: Record<string, string> = {
  "general-dentistry":    "/images/general_dentistry_icon.svg",
  "cosmetic-dentistry":   "/images/cosmetic_dentistry_icon.svg",
  "restorative-dentistry":"/images/restorative_treatment_icon.svg",
  "orthodontic-treatment":"/images/orthodontic_treatment_icon.svg",
  "laser-dentistry":      "/images/laser_dentistry_icon.svg",
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
        <div className="flex items-center gap-3 md:gap-5 justify-center">

          {/* Prev */}
          <button
            onClick={() => pan("left")}
            aria-label="Previous services"
            className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-primary/20 bg-white hover:bg-primary hover:border-primary text-primary hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable track with items centered horizontally inside the container */}
          <div
            ref={scroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex-grow-0 max-w-full py-2 justify-start md:justify-center items-center"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service, i) => {
              const iconPath = iconMap[service.id] || "/images/general_dentistry_icon.svg";
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="snap-center flex-shrink-0"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex flex-col items-center justify-center gap-4 w-[160px] md:w-[185px] h-[220px] bg-card-bg rounded-2xl px-5 py-6 border border-border-neutral shadow-sm hover:shadow-md hover:border-[#62826B]/50 hover:bg-[#62826B]/5 transition-all duration-300 group text-center"
                  >
                    {/* Icon container - clean, centered, transparent bg, icon color set to #62826B */}
                    <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={iconPath}
                        alt={`${service.title} Icon`}
                        fill
                        className="object-contain filter-accent-green"
                        style={{
                          filter: "invert(48%) sepia(12%) saturate(718%) hue-rotate(85deg) brightness(93%) contrast(85%)" // Approx color filter for #62826B
                        }}
                      />
                    </div>

                    {/* Title */}
                    <span className="font-caudex font-bold text-sm text-primary leading-snug">
                      {service.title}
                    </span>

                    {/* Sub-label */}
                    <span className="font-montserrat font-semibold text-[10px] uppercase tracking-widest text-[#62826B]">
                      Services
                    </span>
                  </Link>
                </motion.div>
              );
            })}
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
