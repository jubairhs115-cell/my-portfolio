"use client";

import Link from "next/link";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/#home"
              className="text-2xl font-bold tracking-tight text-white hover:opacity-90 inline-block"
            >
              Jubair<span className="text-[#C2F800]">.</span>
            </Link>
            <p className="text-sm font-medium text-[#C2F800]">
              Aspiring Full Stack Web Developer
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Undergraduate student at Islamic University, Bangladesh. Committed to writing clean code, designing thoughtful user experiences, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-[#C2F800] transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Connect
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/jubairhs115-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#C2F800]/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jubairhossain18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#C2F800]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="mailto:jubairhs115@gmail.com"
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#C2F800]/40 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-6 md:mt-0">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-[#C2F800] px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp size={14} className="text-[#C2F800]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Jubair Hossain. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
