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
    title: "Illustration",
    href: "/services/illustration",
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
<<<<<<< HEAD
    <section className="bg-white py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#2D2433] md:text-5xl">
=======
    <section className="bg-white py-12 sm:py-18 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <FadeUp>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.4em]">
            Services
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#2D2433] xs:text-3xl sm:mt-3 sm:text-4xl md:text-5xl">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
            Crafting Visuals That Matter
          </h2>
        </FadeUp>

        {/* Grid Card Simpel & Clean */}
<<<<<<< HEAD
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
=======
        <div className="mt-8 grid gap-3.5 xs:gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.05}>
              <a
                href={service.href}
<<<<<<< HEAD
                className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50/50 hover:shadow-md"
              >
                <span className="text-xl font-bold text-[#2D2433] transition-colors group-hover:text-pink-600">
=======
                className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50/50 hover:shadow-md xs:p-5 sm:p-6"
              >
                <span className="text-base font-bold text-[#2D2433] transition-colors group-hover:text-pink-600 xs:text-lg sm:text-xl">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
                  {service.title}
                </span>

                {/* Lingkaran Panah Minimalis */}
<<<<<<< HEAD
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:translate-x-1">
=======
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-50 text-sm text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:translate-x-1 xs:h-10 xs:w-10 xs:text-base">
>>>>>>> 213c202 (feat: complete mobile responsive optimization for all sections)
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