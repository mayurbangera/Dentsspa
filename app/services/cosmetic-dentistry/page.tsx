"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookingCTA from "@/components/sections/BookingCTA";
import Button from "@/components/ui/Button";
import { Sparkles, Eye, Award, CheckCircle2 } from "lucide-react";

export default function CosmeticDentistry() {
  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Jury-Awarded Esthetic Practice",
      desc: "Dr. Priti Munde is a nationally recognized jury winner for esthetic dental practices, bringing elite craft to every smile.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Smile Design Technology",
      desc: "We analyze your facial geometry to draft digital simulations of your ideal smile before starting treatment.",
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Natural-Looking Materials",
      desc: "We utilize premium zirconia and metal-free translucent ceramics that mimic the light-reflecting quality of natural teeth.",
    },
  ];

  const beforeAfterCases = [
    {
      title: "Case 1: Smile Makeover",
      desc: "Porcelain Veneers to correct spacing, alignment, and color shade.",
      image: "/images/cosmetic_before_after_1.png",
    },
    {
      title: "Case 2: Tooth Alignment",
      desc: "Conservative bonding and ceramic crowns to restore worn, misaligned teeth.",
      image: "/images/cosmetic_before_after_2.png",
    },
    {
      title: "Case 3: Complete Restoration",
      desc: "Full mouth rehabilitation correcting bite, length, and shade aesthetics.",
      image: "/images/cosmetic_before_after_3.png",
    },
  ];

  const coreServices = [
    "Digital Smile Design (DSD)",
    "Ultra-thin porcelain veneers",
    "Composite bonding & reshaping",
    "Professional Zoom laser whitening",
    "Metal-free ceramic crowns & overlays",
    "Gum contouring & depigmentation",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Service Hero */}
      <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              OUR SPECIALTIES
            </span>
            <h1 className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Cosmetic Dentistry
            </h1>
            <p className="font-instrument text-lg md:text-xl text-text-dark leading-relaxed">
              Your natural beauty begins with a confident smile. Harness the fusion of art and dental science to design the bright, balanced smile of your dreams.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/book" variant="primary">
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[350px] md:h-[450px] w-full rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/images/service_cosmetic.png"
              alt="Beautiful smile makeover results"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left image wrapper */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[30px] overflow-hidden shadow-xl order-last lg:order-first">
            <Image
              src="/images/service_cosmetic_main.png"
              alt="Before/After digital cosmetic mockup analysis"
              fill
              className="object-cover"
            />
          </div>

          {/* Right text list */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-caudex font-bold text-3xl text-primary">
              Enhancing Your Smile with Art and Precision
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Cosmetic dentistry is more than just aesthetics; it builds core self-confidence. Using our state-of-the-art photography, digital scanning, and elite ceramic materials, we restore symmetry, repair cracks, close spaces, and lighten stains to align with your natural features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {coreServices.map((service, i) => (
                <div key={i} className="flex items-center space-x-3 text-text-dark font-instrument font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Cases */}
      <section className="py-20 bg-cream-light/20 border-t border-b border-border-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              CLINICAL PORTFOLIO
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Cosmetic Dentistry Before &amp; After
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterCases.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[250px] w-full bg-cream-light/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-caudex font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-instrument text-sm text-text-dark leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              OUR EDGE
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Why Choose Us?
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-card-bg rounded-[20px] p-8 border border-border-neutral flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-cream-light p-4 rounded-full">
                  {item.icon}
                </div>
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

      {/* Booking CTA Banner */}
      <BookingCTA />
    </div>
  );
}
