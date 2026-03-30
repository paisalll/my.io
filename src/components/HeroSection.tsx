"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-[100px] animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/30 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Tersedia untuk project baru
          </div>

          {/* Headline */}
          <h1 className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
            Saya Ubah{" "}
            <span className="gradient-text">Ide Bisnis</span>
            <br />
            Jadi Aplikasi{" "}
            <br className="hidden md:block" />
            <span className="text-white">yang Menghasilkan.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200 font-outfit">
            Full-Stack Developer dengan{" "}
            <strong className="text-slate-200">4 tahun pengalaman</strong>{" "}
            membangun sistem enterprise, platform e-commerce, dan aplikasi web
            modern yang menekan biaya, mengurangi kesalahan, dan meningkatkan
            kepuasan pengguna.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Lihat Project Saya
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Diskusi Project
            </a>
          </div>

          {/* Social proof numbers */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-14 animate-fade-in delay-500">
            {[
              { value: "4+", label: "Tahun Pengalaman" },
              { value: "11+", label: "Project Diselesaikan" },
              { value: "3", label: "Perusahaan Enterprise" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-sora font-bold text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-0.5 font-outfit">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-600 font-outfit">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
