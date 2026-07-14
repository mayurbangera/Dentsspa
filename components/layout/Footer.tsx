"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Share2, Rss, AtSign, Globe } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Technology", href: "/#technology" },
    { name: "Happy Clients", href: "/#clients" },
    { name: "Awards", href: "/about#achievements" },
    { name: "Dental Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Teeth Filling", href: "/services/general-dentistry" },
    { name: "Dental Emergency", href: "/services/general-dentistry" },
    { name: "Teeth Extraction", href: "/services/general-dentistry" },
    { name: "General Dental Checkup", href: "/services/general-dentistry" },
    { name: "Root Canal", href: "/services/general-dentistry" },
  ];

  return (
    <footer className="bg-dark text-white border-t border-primary/20">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Tagline */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg font-bold tracking-wider flex items-center justify-center">
              <span className="font-caudex text-lg">DDS</span>
            </div>
            <span className="font-caudex font-bold text-xl tracking-tight text-white">
              DENTAL CLINIC
            </span>
          </Link>
          <p className="font-alex text-4xl text-cream-light mt-2 tracking-wide leading-none">
            Diagnose. Design. Smile
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <a href="#" className="hover:text-cream transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10" aria-label="Facebook">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cream transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10" aria-label="Instagram">
              <AtSign className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cream transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10" aria-label="Twitter/X">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cream transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10" aria-label="RSS Feed">
              <Rss className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-caudex font-bold text-lg mb-6 tracking-wide text-cream border-b border-white/10 pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-3 font-instrument text-sm text-text-light">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-cream transition-colors block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-caudex font-bold text-lg mb-6 tracking-wide text-cream border-b border-white/10 pb-2">
            Our Services
          </h3>
          <ul className="flex flex-col space-y-3 font-instrument text-sm text-text-light">
            {services.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-cream transition-colors block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-caudex font-bold text-lg mb-6 tracking-wide text-cream border-b border-white/10 pb-2">
            Contact
          </h3>
          <ul className="flex flex-col space-y-4 font-instrument text-sm text-text-light">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
              <span>401, Eden Hall, Opposite Om Super Market, Model Colony, Shivajinagar, Pune - 411016</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-cream flex-shrink-0" />
              <a href="tel:+919673004407" className="hover:text-cream transition-colors">+91 - 96730 04407</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-cream flex-shrink-0" />
              <a href="mailto:consult@dentsspa.com" className="hover:text-cream transition-colors">consult@dentsspa.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-cream flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cream">Clinic Timings:</p>
                <p>Mon–Sat: 11 AM–8 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="font-instrument text-xs text-text-light">
          Copyright © 2026 DDS Dental Clinic | All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-instrument text-xs text-text-light">
          <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
          <span className="text-white/20">|</span>
          <Link href="/terms" className="hover:text-cream transition-colors">Terms & Conditions</Link>
          <span className="text-white/20">|</span>
          <Link href="/disclaimer" className="hover:text-cream transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
