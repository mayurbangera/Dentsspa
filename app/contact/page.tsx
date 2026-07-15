"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: "/images/call_icon.svg",
      title: "Call Us Directly",
      lines: ["+91 96730 04407"],
      href: "tel:+919673004407",
    },
    {
      icon: "/images/email_icon.svg",
      title: "Send a Message",
      lines: ["consult@dentsspa.com"],
      href: "mailto:consult@dentsspa.com",
    },
    {
      icon: "/images/time_icon.svg",
      title: "Clinic Timings",
      lines: ["Mon – Sat: 11 AM – 8 PM"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EE]">
      {/* Text-only Header (no banner image, matches requested text) */}
      <section className="pt-32 pb-12 px-6 bg-[#62826B]/10 border-b border-border-neutral text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#62826B] mb-2">
            GET IN TOUCH
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl text-primary leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Info details & interactive map / form grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact details card list & Clinic Address */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-border-neutral rounded-[24px] p-8 shadow-sm space-y-6">
            <h2 className="font-caudex font-bold text-2xl text-primary border-b border-border-neutral pb-3">
              Shivajinagar Clinic
            </h2>

            {/* Address */}
            <div className="space-y-1">
              <h3 className="font-caudex font-bold text-sm text-[#62826B]">
                Clinic Address
              </h3>
              <p className="font-instrument text-sm text-text-dark leading-relaxed">
                401, Eden Hall, Opposite Om Super Market, <br />
                Model Colony, Shivajinagar, Pune – 411016
              </p>
            </div>

            {/* Structured info list using copied icons */}
            <div className="space-y-4 pt-2">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="relative w-10 h-10 flex-shrink-0 bg-cream-light p-2 rounded-full border border-border-neutral flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      style={{
                        filter: "invert(13%) sepia(21%) saturate(3015%) hue-rotate(317deg) brightness(85%) contrast(85%)" // #411928 filter color
                      }}
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-caudex font-bold text-sm text-primary">
                      {item.title}
                    </h4>
                    {item.lines.map((line, j) =>
                      item.href ? (
                        <a
                          key={j}
                          href={item.href}
                          className="block font-instrument text-xs text-text-dark hover:text-[#62826B] transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={j} className="font-instrument text-xs text-text-dark">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Map Section */}
          <div className="rounded-[24px] overflow-hidden border border-border-neutral shadow-sm h-[320px] bg-white relative">
            <iframe
              title="DDS Dental Clinic Shivajinagar Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3988766694374!2d73.8444946!3d18.5329808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0799c62f305%3A0x4437b0c71dd5cb40!2sModel%20Colony%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720960000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Side: Contact Form matching Figma specs */}
        <div className="lg:col-span-7 bg-white border border-border-neutral rounded-[24px] shadow-sm p-8 md:p-10">
          <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary mb-6">
            Get in Touch
          </h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
              <div className="w-16 h-16 bg-cream-light rounded-full flex items-center justify-center">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-caudex font-bold text-xl text-primary">
                Message Sent!
              </h3>
              <p className="font-instrument text-sm text-text-dark">
                Thank you for reaching out. We will contact you shortly during clinic hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="font-instrument font-semibold text-sm text-text-dark"
                >
                  Your Name*
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-[#62826B] focus:ring-1 focus:ring-[#62826B]/30 transition-colors bg-white placeholder-text-light"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="font-instrument font-semibold text-sm text-text-dark"
                >
                  Your Email*
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-[#62826B] focus:ring-1 focus:ring-[#62826B]/30 transition-colors bg-white placeholder-text-light"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-phone"
                  className="font-instrument font-semibold text-sm text-text-dark"
                >
                  Your Phone*
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-[#62826B] focus:ring-1 focus:ring-[#62826B]/30 transition-colors bg-white placeholder-text-light"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-instrument font-semibold text-sm text-text-dark"
                >
                  Your Message*
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your dental concern or appointment request..."
                  className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-[#62826B] focus:ring-1 focus:ring-[#62826B]/30 transition-colors bg-white resize-none placeholder-text-light"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-primary hover:bg-primary-deep text-white font-instrument font-semibold text-sm px-8 py-3.5 rounded-[11px] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2 cursor-pointer self-start"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA matches About page (Small Booking CTA) */}
      <SmallBookingCTA />
    </div>
  );
}
