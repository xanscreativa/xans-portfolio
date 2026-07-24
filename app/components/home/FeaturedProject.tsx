"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] bg-[#FFF7FA] shadow-[0_30px_80px_rgba(45,36,51,0.08)]"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-10 lg:p-16">

              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
                Featured Project
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight text-[#2D2433]">
                Jendela Finansial
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#6B6570]">
                A complete branding project for an educational financial
                platform, including character design, social media assets,
                YouTube thumbnails, and visual identity.
              </p>

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

          </div>
        </motion.div>

      </div>
    </section>
  );
}