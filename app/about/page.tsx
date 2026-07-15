"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";
import { team } from "@/lib/data/siteData";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const chooseUsItems = [
    {
      icon: "/images/soothing_environment_1.svg",
      title: "Soothing Environment",
    },
    {
      icon: "/images/care_after_treatment_1.svg",
      title: "Care After Treatment",
    },
    {
      icon: "/images/experts_team_1.svg",
      title: "Experts Team",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Banner Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/about_us_banner.jpg"
          alt="DDS Dental Clinic Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/45" />
      </section>

      {/* 2. Intro Text / Standards Section */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center space-y-8">
          <p className="font-caudex font-bold text-lg md:text-xl text-[#411928] leading-relaxed italic">
            Experience the new age spa dentistry which offer fear free dental treatments, astonishing makeover to facial aesthetics, the innovative preventive dental programs for every individual for having healthy, painless & cost effective dental health all life.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-4">
            {chooseUsItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                    style={{
                      filter: "invert(10%) sepia(43%) saturate(2206%) hue-rotate(313deg) brightness(85%) contrast(100%)" // #380920 filter color
                    }}
                  />
                </div>
                <span className="font-caudex font-bold text-sm text-[#411928] text-left leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dr. Priti Munde Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[360px] md:h-[420px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral"
          >
            <Image
              src="/images/priti_munde.jpg"
              alt="Dr. Priti Munde"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-1">
              <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary">
                Dr. Priti Munde
              </h2>
              <p className="font-instrument text-xs md:text-sm text-text-dark leading-relaxed font-semibold">
                BDS , PGDMLS <br />
                Registration No : A - 17135 <br />
                Certified Implantologist & Cosmetic Dental Surgeon
              </p>
            </div>

            <div className="text-xs md:text-sm font-instrument text-text-dark space-y-3 leading-relaxed">
              <p>
                Dr. Priti Munde is showered with awards and recognition for her strenuous and gleeful work. Nominated as best clinic interior in 2015, esthetic centre of the year in 2016 at Famdent Awards, Dr. Priti Munde has also been nominated as Outstanding Dentist of the year in 2016 and bagged an award as Jury of Esthetic Practice at Year 2016 at Indian Health Professional awards.
              </p>
              <p>
                Marking her way in every field, Dr. Priti Munde has organised 25+ camps in Infosys, TCS, Vodafone etc. Dr. Priti also performed a role of Dental Consultants to the renowned star icons as well.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section ref={ref} id="achievements" className="py-20 bg-[#FFF8EE]/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {team.filter(member => member.id !== "dr-priti").map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] border border-border-neutral overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[280px] w-full bg-cream-light/35">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <h3 className="font-caudex font-bold text-base text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="font-instrument text-xs text-text-muted font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Compact single-line Booking CTA above footer */}
      <SmallBookingCTA />
    </div>
  );
}
