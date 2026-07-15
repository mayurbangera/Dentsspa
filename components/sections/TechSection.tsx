"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function TechSection() {
  const ref      = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const techItems = [
    {
      title: "3D Intra-Oral Scanning",
      desc:  "Advanced digital scanning eliminates messy impressions, providing precise 3D scans of your teeth in seconds.",
      image: "/images/3d_scanning.png",
    },
    {
      title: "CEREC Single Visit Crowns",
      desc:  "Design, mill, and fit permanent ceramic crowns in a single appointment using advanced CAD/CAM software.",
      image: "/images/cerec_crowns.jpg",
    },
    {
      title: "Dental Microscope",
      desc:  "Extreme magnification powers enhanced diagnostic precision, optimising root canal and restorative operations.",
      image: "/images/dental_microscope.jpg",
    },
    {
      title: "Laser Dental Treatment",
      desc:  "Painless laser tools that reduce bleeding, eliminate drilling, and significantly speed up recovery time.",
      image: "/images/laser_treatment.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} id="technology" className="py-16 md:py-20 bg-[#F4F2EE]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header row: heading left | "Take a virtual tour" link right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              INNOVATION & ACCURACY
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Our High-End Technology
            </h2>
            <div className="w-14 h-1 bg-primary rounded-full" />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 font-instrument font-bold text-base text-primary hover:text-primary-deep group mr-4"
            >
              Take a virtual tour
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Left and Right navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-primary/20 bg-white hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-primary/20 bg-white hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable track containing 4 cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2"
          style={{ scrollbarWidth: "none" }}
        >
          {techItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[285px] lg:w-[288px] bg-white rounded-[20px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Card image */}
              <div className="relative h-[200px] w-full overflow-hidden bg-card-bg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              {/* Card text */}
              <div className="p-5 flex flex-col gap-2 flex-grow">
                <h3 className="font-caudex font-bold text-base text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="font-instrument text-sm text-text-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
