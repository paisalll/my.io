import { experiences } from "@/data/experience";

const typeLabel: Record<string, string> = {
  fulltime: "Full Time",
  freelance: "Freelance",
  internship: "Internship",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-outfit">
            Experience
          </p>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white">
            Pengalaman Kerja
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-slate-700/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                  i % 2 === 0 ? "" : "md:dir-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 z-10" />

                {/* Content card */}
                <div
                  className={`glass-card rounded-2xl p-7 ${
                    i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border mb-3 inline-block font-outfit ${
                          exp.type === "fulltime"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                        }`}
                      >
                        {typeLabel[exp.type]}
                      </span>
                      <h3 className="font-sora font-bold text-lg text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium mt-1 font-outfit">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-slate-600 whitespace-nowrap font-outfit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5 text-sm text-slate-400 font-outfit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500 mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
