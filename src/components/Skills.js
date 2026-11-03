"use client";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { ShieldCheck, Code, Layers, Server, Wrench } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      icon: <Code size={18} className="text-[#C2F800]" />,
      description: "Core languages for algorithmic logic, structured programming, and scripting.",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" size={20} />, note: "OOP & Problem Solving" },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={20} />, note: "ES6+, Async, DOM" },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Layers size={18} className="text-[#C2F800]" />,
      description: "Building responsive, modern, and interactive user interfaces.",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={20} />, note: "Semantic Markup" },
        { name: "CSS3", icon: <SiCss className="text-[#1572B6]" size={20} />, note: "Responsive Layouts" },
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" size={20} />, note: "Hooks & Components" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={20} />, note: "App Router & SSR" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={20} />, note: "Utility-First Styling" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Server size={18} className="text-[#C2F800]" />,
      description: "Data persistence, server architecture, and authentication systems.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={20} />, note: "Core Fundamentals" },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" size={20} />, note: "Server Scripting" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={20} />, note: "NoSQL Schemas" },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={20} />, note: "Relational Queries" },
        { name: "Better Auth", icon: <ShieldCheck className="text-[#C2F800]" size={20} />, note: "Modern Auth & Sessions" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench size={18} className="text-[#C2F800]" />,
      description: "Version control, environment tooling, and deployment pipelines.",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" size={20} />, note: "Version Control" },
        { name: "GitHub", icon: <SiGithub className="text-white" size={20} />, note: "Collaboration & Repos" },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" size={20} />, note: "Primary IDE" },
        { name: "Vercel", icon: <SiVercel className="text-white" size={20} />, note: "CI/CD & Deployment" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-spacing relative bg-[#0A0A0A]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies & Tools I Work With
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A practical overview of languages, frameworks, databases, and developer tools learned through university coursework and hands-on projects.
          </p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 mb-5">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C2F800]/40 hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="shrink-0 transition-transform group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white group-hover:text-[#C2F800] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          {skill.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Footnote per PRD */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-zinc-400 max-w-2xl mx-auto">
          <p>
            * Presented as technologies learned and applied through project implementations and academic study, rather than arbitrary proficiency percentages.
          </p>
        </div>
      </div>
    </section>
  );
}
