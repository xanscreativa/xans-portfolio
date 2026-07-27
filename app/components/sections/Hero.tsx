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
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-[#FFFFFF] pb-8 pt-16 sm:pb-16 sm:pt-28 lg:pb-14 lg:pt-36"
    >
      {/* Background Texture & Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-16 h-48 w-48 rounded-full bg-pink-100 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]"
        style={{ transform: `translateY(${bgOffset}px)` }}
      />
      <div className="pointer-events-none absolute right-4 top-12 h-[250px] w-[250px] rounded-full bg-pink-200/30 blur-[80px] sm:right-20 sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Layout Utama */}
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:text-left">
          
          {/* Visual Profile (Mobile di Atas) - Gap atas dipertahankan */}
          <div className="relative w-full max-w-[275px] sm:max-w-sm lg:max-w-none lg:order-2 lg:col-span-5 pt-4 sm:pt-4 mb-1 lg:mb-0">
            <div className="relative mx-auto">
              {/* Soft Pink Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-300/40 via-pink-200/30 to-transparent blur-[45px] sm:h-[380px] sm:w-[380px] sm:blur-[70px]" />

              {/* Brush Image */}
              <FadeUp delay={0.2}>
                <div className="pointer-events-none absolute -right-4 top-1 -z-10 w-full max-w-[420px] select-none opacity-20 blur-[1px] sm:-right-8 sm:-top-2 sm:max-w-[580px]">
                  <Image
                    src="/hero/brush.png"
                    alt=""
                    width={900}
                    height={900}
                    priority
                    className="w-full object-contain"
                  />
                </div>
              </FadeUp>

              {/* Flowers Layer */}
              <FadeUp delay={0.15}>
                <div className="pointer-events-none absolute -right-4 top-2 -z-10 w-[110%] max-w-[440px] select-none sm:-right-10 sm:-top-2 sm:max-w-[610px]">
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
              <FadeUp delay={0.1}>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mx-auto w-[105%] sm:w-[102%]"
                >
                  <Image
                    src="/hero/profile.png"
                    alt="XANS - Graphic Designer"
                    width={1000}
                    height={1300}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_12px_22px_rgba(229,135,176,0.18)]"
                  />
                </motion.div>
              </FadeUp>

              {/* Quote Badge */}
              <FadeUp delay={0.25}>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-1 left-[-10px] z-20 w-[78%] max-w-[145px] rounded-xl border border-white/80 bg-white/90 p-2.5 shadow-sm backdrop-blur-md sm:bottom-10 sm:left-[-16px] sm:max-w-[210px] sm:p-4"
                >
                  <p className="text-[10px] font-medium leading-snug text-[#6B6570] sm:text-xs sm:leading-relaxed">
                    <span className="text-[11px] font-bold text-pink-500 sm:text-sm">“</span>
                    Thoughtfully Crafted. Beautifully Remembered.
                    <span className="text-[11px] font-bold text-pink-500 sm:text-sm">”</span>
                  </p>
                </motion.div>
              </FadeUp>
            </div>
          </div>

          {/* Main Content Area (Mobile di Bawah) - Gap atas foto dengan Alexandra dikecilkan */}
          <div className="w-full mt-1 sm:mt-3 lg:mt-0 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start">
            
            {/* Sub-heading & Title */}
            <FadeUp delay={0}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
                ALEXANDRA
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-0.5 text-2xl font-black leading-tight tracking-tight text-[#2D2433] sm:mt-2 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Graphic Designer <br />
                <span className="text-pink-500">&amp;</span>&nbsp;Video Editor
              </h1>
            </FadeUp>

            {/* Status Badge - Gap atas dan bawah dikurangi */}
            <FadeUp delay={0.16}>
              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-white/90 px-3 py-0.5 shadow-2xs backdrop-blur-sm sm:mt-2.5 sm:px-4 sm:py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse sm:h-2 sm:w-2" />
                <p className="text-[10px] font-semibold text-pink-500 sm:text-sm">
                  Available for Full-Time &amp; Freelance
                </p>
              </div>
            </FadeUp>

            {/* Paragraf Deskripsi - Gap atas disesuaikan dengan badge */}
            <FadeUp delay={0.24}>
              <p className="mx-auto lg:mx-0 mt-2 sm:mt-3.5 max-w-md text-xs leading-relaxed text-[#6B6570] sm:text-base sm:leading-relaxed">
                Crafting thoughtful visual experiences through branding, motion design, editorial storytelling, and digital content.
              </p>
            </FadeUp>

            {/* Skill Tags */}
            <FadeUp delay={0.32}>
              <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 sm:mt-4 sm:justify-start sm:gap-2">
                {["Brand Identity", "Graphic Design", "Video Editing"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pink-100 bg-pink-50/80 px-3 py-1 text-[10px] font-medium text-pink-600 sm:px-3.5 sm:py-1 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.4}>
              <div className="mt-3.5 flex w-full items-center justify-center gap-2.5 sm:w-auto sm:mt-5 sm:justify-start sm:gap-3">
                <div className="flex-1 sm:flex-initial">
                  <Button 
                    href="#portfolio" 
                    className="!py-2 !px-5 sm:!py-3 sm:!px-7 !text-[11px] sm:!text-sm flex items-center justify-center w-full"
                  >
                    View Portfolio
                  </Button>
                </div>
                <div className="flex-1 sm:flex-initial">
                  <Button 
                    href="#films" 
                    variant="secondary" 
                    className="!py-2 !px-5 sm:!py-3 sm:!px-7 !text-[11px] sm:!text-sm flex items-center justify-center w-full"
                  >
                    Watch Showreel
                  </Button>
                </div>
              </div>
            </FadeUp>

            {/* Stats Grid - Gap horizontal diperlebar agar seimbang dengan lebar layar */}
            <FadeUp delay={0.48}>
              <div className="mt-3 w-full grid grid-cols-4 gap-x-5 gap-y-3 border-t border-pink-100/80 pt-3 sm:mt-8 sm:gap-x-10 sm:gap-y-4 sm:pt-6 px-1 sm:px-2">
                {[
                  {
                    n: 50,
                    l: "Projects",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3 w-3 sm:h-4 sm:w-4">
                        <path d="M3 7.75A2.75 2.75 0 0 1 5.75 5h3.5A2.75 2.75 0 0 1 12 7.75V8h8.25A2.75 2.75 0 0 1 23 10.75v8.5A2.75 2.75 0 0 1 20.25 22H3.75A2.75 2.75 0 0 1 1 19.25v-8.5A2.75 2.75 0 0 1 3.75 8H5v-.25Z" />
                      </svg>
                    ),
                  },
                  {
                    n: 8,
                    l: "Brands",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3 w-3 sm:h-4 sm:w-4">
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                        <path d="M7 9h10M7 13h6" />
                      </svg>
                    ),
                  },
                  {
                    n: 4,
                    l: "Years Exp.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3 w-3 sm:h-4 sm:w-4">
                        <path d="m12 3 1.8 4.2 4.6.4-3.5 2.9 1.2 4.5L12 12.7 7.9 15 9.1 10.5 5.6 7.6l4.6-.4L12 3Z" />
                      </svg>
                    ),
                  },
                  {
                    n: 200,
                    l: "Assets",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3 w-3 sm:h-4 sm:w-4">
                        <path d="M4.5 18.75c-1.1 0-1.75-.65-1.75-1.75 0-2.35 2.1-4.25 4.65-4.25 2.25 0 4.1 1.5 4.6 3.5h3.3c1.65 0 3 1.35 3 3 0 1.1-.65 1.75-1.75 1.75H4.5ZM11 8.25h9.75M11 12h6.5M11 15.75h4.25" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col items-center text-center">
                    <div className="mb-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-pink-50 text-pink-500 sm:mb-2 sm:h-9 sm:w-9 sm:rounded-xl">
                      {s.icon}
                    </div>
                    <h3 className="text-sm font-black text-[#2D2433] sm:text-2xl lg:text-3xl">
                      <Counter end={s.n} suffix="+" />
                    </h3>
                    <p className="mt-0 text-[8px] font-semibold uppercase tracking-tight text-[#6B6570] sm:text-xs">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  );
}