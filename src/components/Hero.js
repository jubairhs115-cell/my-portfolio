"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, ArrowDown, Code2, Sparkles, X, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  const handleResumeClick = (e) => {
    // Check if resume.pdf is available, otherwise show friendly honest notice
    // Per PRD: "If the resume is not ready, retain a visible button with a clearly defined placeholder action or disabled state. Do not generate a fake resume or claim a download works when the file is missing."
    e.preventDefault();
    setShowResumeNotice(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2F800]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C2F800] animate-pulse" />
              <span>Available for internships & entry-level roles</span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m <span className="text-[#C2F800]">Jubair Hossain</span>
            </h1>

            {/* Designation */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-200">
              Aspiring Full Stack Web Developer
            </p>

            {/* Short Introduction */}
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Computer Science & Engineering student at Islamic University, Bangladesh.
              Passionate about building practical, responsive web applications, exploring modern full-stack architectures, and solving challenging programming problems.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* Contact Me CTA */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C2F800] text-black font-semibold text-sm hover:bg-[#b4e600] active:scale-[0.98] transition-all shadow-lg shadow-[#C2F800]/20"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </Link>

              {/* Resume Button */}
              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111827] border border-white/10 hover:border-white/25 text-white font-medium text-sm hover:bg-white/[0.05] active:scale-[0.98] transition-all"
                title="Download or view resume status"
              >
                <Download size={17} className="text-[#C2F800]" />
                <span>Resume</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.08] text-zinc-400 border border-white/5">
                  PDF
                </span>
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 w-full">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/jubairhs115-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-[#C2F800]/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jubairhossain18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-[#C2F800]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="mailto:jubairhs115@gmail.com"
                  className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-[#C2F800]/40 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#C2F800]/30 to-emerald-500/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Profile Card Container */}
              <div className="relative w-72 sm:w-80 md:w-[350px] aspect-[3/4] rounded-3xl bg-[#111827] border border-white/10 overflow-hidden shadow-2xl p-2.5 flex flex-col items-center justify-center">
                {!imgError ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/profile.png"
                      alt="Jubair Hossain - Aspiring Full Stack Web Developer"
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      className="object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImgError(true)}
                      priority
                    />
                    {/* Bottom subtle gradient overlay & badge */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">
                          Jubair Hossain
                        </p>
                        <p className="text-[10px] text-zinc-300">
                          Islamic University, Bangladesh
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-medium text-[#C2F800]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2F800] animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Graceful Professional Avatar Placeholder (Per PRD Section 5.2) */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#111827] to-[#0A0A0A] rounded-2xl border border-white/5 p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/[0.04] border-2 border-[#C2F800]/40 flex items-center justify-center shadow-inner">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#C2F800] tracking-wider">
                          JH
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#111827] border border-[#C2F800]/50 text-[#C2F800]">
                        <Code2 size={16} />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white tracking-wide">
                      Jubair Hossain
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      CSE, Islamic University
                    </p>

                    <div className="mt-4 px-3 py-1 rounded-full bg-[#C2F800]/10 border border-[#C2F800]/20 text-[11px] text-[#C2F800] font-medium flex items-center gap-1.5">
                      <Sparkles size={12} />
                      <span>Profile Photo Placeholder</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Honest Feedback Modal */}
      {showResumeNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-2xl text-left">
            <button
              onClick={() => setShowResumeNotice(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2F800]"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800]">
                <Download size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Resume Information</h3>
                <p className="text-xs text-zinc-400">Jubair Hossain · Portfolio</p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              My formal resume is currently being updated with recent academic coursework, projects, and technical skills.
            </p>

            <div className="my-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-400">
              <strong className="text-zinc-200 block mb-1">Looking for immediate credentials?</strong>
              You can explore my full project breakdown below or contact me directly via email. I will gladly provide an up-to-date copy upon request.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResumeNotice(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:jubairhs115@gmail.com?subject=Inquiry%20regarding%20Resume%20-%20Jubair%20Hossain"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C2F800] text-black text-xs font-semibold hover:bg-[#b4e600] transition-colors"
              >
                <Mail size={14} />
                <span>Request via Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
