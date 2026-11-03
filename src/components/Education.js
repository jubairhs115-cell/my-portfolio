"use client";

import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  const coreCoursework = [
    "Object-Oriented Programming (C++)",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Computer Networks & Security",
    "Operating Systems Fundamentals",
    "Software Engineering & Design",
  ];

  return (
    <section id="education" className="section-spacing relative bg-[#0D1117]/60 border-t border-b border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formal Education
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            My academic foundation in Computer Science and Engineering, developing structured thinking and rigorous software development practices.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl">
          <div className="relative p-7 sm:p-9 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all shadow-xl">
            {/* Top Row: Degree & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Bachelor of Science in Engineering (B.Sc. Engg.)
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#C2F800] mt-0.5">
                    Department of Computer Science and Engineering
                  </p>
                  <p className="text-sm text-zinc-300 mt-1 flex items-center gap-1.5">
                    <MapPin size={15} className="text-zinc-400" />
                    <span>Islamic University, Bangladesh</span>
                  </p>
                </div>
              </div>

              {/* Session Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 self-start sm:self-center">
                <Calendar size={14} className="text-[#C2F800]" />
                <span>Session: 2021–2022</span>
              </div>
            </div>

            {/* Middle Section: Academic Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                  Status
                </span>
                <span className="text-sm font-semibold text-white">
                  Undergraduate Student (Enrolled)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                  Graduation Year
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  In Progress <span className="text-[11px] text-zinc-500">(Optional / To be updated)</span>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                  Cumulative GPA
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  Available upon request <span className="text-[11px] text-zinc-500">(Optional)</span>
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3.5 flex items-center gap-2">
                <BookOpen size={15} className="text-[#C2F800]" />
                <span>Key Computer Science Topics Studied:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {coreCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 size={13} className="text-[#C2F800] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

