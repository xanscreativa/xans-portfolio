import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/xansstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dorotheaalexandra/" },
  { label: "Behance", href: "https://behance.net/dorothealexand" },
  { label: "YouTube", href: "https://youtube.com/@xans.creativa" },
];

const navLinks = [
  { label: "Work", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FB] to-[#FFFDFC] py-20 sm:py-24">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-pink-100/60 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-rose-100/60 blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* Navigation & Branding Row */}
        <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-black tracking-[0.25em] text-[#2D2433]">
              XANS
            </h3>
            <p className="mt-2 text-sm font-medium text-[#6B6570]">
              Graphic Designer &amp; Video Editor
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#2D2433]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition duration-200 hover:text-pink-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col gap-8 border-t border-pink-100/80 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">
            Let&apos;s Connect
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-pink-200 bg-white/80 px-5 py-2.5 text-xs font-semibold text-[#2D2433] shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="mt-10 flex flex-col gap-3 border-t border-pink-100/80 pt-8 text-xs font-medium text-[#8B8590] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} XANS Studio. All rights reserved.</p>
          
          <p className="flex items-center gap-1.5">
            <span>Designed &amp; Built with</span>
            <span className="text-pink-500">❤️</span>
            <span>by <strong className="font-bold text-[#2D2433]">XANS</strong> in Indonesia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}