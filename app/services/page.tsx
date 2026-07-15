"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mainServices = [
    {
      id: "general-dentistry",
      title: "General Dental Services",
      desc: "Comprehensive diagnostics, cleanings, tooth-colored fillings, painless extractions, and foundational dental wellness.",
      image: "/images/service_general.png",
      slug: "/services/general-dentistry",
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with digital design veneers, composite bonding, and professional laser whitening options.",
      image: "/images/service_cosmetic.png",
      slug: "/services/cosmetic-dentistry",
    },
    {
      id: "restorative-dentistry",
      title: "Restorative Dentistry",
      desc: "Restore structure, aesthetics, and bite with ceramic crown fits, bridge placements, and full endodontic care.",
      image: "/images/carousel_2.png",
      slug: "#",
    },
    {
      id: "implants-dentistry",
      title: "Dental Implants Treatment",
      desc: "Premium prosthetic replacements restoring root support, biting stability, and long-lasting bone-level alignment.",
      image: "/images/carousel_1.png",
      slug: "#",
    },
    {
      id: "orthodontic-treatments",
      title: "Orthodontic Treatments (Braces & Aligners)",
      desc: "Modern clear alignment chips and braces mapping teeth geometry into perfectly balanced visual arcs.",
      image: "/images/carousel_3.png",
      slug: "#",
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      desc: "Gentle, fear-free treatments and preventive sealant applications designed specifically for younger patients.",
      image: "/images/carousel_4.png",
      slug: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Text-only Header (no banner image, matches requested text) */}
      <section className="pt-32 pb-12 px-6 bg-[#62826B]/10 border-b border-border-neutral text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B] mb-2">
            OUR CATALOG
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl text-primary leading-tight">
            Dental Solutions Tailored for You
          </h1>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-lg hover:border-[#62826B]/30 hover:bg-[#62826B]/5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Entire card links to the service detailed page */}
              <Link href={service.slug} className="flex flex-col flex-grow">
                {/* Visual frame with zoom animation */}
                <div className="relative h-[220px] w-full overflow-hidden bg-card-bg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Description info */}
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="font-caudex font-bold text-xl text-primary group-hover:text-[#62826B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-instrument text-sm text-text-dark leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Link>
              <div className="p-6 pt-0">
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-1.5 font-instrument font-bold text-sm text-[#62826B] hover:text-primary transition-colors group/link"
                >
                  View Details
                  <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SmallBookingCTA />
    </div>
  );
}
