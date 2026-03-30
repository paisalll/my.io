"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";

const categoryLabels: Record<string, { label: string; color: string }> = {
  enterprise: { label: "Enterprise", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  ecommerce: { label: "E-Commerce", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
  education: { label: "Edukasi", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
  finance: { label: "Finance", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  social: { label: "Platform", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cat = categoryLabels[project.category];

  return (
    <article
      className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 glow-card flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      {/* Card header */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            {/* Category badge */}
            <span
              className={`category-badge border ${cat.color} inline-block mb-3`}
            >
              {cat.label}
            </span>
            <h3 className="font-sora font-semibold text-xl text-white leading-snug">
              {project.title}
            </h3>
            <p className="text-slate-500 text-sm mt-1 font-outfit">
              {project.subtitle}
            </p>
          </div>
          {project.client && (
            <span className="text-xs text-slate-600 text-right whitespace-nowrap shrink-0 mt-1 font-outfit">
              {project.client}
            </span>
          )}
        </div>

        {/* Problem */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Masalah Bisnis
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-outfit">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Solusi yang Dibangun
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-outfit">
            {project.solution}
          </p>
        </div>

        {/* Impact - expandable */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 mb-2 group/btn"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover/btn:text-emerald-400 transition-colors">
              Dampak & Hasil
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-slate-600 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {expanded && (
            <ul className="space-y-2 mt-3">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 font-outfit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-400 mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Source Code
            </a>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <span className="text-xs text-slate-600 font-outfit italic py-2.5">
              Project confidential (enterprise)
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
