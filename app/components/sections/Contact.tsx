"use client";

import { ArrowRight, Mail } from "lucide-react";
import FadeUp from "../animation/FadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
<<<<<<< HEAD
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
=======
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF8FB] to-white py-12 xs:py-16 sm:py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-[-180px] top-20 h-[300px] w-[300px] rounded-full bg-pink-200/30 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

      <div className="absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-pink-100/40 blur-[120px] sm:right-[-120px] sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />

      <div className="absolute left-1/2 top-24 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[120px] sm:h-[700px] sm:w-[700px] sm:blur-[180px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">

        <FadeUp delay={0.1}>

          <div className="mx-auto mt-4 max-w-5xl rounded-[24px] border border-pink-100 bg-white/70 p-6 shadow-[0_40px_90px_rgba(0,0,0,.08)] backdrop-blur-xl xs:rounded-[32px] xs:p-8 sm:mt-12 sm:p-10 md:rounded-[42px] md:p-14">

            <div className="flex flex-col items-center">

              <div className="flex items-center gap-2.5 rounded-full border border-pink-100 bg-pink-50 px-4 py-1.5 xs:px-5 xs:py-2">

                <span className="h-2 w-2 rounded-full bg-pink-500" />

                <span className="text-xs font-medium text-pink-600 xs:text-sm">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                  LET'S CONNECT
                </span>

              </div>

<<<<<<< HEAD
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
=======
              <h3 className="mt-6 text-center text-2xl font-black leading-tight text-[#2D2433] xs:text-3xl sm:mt-8 sm:text-4xl md:text-5xl">
                Interested in
                <br className="hidden xs:block" />{" "}
                Working Together?
              </h3>

              <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#6B6570] xs:text-base sm:mt-6 sm:text-lg sm:leading-8 md:leading-9">
                I'm currently open to full-time opportunities, freelance projects,
                <br className="hidden sm:block" />
                {" "}and creative collaborations.
              </p>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 xs:w-auto xs:flex-row xs:gap-5 sm:mt-12">

                <a
                  href="mailto:xans.creativa@gmail.com"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl xs:w-auto sm:px-8 sm:py-4 sm:text-base"
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                >
                  <Mail size={18} />

                  Email Me

                  <ArrowRight size={18} />

                </a>

                <a
                  href="https://instagram.com/xans.creativa"
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white px-8 py-4 font-semibold text-[#2D2433] transition duration-300 hover:bg-pink-50"
                >
<span className="text-pink-500 font-bold text-lg">◎</span>

@xans.creativa
=======
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-pink-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#2D2433] transition duration-300 hover:bg-pink-50 xs:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <span className="text-lg font-bold text-pink-500">◎</span>

                  @xans.creativa
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)

                </a>

              </div>

            </div>

          </div>

        </FadeUp>

      </div>
    </section>
  );
}