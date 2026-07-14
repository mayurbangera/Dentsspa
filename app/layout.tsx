import type { Metadata } from "next";
import { Alex_Brush, Caudex, Instrument_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex",
  display: "swap",
});

const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caudex",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DDS Dental Clinic | Expert Care, Beautiful Smiles",
  description: "Diagnose. Design. Smile. Experience high-quality dental care in a soothing and sophisticated environment under Dr. Priti Munde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alexBrush.variable} ${caudex.variable} ${instrumentSans.variable} ${montserrat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-instrument bg-white text-text-dark antialiased">
        <Navbar />
        {/* Padding top to offset the fixed navbar */}
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
