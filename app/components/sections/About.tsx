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
      className="relative overflow-hidden border-t border-pink-100/60 bg-[#FFFDFC] py-10 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none hidden absolute -left-32 top-0 h-[250px] w-[250px] rounded-full bg-pink-100/40 blur-[100px] sm:-left-52 sm:block sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />
      <div className="pointer-events-none hidden absolute -right-32 bottom-0 h-[250px] w-[250px] rounded-full bg-pink-100/40 blur-[100px] sm:right-[-180px] sm:block sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />

      <div className="relative mx-auto grid w-[88%] max-w-7xl items-center gap-8 sm:w-[92%] sm:gap-10 lg:grid-cols-12 lg:gap-16">
        {/* LEFT COLUMN: Photo & Floating Experience Badge */}
        <div className="lg:col-span-5">
          <FadeUp>
            <div className="relative mx-auto max-w-[260px] sm:max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[20px] bg-[#F9F4F2] p-2 shadow-[0_10px_30px_rgba(0,0,0,.04)] sm:rounded-[42px] sm:p-3 sm:shadow-[0_25px_60px_rgba(0,0,0,.06)]">
                <Image
                  src="/hero/profile.png"
                  alt="Dorothea Alexandra Manuputty, S.Ds"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-[16px] object-cover sm:rounded-[34px]"
                  priority
                />
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-3 -right-2 rounded-xl border border-white/90 bg-white/95 p-2.5 shadow-md backdrop-blur-md sm:-right-6 sm:bottom-10 sm:rounded-[28px] sm:px-7 sm:py-6 sm:shadow-xl">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-pink-500 sm:text-xs sm:tracking-[0.35em]">
                  EXPERIENCE
                </p>
                <h3 className="mt-0.5 text-lg font-black text-[#2D2433] sm:mt-2 sm:text-5xl">
                  4+
                </h3>
                <p className="mt-0.5 text-[8px] font-medium leading-tight text-[#6B6570] sm:mt-1 sm:text-sm sm:leading-normal">
                  Years Crafting <br className="hidden sm:block" />
                  Visual Stories
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT COLUMN: Bio & Details */}
        <div className="mt-2 lg:col-span-7 lg:mt-0">
          <FadeUp delay={0.15}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
                GET TO KNOW ME
              </p>

              <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
                Dorothea Alexandra <br />
                Manuputty, <span className="text-pink-500">S.Ds</span>
              </h2>

              {/* Deskripsi Paragraf dengan text-justify */}
              <p className="mt-2 text-justify text-[11px] leading-relaxed text-[#6B6570] sm:mt-6 sm:text-lg sm:leading-8">
                I&apos;m a Graphic Designer and Video Editor with experience creating visual content across branding, social media, motion graphics, and video production. I enjoy transforming ideas into clear, engaging, and visually compelling designs that communicate effectively and leave a lasting impression.
              </p>

              {/* INFO GRID */}
              <div className="mt-5 grid gap-4 border-t border-pink-100 pt-4 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:pt-8">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Based In
                  </p>
                  <h4 className="mt-0.5 text-sm font-bold text-[#2D2433] sm:mt-2 sm:text-2xl">
                    Pekanbaru, Indonesia
                  </h4>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Availability
                  </p>
                  <h4 className="mt-0.5 text-sm font-bold text-[#2D2433] sm:mt-2 sm:text-2xl">
                    Full-Time &amp; Freelance
                  </h4>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-400 sm:text-xs sm:tracking-[0.3em]">
                    Specialties
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
                    {specialties.map((item) => (
                      <span
                        key={item}
                        className="flex items-center justify-center rounded-full border border-pink-100 bg-pink-50/80 px-2.5 py-1.5 text-center text-[10px] font-semibold text-[#2D2433] transition-colors hover:bg-pink-100 hover:text-pink-600 sm:w-auto sm:px-4 sm:py-2 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-5 sm:mt-10">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#E96A98] px-6 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#d85886] hover:shadow-xl sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
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