"use client";

import { useState } from "react";
import FadeUp from "../animation/FadeUp";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Identity & Systems",
    tagline: "Building cohesive, memorable, and scalable brand foundations.",
    description:
      "Merancang identitas visual yang tidak hanya terlihat menarik, tetapi juga menyampaikan cerita dan nilai inti bisnis secara konsisten di seluruh titik sentuh media.",
    offerings: ["Logo Design & Grid System", "Visual Identity Guidelines", "Brand Asset Library", "Typography & Color Palette"],
    deliverables: ["Vector Logo Files (AI, SVG)", "Brand Guideline PDF", "Social Media Templates", "Print Assets"],
  },
  {
    number: "02",
    title: "Motion Design & Video Editing",
    tagline: "Dynamic visual storytelling that captures attention instantly.",
    description: "Mengubah ide menjadi animasi dan susunan video ritmis yang hidup. Berfokus pada dinamika motion, ritme pacing, dan visual efek bernilai komersial tinggi.",
    offerings: ["Commercial & Promo Editing", "Motion Graphics & VFX", "Short-Form Video (Reels/TikTok)", "AI Assisted Visuals & 3D Render"],
    deliverables: ["Full HD / 4K Export Render", "Source Project Files", "Multi-Format Cuts (16:9, 9:16, 1:1)", "Sound Design Integration"],
  },
  {
    number: "03",
    title: "Social Media & Campaign Visuals",
    tagline: "High-converting visual assets tailored for modern digital channels.",
    description: "Membuat kampanye visual berketerikatan tinggi untuk platform media sosial agar merek kamu menonjol di tengah padatnya feed audiens.",
    offerings: ["Social Media Carousel Design", "Campaign Poster & Key Visuals", "Content Strategy Alignment", "Interactive Stories Templates"],
    deliverables: ["High-Res PNG/JPG Packs", "Editable Figma/PSD Templates", "Exported Motion Banners"],
  },
  {
    number: "04",
    title: "Church & Event Creative Media",
    tagline: "Elevating worship & live event experiences through powerful visuals.",
    description: "Pengalaman khusus dalam merancang aset media panggung, visual latar belakang live streaming, serta materi promosi acara secara profesional.",
    offerings: ["Stage Screen Visuals & Backgrounds", "Livestream Lower Thirds & Overlays", "Sermon Series Key Art", "Event Promotion Reels"],
    deliverables: ["Looping Motion Backgrounds", "OBS/ProPresenter Graphics", "Print & Digital Posters"],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#0D0C10] py-32 text-white">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Header */}
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500 font-bold">
            SERVICES & CAPABILITIES
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Strategic visual solutions built to scale your creative output.
          </h2>
        </FadeUp>

        {/* Agency-style Accordion / List */}
        <div className="mt-16 space-y-6">
          {servicesData.map((service, idx) => {
            const isOpen = activeService === idx;

            return (
              <FadeUp key={service.number} delay={idx * 0.1}>
                <div
                  className={`group rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "border-pink-500/50 bg-white/[0.06] shadow-[0_20px_50px_rgba(233,106,152,0.1)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  {/* Clickable Header Bar */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-8 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-xl font-mono text-pink-500/60 font-bold">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400 font-medium hidden md:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                      <span className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="border-t border-white/10 p-8 pt-6 transition-all duration-300">
                      <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
                        {service.description}
                      </p>

                      <div className="mt-8 grid gap-8 md:grid-cols-2">
                        {/* Core Offerings */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold mb-4">
                            Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {service.offerings.map((offering) => (
                              <li key={offering} className="flex items-center gap-2 text-sm text-gray-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                                {offering}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold mb-4">
                            Typical Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliv) => (
                              <li key={deliv} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="text-pink-400">✓</span>
                                {deliv}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}