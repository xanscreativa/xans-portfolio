"use client";

import { ArrowRight, Mail } from "lucide-react";
import FadeUp from "../animation/FadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-white py-12 sm:py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none hidden absolute left-[-180px] top-20 h-[300px] w-[300px] rounded-full bg-pink-200/30 blur-[100px] sm:block sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
      <div className="pointer-events-none hidden absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-pink-100/40 blur-[120px] sm:right-[-120px] sm:block sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />
      <div className="pointer-events-none hidden absolute left-1/2 top-24 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[120px] sm:block sm:h-[700px] sm:w-[700px] sm:blur-[180px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <FadeUp delay={0.1}>
          <div className="mx-auto mt-6 max-w-5xl rounded-[24px] border border-pink-100 bg-white/70 px-6 py-10 shadow-[0_40px_90px_rgba(0,0,0,.08)] backdrop-blur-xl sm:mt-10 sm:px-10 sm:py-14 md:rounded-[42px] md:px-14 md:py-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2.5 rounded-full border border-pink-100 bg-pink-50 px-4 py-1.5 sm:px-5 sm:py-2">
                <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs font-medium text-pink-600 sm:text-sm">
                  LET&apos;S CONNECT
                </span>
              </div>

              <h3 className="mt-4 text-center text-2xl font-black leading-tight text-[#2D2433] sm:mt-6 sm:text-4xl md:text-5xl">
                Interested in
                <br className="hidden sm:block" /> Working Together?
              </h3>

              <p className="mt-3 max-w-2xl text-center text-xs leading-relaxed text-[#6B6570] sm:mt-5 sm:text-lg sm:leading-8 md:leading-9">
                I&apos;m currently open to full-time opportunities, freelance projects, and creative collaborations.
              </p>

              <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-5">
                <a
                  href="mailto:xans.creativa@gmail.com"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-pink-500 px-6 py-3 text-xs font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <Mail size={18} />
                  Email Me
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://instagram.com/xans.creativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-pink-200 bg-white px-6 py-3 text-xs font-semibold text-[#2D2433] transition duration-300 hover:bg-pink-50 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <span className="text-lg font-bold text-pink-500">◎</span>
                  @xans.creativa
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}