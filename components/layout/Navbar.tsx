"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Star } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    {
      name: "SERVICES",
      href: "#",
      dropdown: [
        { name: "General Dentistry", href: "/services/general-dentistry" },
        { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      ],
    },
    { name: "TECHNOLOGY", href: "/#technology" },
    { name: "OUR CLIENTS", href: "/#clients" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ACHIEVEMENTS", href: "/about#achievements" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-border-neutral"
          : "bg-white/90 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-white p-2 rounded-lg font-bold tracking-wider flex items-center justify-center">
            <span className="font-caudex text-lg">DDS</span>
          </div>
          <span className="font-caudex font-bold text-xl tracking-tight text-primary">
            DENTAL CLINIC
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 font-montserrat font-semibold text-sm text-text-dark hover:text-primary transition-colors py-2">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl py-2 border border-border-neutral"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm font-instrument text-text-dark hover:bg-cream-light hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-montserrat font-semibold text-sm hover:text-primary transition-colors py-2 ${
                  isActive ? "text-primary border-b-2 border-primary" : "text-text-dark"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book"
            className="bg-primary hover:bg-primary-deep text-white font-instrument text-sm font-semibold px-6 py-2.5 rounded-[11px] shadow-sm transition-all duration-200 hover:scale-[1.02]"
          >
            Book an Appointment
          </Link>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-dark p-2 hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border-neutral"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="flex flex-col space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between font-montserrat font-semibold text-sm text-text-dark py-2"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div className="pl-4 flex flex-col space-y-2 border-l border-border-neutral">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm font-instrument text-text-muted hover:text-primary py-1"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-montserrat font-semibold text-sm text-text-dark hover:text-primary py-2"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/book"
                className="bg-primary hover:bg-primary-deep text-white font-instrument text-sm font-semibold px-6 py-3 rounded-[11px] text-center shadow-sm transition-all duration-200"
              >
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
