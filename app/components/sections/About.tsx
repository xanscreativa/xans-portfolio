"use client";

import Image from "next/image";
import FadeUp from "../animation/FadeUp";

const specialties = [
  "Brand Identity",
  "Social Media Design",
  "Motion Graphics",
  "Video Editing",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFDFC] py-16 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-pink-100/40 blur-[120px] sm:-left-52 sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-pink-100/40 blur-[120px] sm:right-[-180px] sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />

      <div className="relative mx-auto grid w-[92%] max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* LEFT COLUMN: Photo & Floating Experience Badge */}
        <div className="lg:col-span-5">
          <FadeUp>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[28px] bg-[#F9F4F2] p-2 shadow-[0_25px_60px_rgba(0,0,0,.06)] sm:rounded-[42px] sm:p-3">
                <Image
                  src="/hero/profile.png"
                  alt="Dorothea Alexandra Manuputty, S.Ds"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-[22px] object-cover sm:rounded-[34px]"
                  priority
                />
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -right-1 bottom-4 rounded-xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-md sm:-right-6 sm:bottom-10 sm:rounded-[28px] sm:px-7 sm:py-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.35em]">
                  EXPERIENCE
                </p>
                <h3 className="mt-0.5 text-2xl font-black text-[#2D2433] sm:mt-2 sm:text-5xl">
                  4+
                </h3>
                <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#6B6570] sm:mt-1 sm:text-sm sm:leading-normal">
                  Years Crafting <br className="hidden sm:block" />
                  Visual Stories
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT COLUMN: Bio & Details */}
        <div className="lg:col-span-7">
          <FadeUp delay={0.15}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
                GET TO KNOW ME
              </p>

              <h2 className="mt-2 text-2xl font-black leading-tight text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
                Dorothea Alexandra <br className="hidden sm:block" />
                Manuputty, <span className="text-pink-500">S.Ds</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#6B6570] sm:mt-6 sm:text-lg sm:leading-8">
                I&apos;m a Graphic Designer and Video Editor with experience creating visual content across branding, social media, motion graphics, and video production. I enjoy transforming ideas into clear, engaging, and visually compelling designs that communicate effectively and leave a lasting impression.
              </p>

              {/* INFO GRID */}
              <div className="mt-8 grid gap-5 border-t border-pink-100 pt-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:pt-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Based In
                  </p>
                  <h4 className="mt-1 text-lg font-bold text-[#2D2433] sm:mt-2 sm:text-2xl">
                    Pekanbaru, Indonesia
                  </h4>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Availability
                  </p>
                  <h4 className="mt-1 text-lg font-bold text-[#2D2433] sm:mt-2 sm:text-2xl">
                    Full-Time &amp; Freelance
                  </h4>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Specialties
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2 sm:mt-3 sm:gap-2.5">
                    {specialties.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-pink-100 bg-pink-50/80 px-3 py-1.5 text-[11px] font-semibold text-[#2D2433] transition-colors hover:bg-pink-100 hover:text-pink-600 sm:px-4 sm:py-2 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-8 sm:mt-10">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#E96A98] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#d85886] hover:shadow-xl sm:w-auto"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}