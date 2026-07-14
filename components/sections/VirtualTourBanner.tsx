"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VirtualTourBanner() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "480px" }}>
      {/* Background clinic image */}
      <Image
        src="/images/hero_bg_1.png"
        alt="DDS Dental Clinic Virtual Tour"
        fill
        className="object-cover object-center"
      />

      {/* Gradient overlay — darker at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

        {/* Play button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Play virtual tour"
          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center shadow-2xl hover:bg-white/30 transition-colors"
        >
          <Play className="w-9 h-9 text-white fill-white ml-1" />
        </motion.button>

        {/* Link */}
        <Link
          href="/gallery"
          className="font-instrument font-bold text-white text-lg tracking-wide hover:text-cream transition-colors underline underline-offset-4"
        >
          Take a Virtual Tour →
        </Link>

      </div>
    </section>
  );
}
