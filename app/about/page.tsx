"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookingCTA from "@/components/sections/BookingCTA";
import { team } from "@/lib/data/siteData";
import { Sparkles, HeartHandshake, Users } from "lucide-react";

export default function AboutPage() {
  const chooseUsItems = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Soothing Environment",
      desc: "Experience dental spa therapy designed to eliminate anxiety and turn your fear into confidence.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Care After Treatment",
      desc: "Comprehensive guidelines and tracking to ensure painless recovery and long-lasting treatments.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Experts Team",
      desc: "Elite dental surgeons, orthodontists, and specialists dedicated to absolute precision and beauty.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Dr. Priti Munde Profile */}
      <section className="py-20 bg-cream-light/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
                FOUNDER & CLINICAL DIRECTOR
              </span>
              <h1 className="font-caudex font-bold text-4xl md:text-5xl text-primary">
                Dr. Priti Munde
              </h1>
              <p className="font-instrument font-semibold text-lg text-text-dark leading-relaxed">
                BDS , PGDMLS <br />
                Registration No : A - 17135 <br />
                <span className="text-primary">Certified Implantologist & Cosmetic Dental Surgeon</span>
              </p>
              <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
            </div>

            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Dr. Priti Munde is showered with awards and recognition for her strenuous and gleeful work.
              Nominated as best clinic interior in 2015, esthetic centre of the year in 2016 at Famdent Awards,
              Dr. Priti Munde has also been nominated as Outstanding Dentist of the year in 2016 and bagged an
              award as Jury of Esthetic Practice at Year 2016 at Indian Health Professional awards.
            </p>

            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Marking her way in every field, Dr. Priti Munde has organised 25+ camps in Infosys, TCS, Vodafone etc.
              Dr. Priti also performed a role of Dental Consultants to the renowned star icons as well.
            </p>

            <div className="bg-white/80 p-6 rounded-2xl border border-border-neutral shadow-sm mt-4">
              <p className="font-caudex font-bold text-xl md:text-2xl text-primary text-center italic leading-relaxed">
                &ldquo;Experience the new age spa dentistry which offer fear free dental treatments, astonishing makeover to facial aesthetics, the innovative preventive dental programs for every individual for having healthy, painless & cost effective dental health all life.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative h-[500px] w-full rounded-[30px] overflow-hidden shadow-xl border-4 border-white"
          >
            <Image
              src="/images/dr_priti_munde.png"
              alt="Dr. Priti Munde"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              OUR STANDARDS
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Why Choose DDS Clinic?
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chooseUsItems.map((item, i) => (
              <div
                key={i}
                className="bg-card-bg rounded-[20px] p-8 border border-border-neutral flex flex-col items-center text-center space-y-4 hover:shadow-md hover:bg-cream-light/10 transition-all duration-300"
              >
                <div className="bg-white p-4 rounded-full shadow-sm">
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

      {/* Team Section */}
      <section id="achievements" className="py-20 bg-cream-light/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
              CLINICAL SPECIALISTS
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Meet Our Expert Doctors
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.filter(member => member.id !== "dr-priti").map((member, i) => (
              <div
                key={member.id}
                className="bg-white rounded-[20px] border border-border-neutral overflow-hidden shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[300px] w-full bg-cream-light/35">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-caudex font-bold text-lg text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="font-instrument text-sm text-text-muted font-medium">
                    {member.role}
                  </p>
                </div>
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
