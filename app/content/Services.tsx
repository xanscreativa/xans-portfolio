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
    <section className="bg-white py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-500">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#2D2433] md:text-5xl">
            Crafting Visuals That Matter
          </h2>
        </FadeUp>

        {/* Grid Card Simpel & Clean */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.05}>
              <a
                href={service.href}
                className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50/50 hover:shadow-md"
              >
                <span className="text-xl font-bold text-[#2D2433] transition-colors group-hover:text-pink-600">
                  {service.title}
                </span>

                {/* Lingkaran Panah Minimalis */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:translate-x-1">
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