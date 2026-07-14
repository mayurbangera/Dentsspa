"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "250+", label: "Cosmetic Surgery Cases" },
    { value: "25+", label: "Smile Improvement" },
    { value: "100+", label: "Dental Implant Cases" },
  ];

  return (
    <section ref={ref} className="bg-primary text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4 py-4 md:py-0"
            >
              <span className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-2">
                {stat.value}
              </span>
              <span className="font-instrument text-xs md:text-sm text-cream-light font-medium uppercase tracking-wider max-w-[180px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
    </section>
  );
}
