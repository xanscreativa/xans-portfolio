"use client";

import PortfolioCard from "../portfolio/PortfolioCard";
import { portfolioCollections } from "@/app/data/portfolio";
import FadeUp from "../animation/FadeUp";

export default function PortfolioGallery() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-[#F0E6EA] bg-[#FFFDFC] py-20 sm:py-28 lg:py-32"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-pink-100/30 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-pink-100/20 blur-[150px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-pink-500">
              SELECTED WORK
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
              Creative work across multiple design disciplines.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B6570] sm:text-base sm:leading-7">
              A curated portfolio showcasing my experience in thumbnail design,
              character design, live streaming, social media, logo design, and
              poster design.
            </p>
          </div>
        </FadeUp>

        {/* PORTFOLIO GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:mt-16">
          {portfolioCollections.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.08}>
              <PortfolioCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}