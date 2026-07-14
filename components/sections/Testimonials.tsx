"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data/siteData";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="clients" className="py-20 bg-cream-light/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            TESTIMONIALS
          </span>
          <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
            What our Patients Says
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-[20px] p-8 border border-border-neutral shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/10 transition-all duration-300"
            >
              <div className="flex flex-col space-y-6">
                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <p className="font-instrument text-base text-text-dark italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Reviewer */}
              <div className="flex items-center space-x-4 pt-6 border-t border-cream-light mt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-instrument font-bold text-base text-primary">
                    {t.name}
                  </h4>
                  <span className="font-instrument text-xs text-text-muted">
                    Verified Patient
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
