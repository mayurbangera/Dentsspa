"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookingCTA from "@/components/sections/BookingCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import { faqs } from "@/lib/data/siteData";
import { Shield, Sparkles, HeartPulse, CheckCircle2 } from "lucide-react";

export default function GeneralDentistry() {
  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Preventative Focused Care",
      desc: "Our primary objective is to stop issues before they start with state-of-the-art diagnostic screening.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-primary" />,
      title: "Comprehensive Treatments",
      desc: "From basic fillings to composite bonding, root canals, and tooth extractions, all under one roof.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Painless Modern Anesthesia",
      desc: "Modern numbing agents and precise lasers that ensure complete comfort throughout all procedures.",
    },
  ];

  const coreServices = [
    "Routine cleanings & hygiene checks",
    "Digital intra-oral diagnostic x-rays",
    "Composite tooth-colored fillings",
    "Painless tooth extractions",
    "Root canal therapy (Endodontics)",
    "Periodontal deep cleaning & gum care",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Service Hero */}
      <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              OUR SERVICES
            </span>
            <h1 className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              General Dentistry
            </h1>
            <p className="font-instrument text-lg md:text-xl text-text-dark leading-relaxed">
              Comprehensive oral care for every stage of life. From routine checkups to advanced treatments, we keep your smile healthy and vibrant.
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
              src="/images/service_general.png"
              alt="General Dentistry cleaning procedure"
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
              src="/images/service_general_main.png"
              alt="Patient consultation and digital X-ray scan review"
              fill
              className="object-cover"
            />
          </div>

          {/* Right text list */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-caudex font-bold text-3xl text-primary">
              Comprehensive Oral Care for Every Stage of Life
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              General dentistry is the cornerstone of lifelong dental wellness. At DDS Dental Clinic, we focus on detailed examinations, preventive hygiene cleanings, and immediate treatments to stop tooth decay and gum disease before they escalate.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-light/20 border-t border-border-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              BENEFITS
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
                className="bg-white rounded-[20px] p-8 border border-border-neutral flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300"
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

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-border-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              COMMON INQUIRIES
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              FAQ&rsquo;s
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Booking CTA Banner */}
      <BookingCTA />
    </div>
  );
}
