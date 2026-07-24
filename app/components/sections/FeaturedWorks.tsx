"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../animation/FadeUp";

export default function FeaturedWorks() {
  const project = {
    category: "CREATIVE",
    title: "Brand Identity",
    client: "Jendela Finansial",
    description:
      "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",
    tags: ["Brand Identity", "Social Media Design", "Character Design"],
    image: "/portfolio/jendela-finansial.jpg",
    slug: "brand-identity", // Mengarahkan ke slug data portfolio
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-20 sm:py-28 lg:py-32">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-pink-100/40 blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-pink-500">
                FEATURED PROJECT
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
                Crafting brands that connect, engage, and grow.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-[#6B6570] sm:text-lg">
                From visual identity to social media systems, every project is
                designed to create a consistent and memorable brand
                experience.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* FEATURED CARD */}
        <FadeUp delay={0.15}>
          <div className="group relative overflow-hidden rounded-[36px] border border-pink-100/80 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-6 lg:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* LEFT: Image Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#F9F4F2] lg:col-span-6 xl:col-span-7">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-wider text-[#2D2433] backdrop-blur-md">
                  {project.client}
                </div>
              </div>

              {/* RIGHT: Project Content */}
              <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-pink-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-3xl font-black tracking-tight text-[#2D2433] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#6B6570]">
                  {project.description}
                </p>

                {/* TAGS / BADGES */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-pink-100 bg-pink-50/60 px-3.5 py-1.5 text-xs font-semibold text-[#2D2433]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA BUTTON */}
                <div className="mt-8 pt-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#E96A98] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d85886] hover:shadow-lg"
                  >
                    <span>View Case Study</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}