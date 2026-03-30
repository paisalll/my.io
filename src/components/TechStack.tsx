import { techCategories } from "@/data/experience";

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="section-divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-outfit">
            Tech Stack
          </p>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white">
            Teknologi yang Saya Kuasai
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techCategories.map((cat) => (
            <div
              key={cat.label}
              className="glass-card rounded-xl p-5 hover:border-white/10 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <span className="font-sora font-semibold text-sm text-white">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-white/5 border border-white/8 text-slate-400 px-2.5 py-1 rounded-md font-outfit"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 glass-card rounded-xl p-6">
          <h3 className="font-sora font-semibold text-white text-sm mb-4">
            Sertifikasi
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { title: "HackerRank Problem Solving Basic", issuer: "HackerRank" },
              { title: "HackerRank React Basic", issuer: "HackerRank" },
              { title: "Frontend Engineering Bootcamp", issuer: "Alterra Academy" },
            ].map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-3 bg-white/3 border border-white/5 rounded-lg px-4 py-3"
              >
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200 font-outfit">
                    {cert.title}
                  </div>
                  <div className="text-xs text-slate-600 font-outfit">
                    {cert.issuer}
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
