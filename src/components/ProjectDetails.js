"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Layers,
  Dumbbell,
  BookOpen,
  KeyRound,
  Info,
  Images,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetails({ project }) {
  if (!project) return null;

  const getProjectIcon = (id) => {
    switch (id) {
      case "fitlog":
        return <Dumbbell size={32} className="text-[#C2F800]" />;
      case "library-management":
        return <BookOpen size={32} className="text-[#C2F800]" />;
      case "authentication":
        return <KeyRound size={32} className="text-[#C2F800]" />;
      default:
        return <Layers size={32} className="text-[#C2F800]" />;
    }
  };

  return (
    <article className="min-h-screen pt-28 pb-20 bg-[#0A0A0A]">
      <div className="container-custom">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-[#C2F800] transition-colors py-1 focus:outline-none"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="max-w-4xl mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C2F800]/10 border border-[#C2F800]/25 text-[#C2F800]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-zinc-300">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Links Bar */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold border border-white/15 transition-all shadow"
              >
                <FaGithub size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={13} className="text-zinc-400" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400">
                <FaGithub size={16} />
                <span>GitHub Repository: Private / Pending Publication</span>
              </div>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2F800] text-black text-xs font-semibold hover:bg-[#b4e600] transition-all shadow-lg shadow-[#C2F800]/20"
              >
                <span>Live Preview</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400">
                <Info size={15} className="text-[#C2F800]" />
                <span>Live Deployment: In Progress / To Be Updated</span>
              </div>
            )}
          </div>
        </header>

        {/* Project Visual / Screenshot Banner */}
        <section className="mb-14 rounded-2xl bg-[#111827] border border-white/10 overflow-hidden shadow-2xl" aria-label="Project Visual">
          {project.image ? (
            <div className="relative w-full h-72 sm:h-96 md:h-[450px]">
              <Image
                src={project.image}
                alt={`${project.title} screenshot visual`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#111827] via-[#0A0A0A] to-[#111827]">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4">
                {getProjectIcon(project.id)}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xs text-zinc-400 max-w-md">
                Application interface and architecture visual placeholder. Screenshot will be populated upon final production asset export.
              </p>
            </div>
          )}
        </section>

        {/* Content Layout: Main Info + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Description */}
            <section className="p-7 rounded-2xl bg-[#111827] border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">
                Project Overview & Purpose
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Project Screenshot Gallery (Per PRD Section 5.8) */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section className="p-7 rounded-2xl bg-[#111827] border border-white/10">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 rounded-lg bg-[#C2F800]/10 text-[#C2F800]">
                    <Images size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Project Screenshots & UI Flow
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Actual interface walkthrough of {project.title}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {project.screenshots.map((shot, idx) => (
                    <div
                      key={idx}
                      className="group rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C2F800]/40 transition-all duration-300 shadow-md"
                    >
                      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-black">
                        <Image
                          src={shot.src}
                          alt={shot.title || `Screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 750px"
                          className="object-contain object-center"
                        />
                      </div>
                      <div className="p-4 border-t border-white/5 bg-[#111827]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-xs font-bold text-white">
                          {shot.title}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          {shot.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Implemented Features */}
            <section className="p-7 rounded-2xl bg-[#111827] border border-white/10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-[#C2F800]/10 text-[#C2F800]">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Implemented Features
                </h2>
              </div>

              <ul className="space-y-3.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-[#C2F800] mt-2 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Development Challenges */}
            <section className="p-7 rounded-2xl bg-[#111827] border border-white/10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Development Challenges & Learnings
                </h2>
              </div>

              <ul className="space-y-3.5">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Potential Improvements & Future Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Potential Improvements */}
              <section className="p-6 rounded-2xl bg-[#111827] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb size={18} className="text-[#C2F800]" />
                    <h2 className="text-base font-bold text-white">
                      Potential Improvements
                    </h2>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {project.improvements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C2F800]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Future Roadmap */}
              <section className="p-6 rounded-2xl bg-[#111827] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket size={18} className="text-[#C2F800]" />
                    <h2 className="text-base font-bold text-white">
                      Future Development Plans
                    </h2>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {project.futurePlans.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C2F800]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

          </div>

          {/* Right Sidebar: Tech Stack & Specs */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metadata Card */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Project Metadata
              </h2>
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                  Author
                </span>
                <span className="text-sm font-semibold text-white">
                  Jubair Hossain
                </span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                  Architecture
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.category}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                  Current Status
                </span>
                <span className="text-sm font-semibold text-[#C2F800]">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Back CTA Button */}
            <Link
              href="/#projects"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to All Projects</span>
            </Link>

          </aside>

        </div>
      </div>
    </article>
  );
}
