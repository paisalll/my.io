"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { allProjects, type ProjectCategory } from "@/data/projects";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "Semua", value: "all" },
  { label: "Enterprise", value: "enterprise" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Edukasi", value: "education" },
  { label: "Finance", value: "finance" },
  { label: "Platform", value: "social" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-outfit">
            Portfolio
          </p>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-5">
            Project yang Pernah
            <br />
            <span className="gradient-text">Saya Bangun</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl font-outfit leading-relaxed">
            Setiap project dimulai dari masalah nyata. Berikut solusi yang saya
            bangun untuk klien dan bisnis dari berbagai industri.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-outfit ${
                activeFilter === f.value
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {f.label}
              <span
                className={`ml-2 text-xs ${
                  activeFilter === f.value ? "text-blue-200" : "text-slate-600"
                }`}
              >
                {f.value === "all"
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-5 font-outfit">
            Punya ide project? Mari kita diskusikan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Diskusi Project Gratis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
