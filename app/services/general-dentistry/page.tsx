"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";
import Button from "@/components/ui/Button";

export default function GeneralDentistry() {
  const serviceOfferings = [
    {
      title: "Routine Cleanings & Hygiene Checks",
      desc: "Regular scaling and polishing to keep plaque away, reduce gum swelling, and leave breath fresh.",
    },
    {
      title: "Digital Intra-Oral Diagnostics",
      desc: "Instant high-resolution scans and low-radiation X-rays to locate micro-decay before it grows.",
    },
    {
      title: "Composite Tooth-Colored Fillings",
      desc: "Repairing cavities using advanced metal-free resin bonding that blends invisibly with natural teeth.",
    },
    {
      title: "Painless Tooth Extractions",
      desc: "Surgical removal of damaged teeth or impacted wisdom teeth performed under targeted comfort anesthetics.",
    },
    {
      title: "Root Canal Therapy (Endodontics)",
      desc: "Saving infected or deeply decayed teeth by sanitizing the inner root pulp and placing a ceramic seal.",
    },
    {
      title: "Periodontal Deep Cleaning & Gum Care",
      desc: "Intense root planing therapies designed to halt advanced gum bleeding and prevent jawbone loss.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Preventative Focused Care",
      desc: "Our primary objective is to stop issues before they start with state-of-the-art diagnostic screening.",
    },
    {
      title: "Comprehensive Treatments",
      desc: "From basic fillings to composite bonding, root canals, and tooth extractions, all under one roof.",
    },
    {
      title: "Painless Modern Anesthesia",
      desc: "Modern numbing agents and precise lasers that ensure complete comfort throughout all procedures.",
    },
  ];

  const localFaqs = [
    {
      q: "How often should I visit the dentist for a routine general dentistry checkup?",
      a: "For most patients, we recommend visiting us once every 6 months for a comprehensive exam, cleaning, and routine diagnostics. This allows us to spot any micro-decay or early signs of gum irritation before they become painful.",
    },
    {
      q: "Are composite fillings safe and do they match my natural teeth?",
      a: "Yes, absolutely! We use high-grade composite resin fillings that are 100% mercury-free. They are customized to match the exact shade and translucency of your tooth, making them completely invisible when you smile.",
    },
    {
      q: "Is root canal treatment as painful as people say?",
      a: "Not at all. With modern local anesthesia, precise techniques, and advanced dental microscopes, root canal therapy feels no different than getting a standard filling. In fact, the procedure is designed to relieve the severe pain caused by tooth infections.",
    },
    {
      q: "What should I do in case of a sudden dental emergency?",
      a: "If you experience severe pain, swelling, or break a tooth, contact our Shivajinagar clinic immediately. We keep priority emergency slots open during daily hours to provide fast, soothing relief.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Banner Image matching Figma design */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/general_dentistry_banner.jpg"
          alt="General Dentistry Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat font-bold text-xs uppercase tracking-widest text-cream mb-2"
          >
            OUR SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-caudex font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight"
          >
            General Dentistry
          </motion.h1>
        </div>
      </section>

      {/* 2. Short paragraph with image after banner */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary">
              Comprehensive Oral Care for Every Stage of Life
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              General dentistry is the cornerstone of lifelong dental wellness. At DDS Dental Clinic, we focus on detailed examinations, preventive hygiene cleanings, and immediate treatments to stop tooth decay and gum disease before they escalate. Our gentle care keeps your smile radiant and functioning perfectly.
            </p>
            <div className="pt-2">
              <Button href="/book" variant="primary">
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[300px] md:h-[380px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-white">
            <Image
              src="/images/service_general_main.png"
              alt="General Dentistry consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Cards of what services the clinic provides under General Dentistry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              TREATMENTS AVAILABLE
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              General Dentistry Offerings
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((item, i) => (
              <div
                key={i}
                className="bg-card-bg rounded-[24px] p-8 border border-border-neutral shadow-sm hover:shadow-md hover:border-[#62826B]/30 hover:bg-[#62826B]/5 transition-all duration-300 flex flex-col gap-3"
              >
                <h3 className="font-caudex font-bold text-lg text-primary">
                  {item.title}
                </h3>
                <p className="font-instrument text-sm text-text-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us separator section */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              BENEFITS & ADVANTAGES
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Why Choose DDS for General Care?
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] p-8 border border-border-neutral flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-caudex font-bold text-xl text-primary">
                  {item.title}
                </h3>
                <p className="font-instrument text-sm md:text-base text-text-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs about General Dentistry */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              STILL HAVE QUESTIONS?
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              General Dentistry FAQs
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>
          <FAQAccordion items={localFaqs} className="w-full" />
        </div>
      </section>

      {/* 6. CTA matches About page (Small Booking CTA) */}
      <SmallBookingCTA />
    </div>
  );
}
