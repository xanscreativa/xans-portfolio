"use client";

import FadeUp from "../animation/FadeUp";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding the client's goals, audience, and the problem that needs to be solved.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Collecting references, studying competitors, and exploring creative directions.",
  },
  {
    number: "03",
    title: "Concept",
    description:
      "Developing visual ideas, moodboards, sketches, and communication strategy.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Creating polished visuals using professional creative tools and design principles.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Gathering feedback, revising details, and ensuring every element works perfectly.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Preparing final assets for print, digital platforms, and long-term brand consistency.",
  },
];

export default function HowIWork() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F9] py-12 sm:py-20">
      <div className="relative mx-auto w-[88%] max-w-3xl sm:w-[92%]">
        <FadeUp>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              Creative Process
            </p>

            <h2 className="mt-1 text-xl font-black leading-snug text-[#2D2433] sm:mt-2 sm:text-4xl">
              How I Work
            </h2>

            <p className="mx-auto mt-1.5 max-w-lg text-xs leading-relaxed text-[#6B6570] sm:mt-3 sm:text-sm">
              Every project follows a structured creative workflow to ensure every design is meaningful, strategic, and visually impactful.
            </p>
          </div>
        </FadeUp>

        {/* Compact Vertical Process Flow (Uniform for Mobile & Desktop) */}
        <div className="mt-8 sm:mt-12 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-pink-200/80" />

          <div className="space-y-6 sm:space-y-8">
            {processSteps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.05}>
                <div className="relative flex items-start gap-4 sm:gap-6">
                  {/* Soft Pink Circle with Number */}
                  <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-pink-50/90 border border-pink-200/80 shadow-[0_4px_12px_rgba(236,72,153,0.1)] text-pink-500 font-black text-sm sm:text-lg">
                    {step.number}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white border border-pink-100 rounded-xl p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-pink-300 hover:shadow-sm group">
                    <h3 className="text-xs sm:text-base font-bold text-[#2D2433] group-hover:text-pink-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-[#6B6570]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}