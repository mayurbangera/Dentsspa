"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function Hero() {
  const features = [
    "Personalized treatment plans",
    "Gentle care for young adults",
    "State-of-the-Art Technology",
  ];

  return (
    <>
      {/* ── PART 1: Full-width dark hero image with script overlay ── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/hero_bg_1.png"
          alt="DDS Dental Clinic Interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-primary/55" />

        {/* Script overlay text — left-centre */}
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-alex text-6xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem] text-white leading-none drop-shadow-xl select-none"
          >
            Diagnose. Design. Smile
          </motion.h1>
        </div>
      </section>

      {/* ── PART 2: Cream split — image left, text right ── */}
      <section className="bg-[#FFF8EE] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: clinic image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] md:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            <Image
              src="/images/hero_bg_2.png"
              alt="DDS Clinic Reception"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: heading + bullets + CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="font-caudex font-bold text-3xl md:text-4xl lg:text-[2.5rem] text-primary leading-snug">
              Professionals and Personalized Dental Excellence.
            </h2>

            <p className="font-instrument text-base text-text-dark leading-relaxed">
              Complete Dental Care for Your Family – Expert Dentists, Comprehensive Services. Experience our premium, fear-free treatments tailored to your unique smile goals.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-col space-y-3 pt-1">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 font-instrument text-text-dark font-medium">
                  <div className="bg-primary rounded-full p-1 text-white flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/about" variant="outline">Know More</Button>
              <Button href="/book" variant="primary">Book Consultation</Button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
