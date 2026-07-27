"use client";

import FadeUp from "../animation/FadeUp";

interface ToolItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  tools: ToolItem[];
  isFullWidth?: boolean;
}

const skills: SkillCategory[] = [
  {
    category: "Graphic Design",
    tools: [
      { name: "Adobe Illustrator", level: 5 },
      { name: "Adobe Photoshop", level: 5 },
      { name: "Canva", level: 5 },
    ],
  },
  {
    category: "Video Editing",
    tools: [
      { name: "Adobe Premiere Pro", level: 4 },
      { name: "Cap Cut", level: 5 },
    ],
  },
  {
    category: "UI / UX",
    tools: [
      { name: "Figma", level: 4 },
      { name: "Visual Studio Code", level: 4 },
    ],
  },
  {
    category: "Photography",
    tools: [
      { name: "Mirrorless & DSLR Camera", level: 5 },
      { name: "Adobe Lightroom", level: 4 },
    ],
  },
  {
    category: "Creative Skills",
    isFullWidth: true,
    tools: [
      { name: "Brand Identity", level: 5 },
      { name: "Layout Design", level: 5 },
      { name: "Packaging Design", level: 4 },
      { name: "Illustration", level: 4 },
      { name: "Photography", level: 4 },
      { name: "Copywriting", level: 4 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-pink-100/60 bg-[#FFFDFB] pb-8 pt-10 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none hidden absolute -left-32 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-pink-100/40 blur-[100px] sm:-left-52 sm:block sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />
      <div className="pointer-events-none hidden absolute -right-32 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-pink-100/40 blur-[100px] sm:right-[-180px] sm:block sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />

      <div className="relative mx-auto w-[88%] max-w-7xl sm:w-[92%]">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              SKILLS &amp; SOFTWARE
            </p>

            <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
              Tools I Use Everyday
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base sm:leading-7">
              Professional software and creative skills I use to build visual
              identities, marketing materials, illustrations, and digital
              experiences.
            </p>
          </div>
        </FadeUp>

        {/* SKILLS CARDS GRID */}
        <div className="mt-5 grid gap-3 sm:mt-12 sm:gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={skill.isFullWidth ? "md:col-span-2" : ""}
            >
              <FadeUp delay={index * 0.08}>
                {/* Outer Card: p-3 di mobile, p-8 di desktop */}
                <div className="rounded-2xl border border-pink-100 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl sm:rounded-4xl sm:p-8">
                  {/* Category Title: text-sm font-bold */}
                  <h3 className="text-sm font-bold text-[#2D2433] sm:text-2xl">
                    {skill.category}
                  </h3>

                  <div
                    className={`mt-2 sm:mt-6 gap-1.5 sm:gap-3 ${
                      skill.isFullWidth
                        ? "grid grid-cols-1 md:grid-cols-2"
                        : "flex flex-col"
                    }`}
                  >
                    {skill.tools.map((tool) => (
                      /* Tool Row: py-1.5 px-2.5 di mobile */
                      <div
                        key={tool.name}
                        className="flex items-center justify-between gap-2 rounded-lg border border-pink-100/60 bg-pink-50/40 px-2.5 py-1.5 sm:rounded-2xl sm:p-3.5"
                      >
                        <span className="text-[11px] font-semibold text-[#2D2433] sm:text-sm">
                          {tool.name}
                        </span>

                        {/* Indikator Dots: dikecilkan ke h-1.5 w-1.5 di mobile */}
                        <div className="flex shrink-0 items-center gap-1 rounded-full border border-pink-100 bg-white px-1.5 py-0.5 shadow-2xs sm:gap-1.5 sm:px-3 sm:py-1.5">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`h-1.5 w-1.5 rounded-full transition-colors sm:h-2.5 sm:w-2.5 ${
                                dot <= tool.level
                                  ? "bg-pink-500"
                                  : "bg-pink-100"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}