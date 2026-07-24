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
    <section className="bg-[#FFF8F9] py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <FadeUp>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
            Creative Process
          </p>

          <h2 className="mt-4 text-center text-5xl font-black text-[#2D2433]">
            How I Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6B6570]">
            Every project follows a structured creative workflow to ensure every
            design is meaningful, strategic, and visually impactful.
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-[32px] border border-pink-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl">
                <div>
                  {/* Angka dengan Warna Pink Vibrant agar tidak pucat */}
                  <span className="text-5xl font-extrabold tracking-tight text-pink-500 transition-colors duration-300 group-hover:text-pink-600">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-2xl font-bold text-[#2D2433]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#6B6570]">
                    {step.description}
                  </p>
                </div>

                {/* Aksesoris Garis Dekoratif Kecil di Bawah Card */}
                <div className="mt-8 h-1 w-12 rounded-full bg-pink-100 transition-all duration-500 group-hover:w-full group-hover:bg-pink-400" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}