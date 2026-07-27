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
    <section className="relative overflow-hidden bg-[#FFF8F9] pb-8 pt-10 sm:py-24 lg:py-32">
      <div className="relative mx-auto w-[88%] max-w-7xl sm:w-[92%]">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              Creative Process
            </p>

            <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
              How I Work
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base sm:leading-relaxed">
              Every project follows a structured creative workflow to ensure every
              design is meaningful, strategic, and visually impactful.
            </p>
          </div>
        </FadeUp>

        {/* Grid Card Ringkas & Presisi */}
        <div className="mt-5 grid gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.05}>
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-pink-100 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md sm:rounded-2xl sm:p-6">
                <div>
                  <span className="text-xl font-black tracking-tight text-pink-500 transition-colors duration-300 group-hover:text-pink-600 sm:text-3xl">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-sm font-bold text-[#2D2433] sm:mt-4 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-relaxed text-[#6B6570] sm:mt-2 sm:text-sm sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Aksesoris Garis Dekoratif Kecil di Bawah Card */}
                <div className="mt-4 h-0.5 w-8 rounded-full bg-pink-100 transition-all duration-300 group-hover:w-full group-hover:bg-pink-400 sm:mt-6 sm:h-1 sm:w-12" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}