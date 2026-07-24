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
    <section id="skills" className="bg-[#FFFDFB] py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <p className="text-center uppercase tracking-[0.4em] text-pink-500">
          Skills & Software
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
          Tools I Use Everyday
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[#6B6570]">
          Professional software and creative skills I use to build visual
          identities, marketing materials, illustrations, and digital
          experiences.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={skill.isFullWidth ? "md:col-span-2" : ""}
            >
              <FadeUp delay={index * 0.08}>
                <div className="rounded-4xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#2D2433]">
                    {skill.category}
                  </h3>

                  {/* Jika Creative Skills (FullWidth), bagi isi tools menjadi 2 kolom */}
                  <div
                    className={`mt-6 gap-3 ${
                      skill.isFullWidth
                        ? "grid grid-cols-1 md:grid-cols-2"
                        : "flex flex-col"
                    }`}
                  >
                    {skill.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center justify-between rounded-2xl bg-pink-50/50 p-3.5 border border-pink-100/60"
                      >
                        <span className="text-sm font-semibold text-[#2D2433]">
                          {tool.name}
                        </span>

                        {/* Indikator 5 Lingkaran */}
                        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-pink-100 shadow-sm">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`h-2.5 w-2.5 rounded-full transition-colors ${
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