"use client";

import { ArrowRight, Mail } from "lucide-react";
import FadeUp from "../animation/FadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-white py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-[160px]" />

      <div className="absolute right-[-120px] bottom-0 h-[520px] w-[520px] rounded-full bg-pink-100/40 blur-[180px]" />

      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-pink-200/20 blur-[180px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">

        <FadeUp>

          <div className="text-center">

          </div>

        </FadeUp>

        <FadeUp delay={0.2}>

          <div className="mx-auto mt-20 max-w-5xl rounded-[42px] border border-pink-100 bg-white/70 p-14 backdrop-blur-xl shadow-[0_40px_90px_rgba(0,0,0,.08)]">

            <div className="flex flex-col items-center">

              <div className="flex items-center gap-3 rounded-full border border-pink-100 bg-pink-50 px-5 py-2">

                <span className="h-2 w-2 rounded-full bg-pink-500" />

                <span className="text-sm font-medium text-pink-600">
                  LET'S CONNECT
                </span>

              </div>

              <h3 className="mt-8 text-center text-4xl font-black leading-tight text-[#2D2433] md:text-5xl">
                Interested in
                <br />
                Working Together?
              </h3>

              <p className="mt-6 max-w-2xl text-center text-lg leading-9 text-[#6B6570]">
I'm currently open to full-time opportunities, freelance projects,
<br />
and creative collaborations.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <a
                  href="mailto:xans.creativa@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Mail size={18} />

                  Email Me

                  <ArrowRight size={18} />

                </a>

                <a
                  href="https://instagram.com/xans.creativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white px-8 py-4 font-semibold text-[#2D2433] transition duration-300 hover:bg-pink-50"
                >
<span className="text-pink-500 font-bold text-lg">◎</span>

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