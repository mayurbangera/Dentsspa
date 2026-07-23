"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
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
    setIsTechOpen(false);
  }, [pathname]);

  const servicesDropdown = [
    { name: "General Dental Services", href: "/services/general-dentistry" },
    { name: "Restorative Dentistry", href: "#" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { name: "Orthodontic Treatments (Braces & Aligners)", href: "#" },
    { name: "Dental Lasers Treatment", href: "#" },
    { name: "Dental Implants Treatment", href: "#" },
    { name: "Full Mouth Rehabilitation", href: "#" },
    { name: "Denture Treatment", href: "#" },
    { name: "Pediatric Dentistry", href: "#" },
  ];

  const techDropdown = [
    { name: "CBCT 3D Imaging", href: "#" },
    { name: "3D Intra-Oral Scanning", href: "#" },
    { name: "CEREC Single Visit Crowns", href: "#" },
    { name: "Dental Lasers", href: "#" },
    { name: "Dental Microscope", href: "#" },
    { name: "Prime Scan Intraoral Scanner", href: "#" },
    { name: "GBT Cleaning", href: "#" },
    { name: "GBT Machine", href: "#" },
  ];

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services", dropdown: servicesDropdown },
    { name: "TECHNOLOGY", href: "#", dropdown: techDropdown },
    { name: "OUR CLIENTS", href: "/clients" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ACHIEVEMENTS", href: "/achievements" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#62826B] shadow-md py-4`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/dds_final_logo_white.png"
            alt="DDS Dental Clinic Logo"
            width={160}
            height={50}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isService = link.name === "SERVICES";
              const isOpenDropdown = isService ? isServicesOpen : isTechOpen;
              const setOpenDropdown = isService ? setIsServicesOpen : setIsTechOpen;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <Link 
                    href={link.href}
                    className="flex items-center space-x-1 font-montserrat font-semibold text-sm text-white hover:text-cream transition-colors py-2"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </Link>

                  <AnimatePresence>
                    {isOpenDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl py-2 border border-border-neutral"
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
                className={`font-montserrat font-semibold text-sm hover:text-cream transition-colors py-2 ${
                  isActive ? "text-cream border-b-2 border-cream" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON - OUTLINED IN WHITE */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book"
            className="border-2 border-white text-white hover:bg-white hover:text-[#62826B] font-instrument text-sm font-semibold px-6 py-2.5 rounded-[11px] transition-all duration-200 hover:scale-[1.02]"
          >
            Book an Appointment
          </Link>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:text-cream transition-colors"
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
            className="lg:hidden bg-[#62826B] border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isService = link.name === "SERVICES";
                  const isDropOpen = isService ? isServicesOpen : isTechOpen;
                  const setDropOpen = isService ? setIsServicesOpen : setIsTechOpen;

                  return (
                    <div key={link.name} className="flex flex-col space-y-2">
                      <button
                        onClick={() => setDropOpen(!isDropOpen)}
                        className="flex items-center justify-between font-montserrat font-semibold text-sm text-white py-2"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isDropOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDropOpen && (
                        <div className="pl-4 flex flex-col space-y-2 border-l border-white/20">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-sm font-instrument text-cream/80 hover:text-white py-1"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-montserrat font-semibold text-sm text-white hover:text-cream py-2"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/book"
                className="border-2 border-white text-white hover:bg-white hover:text-[#62826B] font-instrument text-sm font-semibold px-6 py-3 rounded-[11px] text-center transition-all duration-200"
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
