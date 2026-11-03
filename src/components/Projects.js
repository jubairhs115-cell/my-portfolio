"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Layers, Dumbbell, BookOpen, KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const getProjectIcon = (id) => {
    switch (id) {
      case "fitlog":
        return <Dumbbell size={24} className="text-[#C2F800]" />;
      case "library-management":
        return <BookOpen size={24} className="text-[#C2F800]" />;
      case "authentication":
        return <KeyRound size={24} className="text-[#C2F800]" />;
      default:
        return <Layers size={24} className="text-[#C2F800]" />;
    }
  };

  return (
    <section id="projects" className="section-spacing relative bg-[#0D1117]/60 border-t border-b border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Applications
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Explore highlighted full-stack and frontend applications built to solve realistic problems with clean code and modern tooling.
            </p>
          </div>
          <div className="text-xs text-zinc-400">
            <span>Click any project to inspect architectural details</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#111827] border border-white/10 hover:border-[#C2F800]/40 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1"
            >
              {/* Project Visual / Screenshot Area */}
              <div className="relative h-48 sm:h-52 w-full bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-b border-white/10">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                  </div>
                ) : (
                  /* Stylized Project Vector Placeholder (PRD Section 5.7: Do not fabricate screenshots) */
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#111827] via-[#0A0A0A] to-[#111827] relative">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-3 group-hover:scale-110 group-hover:border-[#C2F800]/30 transition-all">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-sm font-bold text-white tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-zinc-400 mt-1">
                      {project.category}
                    </span>
                    <div className="absolute bottom-2.5 right-3 text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      Visual Illustration
                    </div>
                  </div>
                )}

                {/* Category Pill on top-left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0A0A0A]/85 backdrop-blur-md text-[#C2F800] border border-[#C2F800]/30 shadow">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C2F800] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Main Technologies Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-zinc-400 self-center px-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#C2F800] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-[#C2F800]/40 transition-colors"
                        title="GitHub Repository"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FaGithub size={15} />
                      </a>
                    ) : (
                      <span
                        className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/[0.02] border border-white/5"
                        title="Repository link to be updated"
                      >
                        Repo Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
