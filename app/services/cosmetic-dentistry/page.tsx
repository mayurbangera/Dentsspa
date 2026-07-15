"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";
import Button from "@/components/ui/Button";

export default function CosmeticDentistry() {
  const serviceOfferings = [
    {
      title: "Digital Smile Design (DSD)",
      desc: "Advanced photography and digital software analyzing your facial geometry to preview your ideal smile before treatment begins.",
    },
    {
      title: "Ultra-Thin Porcelain Veneers",
      desc: "Minimal-prep ceramic layers custom-crafted to mask discoloration, chips, minor overlaps, and gaps perfectly.",
    },
    {
      title: "Composite Bonding & Reshaping",
      desc: "An artistic, single-visit solution using tooth-colored resins to repair cracks, reshape margins, and close gaps.",
    },
    {
      title: "Professional Zoom Laser Whitening",
      desc: "Power bleaching treatments that safely eliminate deep stains and lift your shade up to 8 tones in just 45 minutes.",
    },
    {
      title: "Metal-Free Ceramic Crowns & Overlays",
      desc: "Zirconia and glass-ceramic crown caps designed using CAD/CAM to replicate natural translucency.",
    },
    {
      title: "Gum Contouring & Depigmentation",
      desc: "Laser micro-sculpting to lift a gummy smile or correct dark patches for a beautifully balanced gum-to-tooth ratio.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Jury-Awarded Esthetic Practice",
      desc: "Dr. Priti Munde is a nationally recognized jury winner for esthetic dental practices, bringing elite craft to every smile.",
    },
    {
      title: "Smile Design Technology",
      desc: "We analyze your facial geometry to draft digital simulations of your ideal smile before starting treatment.",
    },
    {
      title: "Natural-Looking Materials",
      desc: "We utilize premium zirconia and metal-free translucent ceramics that mimic the light-reflecting quality of natural teeth.",
    },
  ];

  const beforeAfterCases = [
    {
      title: "Smile Makeover",
      desc: "Transform dull, misaligned teeth into a brilliant, symmetric smile with porcelain veneers.",
      image: "/images/cosmetic_before_after_1.png",
    },
    {
      title: "Tooth Realignment",
      desc: "Repairing worn down edges and gaps using premium ceramic crown overlays.",
      image: "/images/cosmetic_before_after_2.png",
    },
    {
      title: "Complete Esthetic Finish",
      desc: "Restoring natural teeth shades and teeth length alignment.",
      image: "/images/cosmetic_before_after_3.png",
    },
  ];

  const localFaqs = [
    {
      q: "What is Digital Smile Design and how does it help me?",
      a: "Digital Smile Design (DSD) is an advanced tool that allows us to take professional photos and 3D scans of your face, then design a customized mock-up of your new smile. You can see, adjust, and approve the virtual result before we touch a single tooth.",
    },
    {
      q: "Are porcelain veneers permanent and how long do they last?",
      a: "Porcelain veneers are a long-term cosmetic solution. They require minor preparation of the enamel, making the process irreversible. With good oral hygiene and regular checks, veneers typically last 10 to 15 years or longer.",
    },
    {
      q: "Will laser teeth whitening cause long-term tooth sensitivity?",
      a: "Our Zoom laser whitening treatment is designed to minimize discomfort. Some clients experience temporary sensitivity for 24-48 hours after the procedure, but we apply professional desensitizing gels immediately to make sure your teeth feel completely normal.",
    },
    {
      q: "How does cosmetic bonding differ from porcelain veneers?",
      a: "Cosmetic bonding uses a composite resin applied directly to the tooth in a single appointment, making it faster and more affordable. Porcelain veneers are custom-fabricated in a lab, offering superior durability, stain resistance, and a more natural light reflection.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Banner Image matching Figma design */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/cosmetic_dentistry_banner.jpg"
          alt="Cosmetic Dentistry Services"
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
            OUR SPECIALTIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-caudex font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight"
          >
            Cosmetic Dentistry
          </motion.h1>
        </div>
      </section>

      {/* 2. Short paragraph with image after banner */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary">
              Enhancing Your Smile with Art and Precision
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Cosmetic dentistry is more than just aesthetics; it builds core self-confidence. Using our state-of-the-art photography, digital scanning, and elite ceramic materials, we restore symmetry, repair cracks, close spaces, and lighten stains to align with your natural features.
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
              src="/images/service_cosmetic_main.png"
              alt="Cosmetic Dentistry consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us separator section */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              BENEFITS & ADVANTAGES
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Why Choose DDS for Cosmetic Makeovers?
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

      {/* 4. Cards of what services the clinic provides under Cosmetic Dentistry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              TREATMENTS AVAILABLE
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Cosmetic Dentistry Offerings
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

      {/* 5. Before & After Section - custom styled and structured layout */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              CLINICAL PORTFOLIO
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Smile Transformations (Before &amp; After)
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterCases.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[250px] w-full bg-cream-light/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-caudex font-bold text-base text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-instrument text-xs text-text-dark leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs about Cosmetic Dentistry */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              STILL HAVE QUESTIONS?
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Cosmetic Dentistry FAQs
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>
          <FAQAccordion items={localFaqs} className="w-full" />
        </div>
      </section>

      {/* 7. CTA matches About page (Small Booking CTA) */}
      <SmallBookingCTA />
    </div>
  );
}
