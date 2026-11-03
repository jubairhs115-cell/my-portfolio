"use client";

import { Briefcase, FolderGit2, Terminal, BookCheck, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      period: "2023 – Present",
      role: "Hands-on Full Stack Development & Personal Projects",
      type: "Self-Directed Practical Experience",
      description:
        "Architecting and building responsive web applications from initial wireframing to database modeling and deployment. Implemented state management, REST API consumption, authentication workflows, and UI component architectures using Next.js, React, Tailwind CSS, and MongoDB.",
      highlights: [
        "Built FitLog gym tracking application utilizing Next.js App Router and dynamic client-side counters.",
        "Created a Library Management System with full CRUD workflows, inventory tracking, and MongoDB persistence.",
        "Engineered modern authentication flows integrating Better Auth, OAuth, and protected dashboard routes.",
      ],
      tags: ["Next.js", "React", "JavaScript", "MongoDB", "Better Auth", "Tailwind CSS"],
    },
    {
      period: "2022 – Present",
      role: "Algorithmic Problem Solving & Core Programming",
      type: "Academic & Competitive Practice",
      description:
        "Consistent programming practice focusing on Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP) using C++ and JavaScript. Developed a disciplined approach to code complexity analysis and debugging.",
      highlights: [
        "Implemented fundamental data structures: linked lists, trees, stacks, queues, and graph traversal logic.",
        "Applied OOP design principles including inheritance, encapsulation, polymorphism, and abstraction.",
        "Strengthened debugging skills and runtime efficiency optimization.",
      ],
      tags: ["C++", "Data Structures", "Algorithms", "OOP", "Problem Solving"],
    },
  ];

  return (
    <section id="experience" className="section-spacing relative bg-[#0A0A0A]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Experience & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Technical Experience
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A transparent overview of practical development projects, independent engineering practice, and problem-solving experience as an aspiring developer.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111827] border-2 border-[#C2F800] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="inline-flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-[#C2F800]">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2F800] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Employment Status */}
        <div className="mt-10 p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#C2F800]/10 text-[#C2F800] shrink-0 mt-0.5">
              <Briefcase size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Seeking Internship & Junior Web Developer Opportunities
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Looking to contribute technical enthusiasm, strong programming foundations, and rapid learning ability to a collaborative team.
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-black bg-[#C2F800] hover:bg-[#b4e600] px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            <span>Let&apos;s Discuss</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
