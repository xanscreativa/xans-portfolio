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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (pathname === "/") {
        e.preventDefault();
        window.history.pushState(null, "", `/#${targetId}`);

        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        e.preventDefault();
        router.push(`/#${targetId}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-pink-100/60 shadow-[0_4px_20px_rgba(229,135,176,0.08)] py-3"
          : "bg-white/80 backdrop-blur-sm py-4 lg:bg-transparent lg:py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-none flex-row items-center justify-between px-4 sm:px-6 lg:w-[92%] lg:max-w-7xl lg:px-0">
        {/* Single Logo Component */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 z-10"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-xl sm:text-2xl font-black tracking-widest text-[#2D2433] transition-colors group-hover:text-pink-500">
            XANS
          </span>
          <span className="h-2 w-2 rounded-full bg-pink-500 inline-block" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-pink-100/80 bg-white/70 px-4 py-1.5 shadow-xs backdrop-blur-md lg:flex">
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
        <div className="hidden lg:block">
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
          className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-50 text-pink-600 lg:hidden shadow-xs active:scale-95 transition-transform z-10"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[61px] bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-pink-100/50 bg-white/95 p-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col items-stretch gap-3 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between rounded-2xl px-6 py-4 text-base font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-pink-50/80 text-pink-600"
                      : "text-[#2D2433] hover:bg-gray-50 active:bg-pink-50/50"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-pink-500" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 pb-4">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="flex w-full items-center justify-center rounded-full bg-pink-500 py-4 text-center text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_30px_rgba(236,72,153,0.25)] active:scale-[0.98] transition-transform"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}