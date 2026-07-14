"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Mail, MapPin, Send } from "lucide-react";

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
    // Placeholder submit handler — backend not connected
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: <Clock className="w-7 h-7 text-primary" />,
      title: "We're Open",
      lines: ["Monday – Saturday", "11 AM – 8 PM"],
    },
    {
      icon: <Phone className="w-7 h-7 text-primary" />,
      title: "Call Us Directly",
      lines: ["+91 96730 04407"],
      href: "tel:+919673004407",
    },
    {
      icon: <Mail className="w-7 h-7 text-primary" />,
      title: "Send a Message",
      lines: ["consult@dentsspa.com"],
      href: "mailto:consult@dentsspa.com",
    },
    {
      icon: <MapPin className="w-7 h-7 text-primary" />,
      title: "Clinic Location",
      lines: [
        "401, Eden Hall, Opposite Om Super Market,",
        "Model Colony, Shivajinagar, Pune – 411016",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-cream-light/30 py-20 text-center border-b border-border-neutral">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            GET IN TOUCH
          </span>
          <h1 className="font-caudex font-bold text-4xl md:text-5xl lg:text-6xl text-primary">
            Contact
          </h1>
          <p className="font-instrument text-base md:text-lg text-text-dark max-w-xl leading-relaxed">
            Fill out the form below and we will contact you during our working hours.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-bg rounded-[20px] p-6 border border-border-neutral flex flex-col items-center text-center space-y-3 hover:shadow-md hover:bg-cream-light/20 transition-all duration-300"
            >
              <div className="bg-white p-4 rounded-full shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-caudex font-bold text-lg text-primary">
                {card.title}
              </h3>
              <div className="flex flex-col space-y-1">
                {card.lines.map((line, j) =>
                  card.href ? (
                    <a
                      key={j}
                      href={card.href}
                      className="font-instrument text-sm text-text-dark hover:text-primary transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="font-instrument text-sm text-text-dark">
                      {line}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map + Form Row */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Static Map Placeholder */}
          <div className="rounded-[24px] overflow-hidden border border-border-neutral shadow-sm h-[400px] lg:h-auto bg-cream-light/30 flex flex-col items-center justify-center space-y-4">
            {/* Static Google Maps embed via URL - no JS needed */}
            <iframe
              title="DDS Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3988766694374!2d73.8444946!3d18.5329808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0799c62f305%3A0x4437b0c71dd5cb40!2sModel%20Colony%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720960000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-border-neutral rounded-[24px] shadow-sm p-8 md:p-10">
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
                    className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors bg-white placeholder-text-light"
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
                    className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors bg-white placeholder-text-light"
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
                    className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors bg-white placeholder-text-light"
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
                    className="font-instrument text-sm text-text-dark border border-border-neutral rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors bg-white resize-none placeholder-text-light"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-deep text-white font-instrument font-semibold text-sm px-8 py-3.5 rounded-[11px] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
