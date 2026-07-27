"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
  return (
<<<<<<< HEAD
    <section className="bg-white py-28">
      <div className="mx-auto w-[92%] max-w-7xl">

=======
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-[92%] max-w-7xl">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          className="overflow-hidden rounded-[40px] bg-[#FFF7FA] shadow-[0_30px_80px_rgba(45,36,51,0.08)]"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-10 lg:p-16">

=======
          className="overflow-hidden rounded-3xl sm:rounded-[40px] bg-[#FFF7FA] shadow-[0_30px_80px_rgba(45,36,51,0.08)]"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="p-6 sm:p-10 lg:p-16">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
                Featured Project
              </p>

<<<<<<< HEAD
              <h2 className="mt-5 text-5xl font-black leading-tight text-[#2D2433]">
                Jendela Finansial
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#6B6570]">
=======
              <h2 className="mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#2D2433]">
                Jendela Finansial
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 lg:leading-9 text-[#6B6570]">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                A complete branding project for an educational financial
                platform, including character design, social media assets,
                YouTube thumbnails, and visual identity.
              </p>

<<<<<<< HEAD
              <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D2433] shadow-sm">
                  Brand Identity
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D2433] shadow-sm">
                  Character Design
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2D2433] shadow-sm">
                  Social Media
                </span>

              </div>

              <Link
                href="/work/jendela-finansial"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#2D2433] px-7 py-4 text-white transition duration-300 hover:bg-pink-500"
              >
                View Case Study

                <ArrowRight size={20} />
              </Link>

=======
              <div className="mt-6 sm:mt-10 flex flex-wrap gap-2.5 sm:gap-3">
                <span className="rounded-full bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2D2433] shadow-xs">
                  Brand Identity
                </span>

                <span className="rounded-full bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2D2433] shadow-xs">
                  Character Design
                </span>

                <span className="rounded-full bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2D2433] shadow-xs">
                  Social Media
                </span>
              </div>

              <div className="mt-8 sm:mt-12">
                <Link
                  href="/work/jendela-finansial"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-[#2D2433] px-7 py-3.5 sm:py-4 text-sm font-semibold text-white transition duration-300 hover:bg-pink-500 active:scale-95"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
            </div>

            {/* Right Image */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="overflow-hidden"
            >
              <Image
                src="/portfolio/jf/cover.jpg"
                alt="Jendela Finansial"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </motion.div>
<<<<<<< HEAD

          </div>
        </motion.div>

=======
          </div>
        </motion.div>
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
      </div>
    </section>
  );
}