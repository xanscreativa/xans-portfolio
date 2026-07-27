import FadeUp from "@/app/components/animation/FadeUp";

const services = [
  {
    title: "Brand Identity",
    href: "/services/brand-identity",
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
  },
  {
    title: "Social Media",
    href: "/services/social-media",
  },
  {
    title: "Motion Design",
    href: "/services/motion-design",
  },
  {
    title: "Creative Direction",
    href: "/services/creative-direction",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-pink-100/60 bg-[#FFFDFB] pb-8 pt-10 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-pink-100/40 blur-[100px] sm:-left-52 sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-pink-100/40 blur-[100px] sm:right-[-180px] sm:h-[520px] sm:w-[520px] sm:blur-[180px]" />

      <div className="relative mx-auto w-[88%] max-w-7xl sm:w-[92%]">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              SERVICES
            </p>

            <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
              Crafting Visuals That Matter
            </h2>
          </div>
        </FadeUp>

        {/* Grid Card Ringkas & Presisi */}
        <div className="mt-5 grid gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.05}>
              <a
                href={service.href}
                className="group flex items-center justify-between rounded-xl border border-pink-100/80 bg-white px-3.5 py-2.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50/40 hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <span className="text-xs font-bold text-[#2D2433] transition-colors group-hover:text-pink-600 sm:text-xl">
                  {service.title}
                </span>

                {/* Lingkaran Panah Ringkas */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xs text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:translate-x-1 sm:h-10 sm:w-10 sm:text-base">
                  →
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}