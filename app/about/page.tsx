import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/app/components/ui/Button";
import FadeUp from "@/app/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "About | XANS CREATIVA",
  description:
    "Xandra is a Graphic Designer based in Indonesia, creating editorial branding, motion, and visual storytelling with clarity and purpose.",
};

const philosophy = [
  {
    title: "Clarity",
    description: "Every design should communicate clearly before it decorates.",
  },
  {
    title: "Purpose",
    description: "Every visual decision should have meaning and intention.",
  },
  {
    title: "Consistency",
    description: "Strong visual systems create memorable brands.",
  },
  {
    title: "Storytelling",
    description: "Meaningful visuals build emotional connections.",
  },
];

const experienceBlocks = [
  {
    title: "Freelance Graphic Designer",
    timeline: "2023 — Present",
    description:
      "Creating branding, campaign visuals, motion graphics, video editing, social media content, and digital visual communication for brands, organizations, and communities.",
  },
  {
    title: "Media Designer",
    subtitle: "Church Ministry",
    timeline: "2022 — Present",
    description:
      "Designing church media, educational visuals, event branding, Bible illustrations, social media content, and digital communication materials.",
  },
];

const skills = {
  Design: [
    "Brand Identity",
    "Campaign Design",
    "Motion Graphics",
    "Video Editing",
    "Illustration",
    "Editorial Design",
    "Visual Storytelling",
    "Social Media Design",
  ],
  Software: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Figma",
    "CapCut",
    "Canva",
  ],
  "Creative Workflow": [
    "AI-assisted Design",
    "Prompt Engineering",
    "Creative Research",
    "Visual Concept Development",
    "Content Planning",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDFC] text-[#2D2433]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28">
        <div className="absolute -left-16 top-16 h-80 w-80 rounded-full bg-pink-100 blur-[120px] opacity-20" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pink-200/20 blur-[140px] opacity-30" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
            
            {/* Profile Image (Urutan 1 di Mobile, Urutan 2/Kanan di Desktop) */}
            <div className="order-1 w-full lg:order-2 lg:col-span-5 mb-8 lg:mb-0">
              <FadeUp>
                <div className="relative overflow-hidden rounded-[32px] border border-pink-100/80 bg-white p-3 shadow-[0_20px_60px_rgba(229,135,176,.1)]">
                  <Image
                    src="/hero/profile.png"
                    alt="Portrait of Xandra"
                    width={800}
                    height={950}
                    className="h-[380px] w-full rounded-[26px] object-cover object-top sm:h-[480px] lg:h-[540px]"
                    priority
                  />
                </div>
              </FadeUp>
            </div>

            {/* Hero Text & Actions (Urutan 2 di Mobile, Urutan 1/Kiri di Desktop) */}
            <div className="order-2 w-full lg:order-1 lg:col-span-7">
              <FadeUp>
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                    ABOUT ME
                  </p>
                  
                  <h1 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">
                    Designing Visual Stories With Purpose.
                  </h1>
                  
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-[#6B6570] sm:text-lg">
                    <p>
                      I&apos;m Xandra, a Graphic Designer based in Indonesia with a Bachelor&apos;s degree in Visual Communication Design from Satya Wacana Christian University. I specialize in branding, campaign design, motion graphics, video editing, and visual storytelling, creating thoughtful visual experiences that help brands and organizations communicate with clarity, purpose, and lasting impact.
                    </p>
                    <p>
                      I&apos;m passionate about continuous learning and always exploring new creative workflows. I actively experiment with AI-powered creative tools to improve productivity, streamline design processes, and discover innovative ways to solve visual communication challenges.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href="/">View Portfolio</Button>
                    <Button href="/#contact" variant="secondary">
                      Let&apos;s Connect
                    </Button>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Stats & Experience */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Stats Side */}
            <div className="lg:col-span-5">
              <FadeUp>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                    Impact
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-[#2D2433]">
                    Professional Stats
                  </h3>

                  <div className="mt-8 grid grid-cols-2 gap-6">
                    {[
                      { value: "50+", label: "Completed Projects" },
                      { value: "8+", label: "Brands & Organizations" },
                      { value: "4+", label: "Years Experience" },
                      { value: "200+", label: "Creative Assets" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[28px] border border-pink-100/80 bg-white p-6 shadow-[0_20px_50px_rgba(229,135,176,.06)]"
                      >
                        <p className="text-4xl font-black tracking-tight text-[#2D2433] sm:text-5xl">
                          {item.value}
                        </p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider leading-relaxed text-[#6B6570]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Experience Side */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                    Journey
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-[#2D2433]">
                    Work Experience
                  </h3>

                  <div className="mt-8 rounded-[36px] border border-pink-100/80 bg-white p-8 sm:p-10 shadow-[0_26px_80px_rgba(229,135,176,.08)]">
                    <div className="space-y-10">
                      {experienceBlocks.map((block) => (
                        <div key={block.title} className="relative pl-6 border-l-2 border-pink-200/80">
                          <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-pink-500 ring-4 ring-white" />
                          
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h4 className="text-lg font-black text-[#2D2433]">
                              {block.title}
                            </h4>
                            <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-500">
                              {block.timeline}
                            </span>
                          </div>

                          {block.subtitle && (
                            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-pink-400">
                              {block.subtitle}
                            </p>
                          )}

                          <p className="mt-3 text-sm leading-relaxed text-[#6B6570]">
                            {block.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="bg-[#FFF8FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Education Side */}
            <div className="lg:col-span-5">
              <FadeUp>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                    Education
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-[#2D2433]">
                    Academic Background
                  </h3>

                  <div className="mt-8 rounded-[32px] border border-pink-100/80 bg-white p-8 shadow-[0_20px_50px_rgba(229,135,176,.08)]">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-xl font-bold text-pink-500">
                        🎓
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-pink-500">
                          Bachelor Degree
                        </span>
                        <h4 className="text-lg font-black text-[#2D2433] leading-snug">
                          Visual Communication Design
                        </h4>
                      </div>
                    </div>

                    <hr className="my-6 border-pink-100/60" />

                    <p className="text-base font-bold text-[#2D2433]">
                      Satya Wacana Christian University
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-[#6B6570]">
                      Salatiga, Indonesia
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Skills Side */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                    Capabilities
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-[#2D2433]">
                    Skills & Expertise
                  </h3>

                  <div className="mt-8 grid gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                      <div
                        key={category}
                        className="rounded-[28px] border border-pink-100/80 bg-white p-6 shadow-[0_20px_50px_rgba(229,135,176,.06)]"
                      >
                        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-pink-500">
                          {category}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-pink-50/70 px-4 py-2 text-sm font-medium text-[#2D2433] border border-pink-100/50 transition duration-200 hover:bg-pink-100 hover:text-pink-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="relative overflow-hidden bg-[#FFFDFC] py-20 sm:py-24 lg:py-28">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/40 blur-[130px]" />

        <div className="mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
                  DESIGN PHILOSOPHY
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#2D2433] sm:text-4xl lg:text-5xl lg:leading-tight">
                  Four values that shape the work.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-[#6B6570] sm:text-lg">
                  The studio approach is not only about strong visuals, but a calm, meaningful process that makes every project feel intentional and elevated.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col justify-between rounded-[28px] border border-pink-100/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-300 hover:shadow-[0_20px_40px_rgba(229,135,176,.15)] shadow-[0_10px_30px_rgba(229,135,176,.06)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-pink-50 pb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
                        {item.title}
                      </span>
                      <span className="text-xs font-black text-pink-200 transition-colors duration-300 group-hover:text-pink-400">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-[#6B6570] sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 h-1 w-8 rounded-full bg-pink-100 transition-all duration-300 group-hover:w-full group-hover:bg-pink-400" />
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect CTA */}
      <section className="relative overflow-hidden bg-[#FFF8FA] py-20 sm:py-24 lg:py-28">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <FadeUp>
            <div className="rounded-[40px] border border-pink-100/80 bg-white p-12 text-center shadow-[0_30px_70px_rgba(229,135,176,.12)] md:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.45em] text-pink-500">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                Let&apos;s Connect
              </div>
              
              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-[#2D2433] sm:text-4xl md:text-5xl">
                Interested in Working Together?
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6570]">
                I&apos;m currently open to full-time opportunities, freelance projects, and creative collaborations.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/#contact">Let&apos;s Connect</Button>
                <Button href="/" variant="secondary">View Portfolio</Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}