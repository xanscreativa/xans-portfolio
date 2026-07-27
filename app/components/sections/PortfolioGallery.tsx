"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";

export default function PortfolioGallery() {
  const works = [
    {
      category: "CREATIVE",
      title: "Social Media Design",
      description:
        "Editorial social media systems with clean layouts and consistent branding.",
      image: "/portfolio/uksw.jpg",
      slug: "social-media-design",
    },
    {
      category: "CREATIVE",
      title: "Brand Identity",
      description:
        "Building cohesive brand experiences through strategic visual identity and storytelling.",
      image: "/portfolio/jendela-finansial.jpg",
      slug: "brand-identity",
    },
    {
      category: "CREATIVE",
      title: "Logo Design",
      description:
        "Timeless logo systems designed for brands, churches, and communities.",
      image: "/portfolio/pelkatpa.jpg",
      slug: "logo-design",
    },
    {
      category: "CREATIVE",
      title: "Thumbnail Design",
      description:
        "High-converting and eye-catching YouTube thumbnail designs.",
      image: "/portfolio/wakatom.jpg",
      slug: "thumbnail-design",
    },
    {
      category: "CREATIVE",
      title: "Character Design",
      description:
        "Custom mascot and character designs tailored for brand identity.",
      image: "/portfolio/character.jpg",
      slug: "character-design",
    },
    {
      category: "CREATIVE",
      title: "Poster & Overlay",
      description:
        "Creative graphics for live streaming overlays, events, and posters.",
      image: "/portfolio/reno.jpg",
      slug: "poster-design",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-pink-100/60 bg-[#FFFDFC] py-8 sm:py-16 lg:py-20">
      {/* Ambient Glow */}
      <div className="pointer-events-none hidden absolute -left-40 top-1/4 h-[200px] w-[200px] rounded-full bg-pink-100/40 blur-[80px] sm:block sm:h-[400px] sm:w-[400px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto mb-6 max-w-md text-center sm:mb-12 sm:max-w-2xl lg:max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E96A98] sm:text-xs sm:tracking-[0.35em]">
              SELECTED WORK
            </p>

            <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] text-balance sm:mt-2.5 sm:text-3xl lg:text-4xl">
              Creative work across multiple design disciplines.
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-[11px] leading-relaxed text-[#6B6570] text-balance sm:mt-3 sm:max-w-xl sm:text-base">
              A curated portfolio showcasing my experience in thumbnail design,
              character design, live streaming, social media, logo design, and
              poster design.
            </p>
          </div>
        </FadeUp>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {works.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.05}>
              <div className="group flex h-full flex-col justify-between rounded-[16px] border border-pink-100/80 bg-white p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-lg sm:rounded-[28px] sm:p-5">
                <div>
                  {/* Image Container (Proposi Portrait aspect-[3/4] dipertahankan) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] bg-[#F9F4F2] sm:rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-2.5 px-0.5 sm:mt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#A098A8] sm:text-[10px] sm:tracking-[0.2em]">
                      {item.category}
                    </span>

                    <h3 className="mt-0.5 text-xs font-extrabold tracking-tight text-[#2D2433] line-clamp-1 sm:text-xl sm:line-clamp-none">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-relaxed text-[#6B6570] line-clamp-2 sm:mt-1.5 sm:text-sm sm:line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="mt-2.5 px-0.5 pt-0.5 sm:mt-5 sm:pt-1">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#2D2433] transition-colors hover:text-[#E96A98] sm:gap-1.5 sm:text-xs sm:tracking-[0.15em]"
                  >
                    <span>VIEW COLLECTION</span>
                    <svg
                      className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}