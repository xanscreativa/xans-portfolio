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
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FB] to-[#FFFDFC] py-12 xs:py-16 sm:py-20 lg:py-24">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-60 w-60 rounded-full bg-pink-100/60 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-rose-100/60 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* Navigation & Branding Row */}
        <div className="flex flex-col items-center gap-6 text-center pb-8 xs:pb-10 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
            <h3 className="text-2xl font-black tracking-[0.2em] text-[#2D2433] xs:text-3xl xs:tracking-[0.25em]">
              XANS
            </h3>
            <p className="mt-1.5 text-xs font-medium text-[#6B6570] xs:text-sm">
              Graphic Designer &amp; Video Editor
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#2D2433] xs:gap-6 xs:text-sm lg:justify-start">
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
        <div className="flex flex-col items-center gap-6 border-t border-pink-100/80 pt-8 text-center xs:pt-10 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 xs:text-xs xs:tracking-[0.3em]">
            Let&apos;s Connect
          </p>

          {/* Social Buttons Grid: 2 kolom di mobile, berjejer ke samping di layar besar */}
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs xs:gap-3 sm:max-w-none sm:flex sm:flex-wrap sm:justify-start sm:w-auto">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-[11px] font-semibold text-[#2D2433] shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-md xs:px-5 xs:py-2.5 xs:text-xs"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="mt-8 flex flex-col items-center gap-2.5 border-t border-pink-100/80 pt-6 text-center text-[11px] font-medium text-[#8B8590] xs:mt-10 xs:pt-8 xs:text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} XANS Studio. All rights reserved.</p>

          <p className="flex items-center justify-center gap-1.5 sm:justify-end">
            <span>Designed &amp; Built with</span>
            <span className="text-pink-500">❤️</span>
            <span>
              by <strong className="font-bold text-[#2D2433]">XANS</strong> in
              Indonesia
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}