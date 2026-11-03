"use client";

import { GraduationCap, Code, Compass, Dumbbell, BookOpen, Film, Shield, Cpu } from "lucide-react";

export default function About() {
  const interests = [
    {
      icon: <Dumbbell className="text-[#C2F800]" size={18} />,
      title: "Fitness & Gym",
      desc: "Committed to regular workout routines and discipline, which inspired my FitLog application."
    },
    {
      icon: <Film className="text-[#C2F800]" size={18} />,
      title: "Anime",
      desc: "Enjoy captivating stories, creative world-building, and character development in anime."
    },
    {
      icon: <BookOpen className="text-[#C2F800]" size={18} />,
      title: "Novel Reading",
      desc: "Appreciate thoughtful fiction and non-fiction that broadens perspectives and analytical thinking."
    },
    {
      icon: <Shield className="text-[#C2F800]" size={18} />,
      title: "Cybersecurity & ML",
      desc: "Curious about secure coding practices, modern auth protocols, and practical machine learning."
    }
  ];

  return (
    <section id="about" className="section-spacing relative bg-[#0D1117]/60 border-t border-b border-white/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curious Developer, Problem Solver & Lifelong Learner
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A closer look into my educational journey, technical curiosities, and what drives my work.
          </p>
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
            <p>
              My journey into programming began with an honest curiosity about how software and websites actually function behind the interface. As an undergraduate student pursuing a <strong className="text-white font-semibold">B.Sc. (Engineering) in Computer Science and Engineering at Islamic University, Bangladesh</strong> (Academic Session 2021–2022), I have built a solid theoretical foundation in core computing principles, data structures, and algorithms.
            </p>

            <p>
              Along the way, I immersed myself in learning languages and modern tools. Starting with <strong className="text-white font-semibold">C++</strong>, I developed strong problem-solving fundamentals and structured computational thinking. From there, I transitioned toward web engineering—starting with HTML, CSS, and vanilla <strong className="text-white font-semibold">JavaScript</strong>, before advancing to <strong className="text-white font-semibold">React.js</strong>, <strong className="text-white font-semibold">Next.js</strong>, Tailwind CSS, and server-side technologies including PHP, Node.js fundamentals, and databases like MongoDB and MySQL.
            </p>

            <p>
              What excites me most about full-stack development is turning practical ideas into responsive, accessible, and user-centric web applications. Whether building a structured gym workout planner, designing a library inventory workflow, or implementing secure authentication protocols with Better Auth, I enjoy working through edge cases, debugging tricky states, and writing clean, maintainable code.
            </p>

            <p>
              Looking forward, I am eager to continue expanding my engineering skillset into <strong className="text-white font-semibold">cybersecurity</strong> and <strong className="text-white font-semibold">machine learning</strong>, exploring how intelligent systems and hardened security models can elevate modern web platforms.
            </p>
          </div>

          {/* Right Column: Key Pillars & Outside Interests */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Academic Card */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#C2F800]/10 border border-[#C2F800]/20 text-[#C2F800]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Undergraduate Studies</h3>
                  <p className="text-xs text-zinc-400">Computer Science & Engineering</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-normal">
                Studying at Islamic University, Bangladesh (Session 2021–2022). Focused on algorithmic problem solving, software design, and database systems.
              </p>
            </div>

            {/* Outside Interests Grid */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Compass size={14} className="text-[#C2F800]" />
                <span>Beyond the Terminal</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C2F800]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.icon}
                      <span className="text-xs font-semibold text-white">{item.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
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

