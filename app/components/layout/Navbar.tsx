"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Work", href: "/#portfolio" },
  { name: "Films", href: "/#films" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);

    // Jika target adalah anchor di halaman utama
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (pathname === "/") {
        // Jika sudah di halaman utama, scroll halus & update URL dengan benar
        e.preventDefault();
        window.history.pushState(null, "", `/#${targetId}`);
        
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Jika sedang di halaman lain (misal /about), pindah ke homepage lalu scroll
        e.preventDefault();
        router.push(`/#${targetId}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-pink-100/60 py-3 shadow-[0_4px_20px_rgba(229,135,176,0.05)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-xl font-black tracking-widest text-[#2D2433] transition-colors group-hover:text-pink-500">
            XANS
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-pink-100/80 bg-white/70 px-4 py-1.5 shadow-xs backdrop-blur-md md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-pink-500"
                    : "text-[#6B6570] hover:text-[#2D2433]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-pink-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(236,72,153,0.25)] transition-all duration-300 hover:bg-pink-600 hover:shadow-[0_12px_25px_rgba(236,72,153,0.35)] hover:-translate-y-0.5"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-600 md:hidden"
          aria-label="Toggle Menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-pink-100 bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold uppercase tracking-wider text-[#2D2433] hover:text-pink-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="mt-2 text-center rounded-full bg-pink-500 py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}