"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (pathname === "/") {
        const sections = ["home", "about", "skills", "education", "experience", "projects", "contact"];
        const scrollPosition = window.scrollY + 180;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
          : "bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#home"
          className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2F800] rounded px-1"
        >
          Jubair<span className="text-[#C2F800]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "");
            const isActive = pathname === "/" && activeSection === sectionId;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#C2F800] bg-white/[0.06]"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#C2F800] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA link in Navbar */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="text-xs font-semibold uppercase tracking-wider text-black bg-[#C2F800] hover:bg-[#b4e600] px-4 py-2 rounded-full transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg border border-white/10 bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#C2F800]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="container-custom py-4 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = pathname === "/" && activeSection === sectionId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#C2F800] bg-white/[0.08] font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C2F800]" />}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="w-full text-center block text-xs font-semibold uppercase tracking-wider text-black bg-[#C2F800] hover:bg-[#b4e600] py-2.5 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
