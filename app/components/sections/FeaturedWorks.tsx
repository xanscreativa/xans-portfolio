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
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-[#FFFDFC] py-20 sm:py-28 lg:py-32">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-pink-100/40 blur-[160px]" />
=======
    <section className="relative overflow-hidden bg-[#FFFDFC] py-12 sm:py-20 lg:py-32">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[300px] w-[300px] rounded-full bg-pink-100/40 blur-[120px] sm:h-[450px] sm:w-[450px] sm:blur-[160px]" />
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* HEADER SECTION */}
        <FadeUp>
<<<<<<< HEAD
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-pink-500">
                FEATURED PROJECT
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#2D2433] sm:text-4xl lg:text-5xl">
=======
          <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
                FEATURED PROJECT
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#2D2433] xs:text-3xl sm:mt-3 sm:text-4xl lg:text-5xl">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                Crafting brands that connect, engage, and grow.
              </h2>
            </div>
            <div className="lg:col-span-5">
<<<<<<< HEAD
              <p className="text-base leading-relaxed text-[#6B6570] sm:text-lg">
=======
              <p className="text-sm leading-relaxed text-[#6B6570] sm:text-base lg:text-lg">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                From visual identity to social media systems, every project is
                designed to create a consistent and memorable brand
                experience.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* FEATURED CARD */}
        <FadeUp delay={0.15}>
<<<<<<< HEAD
          <div className="group relative overflow-hidden rounded-[36px] border border-pink-100/80 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-6 lg:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* LEFT: Image Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#F9F4F2] lg:col-span-6 xl:col-span-7">
=======
          <div className="group relative overflow-hidden rounded-[24px] border border-pink-100/80 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] xs:p-5 sm:rounded-[32px] sm:p-6 lg:rounded-[36px] lg:p-8">
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* LEFT: Image Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#F9F4F2] xs:aspect-[16/10] sm:rounded-[24px] lg:col-span-6 lg:aspect-[4/3] xl:col-span-7">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
<<<<<<< HEAD
                <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-wider text-[#2D2433] backdrop-blur-md">
=======
                <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-[11px] font-bold tracking-wider text-[#2D2433] backdrop-blur-md xs:left-4 xs:top-4 xs:px-4 xs:py-1.5 xs:text-xs">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                  {project.client}
                </div>
              </div>

              {/* RIGHT: Project Content */}
              <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5">
<<<<<<< HEAD
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-pink-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-3xl font-black tracking-tight text-[#2D2433] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#6B6570]">
=======
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.35em]">
                  {project.category}
                </span>

                <h3 className="mt-1.5 text-2xl font-black tracking-tight text-[#2D2433] xs:text-3xl sm:mt-2 sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                  {project.description}
                </p>

                {/* TAGS / BADGES */}
<<<<<<< HEAD
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-pink-100 bg-pink-50/60 px-3.5 py-1.5 text-xs font-semibold text-[#2D2433]"
=======
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-pink-100 bg-pink-50/60 px-2.5 py-1 text-[11px] font-semibold text-[#2D2433] sm:px-3.5 sm:py-1.5 sm:text-xs"
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA BUTTON */}
<<<<<<< HEAD
                <div className="mt-8 pt-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#E96A98] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d85886] hover:shadow-lg"
=======
                <div className="mt-6 pt-1 sm:mt-8 sm:pt-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E96A98] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d85886] hover:shadow-lg sm:w-auto sm:px-7 sm:py-3.5"
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
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