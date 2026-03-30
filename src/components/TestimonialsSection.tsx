import { testimonials } from "@/data/experience";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6">
      <div className="section-divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-outfit">
            Testimonials
          </p>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white">
            Apa Kata Mereka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-6 hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="text-blue-500/40 text-4xl font-serif leading-none mb-4">
                "
              </div>

              <p className="text-slate-400 text-sm leading-relaxed font-outfit flex-1 mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold font-sora shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white font-outfit">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-600 font-outfit">
                    {t.role} · {t.company}
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
