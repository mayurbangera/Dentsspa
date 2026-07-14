"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";

export default function BookingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary-deep rounded-[30px] p-8 md:p-16 text-center text-white shadow-xl relative overflow-hidden flex flex-col items-center justify-center space-y-6"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

          <h2 className="font-caudex font-bold text-3xl md:text-5xl text-cream max-w-2xl leading-tight">
            Ready to Book Your Appointment?
          </h2>

          <p className="font-instrument text-base md:text-lg text-cream-light max-w-xl leading-relaxed">
            Contact us today to schedule your visit and take the first step toward a healthier, more radiant smile.
          </p>

          <div className="pt-4 relative z-10">
            <Button href="/book" variant="white">
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
