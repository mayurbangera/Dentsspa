"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";
import { Award, Trophy, Star, ShieldAlert } from "lucide-react";

export default function AchievementsPage() {
  const awardsList = [
    {
      year: "2015",
      title: "Best Clinic Interior",
      issuer: "Famdent Awards",
      desc: "Nominated as the best clinic interior in Pune, recognizing our modern, clutter-free, and soothing layout designed to turn patient fear into comfort.",
      icon: <Award className="w-8 h-8 text-[#62826B]" />,
    },
    {
      year: "2016",
      title: "Aesthetic Centre of the Year",
      issuer: "Famdent Awards",
      desc: "Nominated for top national honors in cosmetic dentistry, celebrating clinical design precision and smile makeovers.",
      icon: <Trophy className="w-8 h-8 text-[#62826B]" />,
    },
    {
      year: "2016",
      title: "Outstanding Dentist of the Year",
      issuer: "Famdent Awards",
      desc: "Dr. Priti Munde was nominated for Outstanding Dentist of the Year, recognizing her clinical excellence and dedication to community dental health.",
      icon: <Star className="w-8 h-8 text-[#62826B]" />,
    },
    {
      year: "2016",
      title: "Jury of Esthetic Practice",
      issuer: "Indian Health Professional Awards",
      desc: "Bagged the prestigious award as the Jury of Esthetic Practice, establishing national leadership and recognition in cosmetic surgery.",
      icon: <Award className="w-8 h-8 text-[#62826B]" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Text-only Header (no banner image, matches requested text) */}
      <section className="pt-32 pb-12 px-6 bg-[#62826B]/10 border-b border-border-neutral text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B] mb-2">
            HONORS & RECOGNITIONS
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl text-primary leading-tight">
            Our Achievements
          </h1>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B]">
            TIMELINE OF HONOR
          </span>
          <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
            Recognized Clinical Excellence
          </h2>
          <div className="w-16 h-1 bg-[#62826B] rounded-full"></div>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardsList.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border-neutral rounded-[24px] p-8 shadow-sm hover:shadow-md hover:border-[#62826B]/30 hover:bg-[#62826B]/5 transition-all duration-300 flex items-start gap-5"
            >
              <div className="bg-[#FFF8EE] p-4 rounded-full border border-border-neutral flex-shrink-0 flex items-center justify-center">
                {award.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#62826B] text-white text-xs font-bold font-montserrat px-2.5 py-0.5 rounded-full">
                    {award.year}
                  </span>
                  <span className="text-xs font-instrument font-semibold text-text-muted">
                    {award.issuer}
                  </span>
                </div>
                <h3 className="font-caudex font-bold text-lg md:text-xl text-primary">
                  {award.title}
                </h3>
                <p className="font-instrument text-sm text-text-dark leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Summary Highlight Section */}
      <section className="py-16 bg-[#FFF8EE]/40 border-t border-border-neutral">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-caudex font-bold text-xl md:text-2xl text-[#411928] leading-relaxed italic">
            &ldquo;Under the expert direction of Dr. Priti Munde, DDS Dental Clinic continues to maintain elite clinical standards, ensuring every treatment is executed with unparalleled precision and patient comfort.&rdquo;
          </p>
        </div>
      </section>

      <SmallBookingCTA />
    </div>
  );
}
