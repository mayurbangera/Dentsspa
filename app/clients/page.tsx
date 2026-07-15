"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";

export default function ClientsPage() {
  // 3 happy customer video reviews (using standard iframe links or placeholders)
  const videoReviews = [
    {
      title: "Happy Smile Transformation - Mrs. Sharma",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube embed link
      desc: "Detailed testimonial covering cosmetic alignment and pain-free treatments.",
    },
    {
      title: "Full Mouth Implant Restoration - Mr. Verma",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Sharing their experience with our advanced CEREC crown milling technology.",
    },
    {
      title: "Kids Dental Care Experience - The Dixit Family",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "How our clinic turned dental anxiety into a positive experience for their children.",
    },
  ];

  // Celebrity clients data sourced from dentsspa.com/index.php/dentalclinic/gallery
  const celebrityClients = [
    {
      name: "Swapnil Joshi",
      title: "Renowned Indian Actor",
      desc: "Visited DDS for complete smile alignment and aesthetic consultation.",
      image: "/images/dr_neha.png", // Existing placeholder or dr. profile asset
    },
    {
      name: "Subodh Bhave",
      title: "Award-winning Actor & Director",
      desc: "Opted for GBT cleaning and preventative scaling checkups.",
      image: "/images/testimonial_avatar.png",
    },
    {
      name: "Amruta Khanvilkar",
      title: "Popular Actress & Dancer",
      desc: "Underwent professional Zoom laser whitening for a bright, camera-ready smile.",
      image: "/images/dr_priti_munde.png",
    },
    {
      name: "Pushkar Jog",
      title: "Distinguished Marathi Actor",
      desc: "Sustained care programs for teeth alignment and dental wellness.",
      image: "/images/dr_neha.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Text-only Header (no banner image, matches requested text) */}
      <section className="pt-32 pb-12 px-6 bg-[#62826B]/10 border-b border-border-neutral text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B] mb-2">
            TESTIMONIALS & PORTFOLIO
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl text-primary leading-tight">
            Our Happy Clients
          </h1>
        </div>
      </section>

      {/* Section 1: Grid of 3 Videos */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
            VIDEO JOURNEYS
          </span>
          <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
            Patient Stories & Reviews
          </h2>
          <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Responsive Video Container */}
              <div className="relative w-full pb-[56.25%] h-0 bg-[#050505]">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-caudex font-bold text-lg text-primary">
                  {video.title}
                </h3>
                <p className="font-instrument text-sm text-text-dark leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Special Section for Celebrity Clients */}
      <section className="py-20 bg-white border-t border-border-neutral">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
              ESTEEMED PATIENTS
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Celebrity Clients Sighted at DDS
            </h2>
            <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {celebrityClients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card-bg rounded-[24px] overflow-hidden border border-border-neutral shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[260px] w-full bg-cream-light/30">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center bg-white flex-grow flex flex-col justify-center space-y-2">
                  <h3 className="font-caudex font-bold text-lg text-primary">
                    {client.name}
                  </h3>
                  <p className="font-montserrat font-bold text-[10px] text-[#62826B] uppercase tracking-wider">
                    {client.title}
                  </p>
                  <p className="font-instrument text-xs text-text-dark leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SmallBookingCTA />
    </div>
  );
}
