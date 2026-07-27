"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import FadeUp from "../animation/FadeUp";
import Counter from "../ui/Counter";
import useParallax from "../animation/useParallax";

export default function Hero() {
  const bgOffset = useParallax(0.15);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-[#FFFFFF] pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* Background Texture & Soft Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-pink-100 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
        style={{ transform: `translateY(${bgOffset}px)` }}
      />
      <div className="pointer-events-none absolute right-10 top-20 h-[350px] w-[350px] rounded-full bg-pink-200/30 blur-[100px] sm:right-20 sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute -z-20 right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,#FAD9E7_0%,transparent_70%)] opacity-70 blur-2xl sm:h-[700px] sm:w-[700px]" />

      <div className="relative z-10 mx-auto grid w-[92%] max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 text-center sm:text-left">
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-sm sm:px-4">
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
              <p className="text-xs font-semibold text-pink-500 sm:text-sm">
                Available for Full-Time & Freelance
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.35em] text-pink-500 sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
              ALEXANDRA
            </p>
          </FadeUp>

          <FadeUp delay={0.16}>
            <h1 className="mt-2.5 text-3xl font-black leading-[1.12] tracking-tight text-[#2D2433] sm:mt-3 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Graphic Designer <br className="hidden sm:block" />
              <span className="text-pink-500">&amp;</span> Video Editor
            </h1>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6B6570] sm:mx-0 sm:mt-6 sm:text-lg sm:leading-8">
              Crafting thoughtful visual experiences through branding, motion
              design, editorial storytelling, and digital content.
            </p>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start sm:gap-2.5">
              {["Brand Identity", "Graphic Design", "Video Editing"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-medium text-pink-600 sm:px-4"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-start">
              <Button href="#portfolio">View Portfolio</Button>
              <Button href="#films" variant="secondary">
                Watch Showreel
              </Button>
            </div>
          </FadeUp>

          {/* Clean Stats Grid */}
          <FadeUp delay={0.48}>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-pink-100/80 pt-6 sm:mt-12 sm:grid-cols-4 sm:gap-4 sm:pt-8">
              {[
                {
                  n: 50,
                  l: "Projects",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="h-4 w-4"
                    >
                      <path d="M3 7.75A2.75 2.75 0 0 1 5.75 5h3.5A2.75 2.75 0 0 1 12 7.75V8h8.25A2.75 2.75 0 0 1 23 10.75v8.5A2.75 2.75 0 0 1 20.25 22H3.75A2.75 2.75 0 0 1 1 19.25v-8.5A2.75 2.75 0 0 1 3.75 8H5v-.25Z" />
                    </svg>
                  ),
                },
                {
                  n: 8,
                  l: "Brands &\nOrganizations",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="h-4 w-4"
                    >
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                      <path d="M7 9h10M7 13h6" />
                    </svg>
                  ),
                },
                {
                  n: 4,
                  l: "Years\nExperience",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="h-4 w-4"
                    >
                      <path d="m12 3 1.8 4.2 4.6.4-3.5 2.9 1.2 4.5L12 12.7 7.9 15 9.1 10.5 5.6 7.6l4.6-.4L12 3Z" />
                    </svg>
                  ),
                },
                {
                  n: 200,
                  l: "Creative\nAssets",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="h-4 w-4"
                    >
                      <path d="M4.5 18.75c-1.1 0-1.75-.65-1.75-1.75 0-2.35 2.1-4.25 4.65-4.25 2.25 0 4.1 1.5 4.6 3.5h3.3c1.65 0 3 1.35 3 3 0 1.1-.65 1.75-1.75 1.75H4.5ZM11 8.25h9.75M11 12h6.5M11 15.75h4.25" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#2D2433] sm:text-3xl lg:text-4xl">
                    <Counter end={s.n} suffix="+" />
                  </h3>
                  <p className="mt-1 whitespace-pre-line text-[11px] font-semibold uppercase tracking-wider text-[#6B6570] sm:text-xs">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="relative mt-8 lg:col-span-5 lg:mt-0">
          <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
            {/* Soft Pink Shadow Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-300/40 via-pink-200/30 to-transparent blur-[50px] sm:h-[400px] sm:w-[400px] sm:blur-[70px]" />

            {/* Brush Image */}
            <FadeUp delay={0.64}>
              <div className="pointer-events-none absolute -right-4 -top-8 -z-10 w-[100%] max-w-[520px] select-none opacity-20 blur-[2px] sm:-right-6 sm:-top-10">
                <Image
                  src="/hero/brush.png"
                  alt=""
                  width={900}
                  height={900}
                  className="w-full object-contain"
                />
              </div>
            </FadeUp>

            {/* Flowers Layer */}
            <FadeUp delay={0.6}>
              <div className="pointer-events-none absolute -right-6 -top-10 -z-10 w-[105%] max-w-[550px] select-none sm:-right-8 sm:-top-12">
                <motion.div
                  animate={{ rotate: [-0.8, 0.8, -0.8] }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/hero/flowers.png"
                    alt=""
                    width={2048}
                    height={2048}
                    className="w-full object-contain opacity-95"
                  />
                </motion.div>
              </div>
            </FadeUp>

            {/* Profile Image Layer */}
            <FadeUp delay={0.56}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mx-auto w-full max-w-[270px] sm:max-w-[340px] lg:max-w-none"
              >
                <Image
                  src="/hero/profile.png"
                  alt="XANS - Graphic Designer"
                  width={1000}
                  height={1300}
                  priority
                  className="h-auto w-full max-w-full object-contain drop-shadow-[0_20px_35px_rgba(229,135,176,0.18)]"
                />
              </motion.div>
            </FadeUp>

            {/* Floating Glassmorphic Quote Badge */}
            <FadeUp delay={0.72}>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-2 left-1/2 z-20 w-[230px] max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/85 p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.06)] backdrop-blur-md sm:bottom-6 sm:left-auto sm:right-0 sm:translate-x-0 sm:w-[280px] sm:p-4"
              >
                <p className="text-xs font-medium leading-snug text-[#6B6570] sm:text-sm">
                  <span className="text-lg font-bold text-pink-500 sm:text-xl">“</span>
                  Thoughtfully Crafted.
                  <br />
                  Beautifully Remembered.
                  <span className="text-lg font-bold text-pink-500 sm:text-xl">”</span>
                </p>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}